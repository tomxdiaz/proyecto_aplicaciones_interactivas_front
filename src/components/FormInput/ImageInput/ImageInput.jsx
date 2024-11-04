import { Grid2 } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  CloseIcon,
  Image,
  ImageInputButton,
  ImageInputContainer,
  NoImageMsg,
  UploadInput
} from './ImageInput.styles';
export const ImageInput = ({ state, handleChange, images = [] }) => {
  const [inputImage, setInputImage] = useState(images);

  const handleImageChange = event => {
    const files = Array.from(event.target.files);

    const newImages = files.map(file => {
      return URL.createObjectURL(file);
    });

    setInputImage(prevImages => [...prevImages, ...newImages]);
    handleChange(state, [...images, ...newImages]);
  };

  const addImage = () => {
    document.getElementById('multi-image-upload').click();
  };

  const removeImage = (event, index) => {
    event.stopPropagation();
    const newImages = [...inputImage];
    newImages.splice(index, 1);
    setInputImage(newImages);
    handleChange(state, newImages);
  };

  useEffect(() => setInputImage(images), [images]);

  return (
    <ImageInputContainer>
      <ImageInputButton disableRipple onClick={addImage}>
        {inputImage.length ? (
          <Grid2 container spacing={2}>
            {inputImage.map((src, index) => (
              <Grid2 container key={index}>
                <Image src={src} alt={`Uploaded ${index + 1}`} />
                <CloseIcon onClick={event => removeImage(event, index)} />
              </Grid2>
            ))}
          </Grid2>
        ) : (
          <NoImageMsg>Click para agregar imagenes</NoImageMsg>
        )}
      </ImageInputButton>
      <UploadInput
        id='multi-image-upload'
        type='file'
        accept='image/*'
        multiple
        onChange={handleImageChange}
      />
    </ImageInputContainer>
  );
};
