import React from 'react';

interface ProdutoProps {
  id: number;
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  price2: string;
}

const Produto: React.FC<ProdutoProps> = ({ id, imgSrc, alt, title, description, price, price2 }) => {
  return (
    <div className="produto">
      <img src={imgSrc} alt={alt} />
      <h2>{title}</h2>
      <p className='description'>{description}</p>
      <p className='price2'>{price2}</p>
      <p className='price'>{price}</p>
    </div>
  );
};

export default Produto;
