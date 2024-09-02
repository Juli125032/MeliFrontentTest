import React from 'react';
import Item from './Item';

function ItemsList({ items }) {
  return (
    <div className='container items-container'>
      {items.map((item, index) => (
        <Item key={index} product={item} />
      ))}
    </div>
  );
}

export default ItemsList;
