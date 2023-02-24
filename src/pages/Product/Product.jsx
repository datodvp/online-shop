import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return <h1>ProductId: {productId}</h1>;
};

export default Product;
