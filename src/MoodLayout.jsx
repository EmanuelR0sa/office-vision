import React from 'react';


function MoodLayout({ selectedImages }) {
  return (
    <div className='layoutContainer' >
      <div className='layoutMainContent'id='myCanva'>
        {selectedImages && selectedImages.length > 0 ? (
          selectedImages.map((selectedImage) => (
            <img
            className={`selectedImage image-${selectedImage.id}`}
              key={selectedImage.id}
              src={selectedImage.item}
              id={selectedImage.id}
              alt={selectedImage.caption}
            />
            
          ))
        ) : (
          <div className='noImageSelected'>Start Creating your mooboard</div>
        )}
        <div className='layoutTitle'>
            <h3> MOODBOARD - Home Office</h3>
           </div>
      </div>
    </div>
  );
}

export default MoodLayout



