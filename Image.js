import React, { useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import './Image.css';

function Image() {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload === null) return;
    const uniqueFileName = `${uuidv4()}_${imageUpload.name}`;
    const imageRef = ref(storage, `images/${uniqueFileName}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded!");
    });
  };
  return (
    <div className="image-container">
      Add an Image:
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
}

export default Image;
