import React from 'react';
import { useParams } from 'react-router-dom';

export const EditProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <div>ID: {id}</div>
    </>
  );
};
