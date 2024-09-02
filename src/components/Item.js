import React from 'react';
import { useNavigate } from 'react-router-dom';
import truck from '../assets/images/camion.png'

function Item({ product }) {
  const { price, id } = product;
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price.amount + price.decimals / 100);


  const handleCardClick = () => {
    navigate(`/items/${id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className='product-container'>
        <img src={product.picture} alt={product.title} className="product-image" />
        <div className="product-info">
          <div className="product-price">
            <span className="price-amount">$ {formattedPrice}</span>
            {product.free_shipping && <span className="free-shipping-icon"><img alt='Free Shipping' src={truck} /></span>}
          </div>
          <div className="product-title">{product.title}</div>
        </div>
      </div>
      <div className="product-location">{product.location}</div>
    </div>
  );
}

export default Item;
