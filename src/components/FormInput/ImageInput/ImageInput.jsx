import React, { useState } from 'react';
import {
  Image,
  ImageInputButton,
  ImageInputContainer,
  NoImageMsg,
  UploadInput
} from './ImageInput.styles';
import { Box, Button, Grid, Grid2 } from '@mui/material';
export const ImageInput = ({ state, handleChange, images = [] }) => {
  const [inputImage, setInputImage] = useState([]);

  const handleImageChange = event => {
    const files = Array.from(event.target.files);

    const newImages = files.map(file => {
      return URL.createObjectURL(file);
    });

    setInputImage(prevImages => [...prevImages, ...newImages]);
    handleChange(state, [...images, ...newImages]);
  };

  const handleClick = () => {
    document.getElementById('multi-image-upload').click();
  };

  return (
    <ImageInputContainer>
      <ImageInputButton onClick={handleClick}>
        {inputImage.length ? (
          <Grid2 container spacing={2}>
            {inputImage.map((src, index) => (
              <Grid2 key={index}>
                <Image src={src} alt={`Uploaded ${index + 1}`} />
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
