import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '🎪', title: 'AI Summit 2023', description: 'Main stage at our annual summit' },
    { id: 2, src: '👥', title: 'Networking Session', description: 'Attendees networking' },
    { id: 3, src: '🎤', title: 'Keynote Speech', description: 'Industry expert presentation' },
    { id: 4, src: '💻', title: 'Workshop', description: 'Hands-on training session' },
    { id: 5, src: '🏆', title: 'Awards Ceremony', description: 'Innovation awards 2023' },
    { id: 6, src: '🤝', title: 'Partnership Announcement', description: 'New strategic partnership' },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Event Gallery</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map(image => (
          <div
            key={image.id}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg aspect-square flex flex-col items-center justify-center p-4 cursor-pointer hover:opacity-90 transition duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <div className="text-4xl mb-2">{image.src}</div>
            <p className="text-white text-sm text-center font-medium">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-64 flex items-center justify-center mb-4">
              <div className="text-8xl">{selectedImage.src}</div>
            </div>
            <p className="text-gray-600">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;