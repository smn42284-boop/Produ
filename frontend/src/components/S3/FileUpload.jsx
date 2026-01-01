import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCloudUploadAlt, 
  faCheckCircle, 
  faTimesCircle,
  faSpinner,
  faImage,
  faFile,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

const FileUpload = ({ 
  onUploadSuccess, 
  accept = 'image/*,.pdf,.doc,.docx', 
  maxSizeMB = 10,
  multiple = false 
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    handleUpload(files);
  };

  const handleUpload = async (files) => {
    setError('');
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const token = localStorage.getItem('adminToken');
      
      // Process each file
      const uploadPromises = files.map(async (file) => {
        // Check file size
        if (file.size > maxSizeMB * 1024 * 1024) {
          throw new Error(`File ${file.name} exceeds ${maxSizeMB}MB limit`);
        }

        // Get pre-signed URL from backend
        const presignedResponse = await axios.post(
          'http://localhost:5001/api/s3/generate-presigned-url',
          {
            fileName: file.name,
            fileType: file.type
          },
          {
            headers: { 
              'Authorization': `Bearer ${token}` 
            }
          }
        );

        const { uploadUrl, fileUrl } = presignedResponse.data;

        // Upload to S3 using pre-signed URL
        await axios.put(uploadUrl, file, {
          headers: {
            'Content-Type': file.type
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          }
        });

        return {
          name: file.name,
          url: fileUrl,
          type: file.type,
          size: file.size,
          uploadedAt: new Date().toISOString()
        };
      });

      const uploadedFiles = await Promise.all(uploadPromises);
      setUploadedFiles(prev => [...prev, ...uploadedFiles]);
      
      if (onUploadSuccess) {
        onUploadSuccess(uploadedFiles);
      }

      setUploadProgress(100);
      
      // Reset after success
      setTimeout(() => {
        setUploadProgress(0);
      }, 1000);

    } catch (error) {
      console.error('Upload error:', error);
      setError(error.response?.data?.error || error.message || 'Upload failed');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = Array.from(e.dataTransfer.files);
    handleUpload(files);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) return faImage;
    return faFile;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition duration-300 ${
          isUploading 
            ? 'border-royal-blue bg-blue-50' 
            : 'border-gray-300 hover:border-royal-blue hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => !isUploading && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          accept={accept}
          multiple={multiple}
          className="hidden"
          disabled={isUploading}
        />
        
        <div className="mb-4">
          <FontAwesomeIcon 
            icon={isUploading ? faSpinner : faCloudUploadAlt} 
            className={`text-4xl ${isUploading ? 'text-royal-blue animate-spin' : 'text-gray-400'}`}
          />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {isUploading ? 'Uploading...' : 'Upload Files'}
        </h3>
        
        <p className="text-gray-600 mb-4">
          Drag & drop files here or click to browse
        </p>
        
        <p className="text-sm text-gray-500">
          Max file size: {maxSizeMB}MB • Supported: Images, PDF, Word
        </p>
        
        {/* Progress Bar */}
        {isUploading && (
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-royal-blue to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {uploadProgress}% complete
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center text-red-700">
            <FontAwesomeIcon icon={faTimesCircle} className="mr-2" />
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-4">Uploaded Files</h4>
          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-royal-blue">
                    <FontAwesomeIcon icon={getFileIcon(file.type)} size="lg" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{file.name}</div>
                    <div className="text-sm text-gray-500">
                      {formatFileSize(file.size)} • {new Date(file.uploadedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-royal-blue hover:text-blue-700 font-medium text-sm"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Success Message */}
      {!isUploading && uploadedFiles.length > 0 && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center text-green-700">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            <span>Files uploaded successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;