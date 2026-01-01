import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faImage, 
  faFile,
  faVideo,
  faMusic,
  faDownload,
  faExternalLinkAlt,
  faTrash,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

const FileGallery = ({ adminMode = false }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFiles = async () => {
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('http://localhost:5001/api/s3/files', {
        headers: { 
          'Authorization': `Bearer ${token}` 
        }
      });
      
      if (response.data.success) {
        setFiles(response.data.files);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
      setError('Failed to load files. Please check your permissions.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDeleteFile = async (fileKey) => {
    if (!window.confirm('Are you sure you want to delete this file?')) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`http://localhost:5001/api/s3/file/${encodeURIComponent(fileKey)}`, {
        headers: { 
          'Authorization': `Bearer ${token}` 
        }
      });
      
      // Remove from local state
      setFiles(files.filter(file => file.key !== fileKey));
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Failed to delete file');
    }
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension)) {
      return faImage;
    } else if (['mp4', 'avi', 'mov', 'wmv'].includes(extension)) {
      return faVideo;
    } else if (['mp3', 'wav', 'ogg'].includes(extension)) {
      return faMusic;
    } else {
      return faFile;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <FontAwesomeIcon icon={faSpinner} className="text-royal-blue text-2xl animate-spin" />
        <span className="ml-3 text-gray-600">Loading files...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-700">{error}</div>
        <button
          onClick={fetchFiles}
          className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">File Gallery</h3>
        <div className="text-gray-600">
          {files.length} file{files.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      {files.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
          <div className="text-4xl mb-4">📁</div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">No files uploaded yet</h4>
          <p className="text-gray-600">Upload your first file to see it here</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
            >
              {/* File Preview */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                {file.key.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                  <img 
                    src={file.url} 
                    alt={file.key}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-center">
                          <div class="text-4xl mb-2">📷</div>
                          <div class="text-gray-600">Image Preview</div>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="text-center">
                    <FontAwesomeIcon 
                      icon={getFileIcon(file.key)} 
                      className="text-royal-blue text-5xl mb-4" 
                    />
                    <div className="text-gray-600">File Preview</div>
                  </div>
                )}
              </div>
              
              {/* File Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 truncate">
                      {file.key.split('/').pop()}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  {adminMode && (
                    <button
                      onClick={() => handleDeleteFile(file.key)}
                      className="text-red-500 hover:text-red-700 ml-2"
                      title="Delete file"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  )}
                </div>
                
                <div className="text-xs text-gray-500 mb-4">
                  Uploaded: {formatDate(file.lastModified)}
                </div>
                
                {/* Actions */}
                <div className="flex space-x-2">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-blue-50 text-royal-blue px-3 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                    <span>Open</span>
                  </a>
                  <a
                    href={file.url}
                    download
                    className="flex-1 flex items-center justify-center bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileGallery;