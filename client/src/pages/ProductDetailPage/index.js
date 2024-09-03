import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemDetails } from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs';
import Loader from '../../components/Loader';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const renderProduct = () =>
  (<div className='container product-detail-container'>
    <div className='product-detail'>
      <img className='product-detail-image' src={product.picture} alt={product.title} />
      <div className='product-detail-info'>
        <p className='product-detail-condition'>{product.condition === "new" ? "Nuevo" : "Usado"} - {product.initial_quantity} Cantidad</p>
        <p className='product-detail-title'>{product.title}</p>
        <p className='product-detail-price'>$ {product.price.amount} </p>
        <button className='button button-secondary'>
          Comprar
        </button>
      </div>
    </div>
    {
      product.description && (
        <div className='product-detail-description'>
          <h1>Descripción del producto</h1>
          <p>{product.description}</p>
        </div>
      )
    }
  </div>)


  useEffect(() => {
    async function getProductDetails() {
      try {
        const data = await getItemDetails(id);
        setProduct(data.item);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getProductDetails();
  }, [id]);

  return (
    <div>
      {loading ? (<Loader></Loader>) : (
        <>
        {product?.categories?.length > 0 && (
          <Breadcrumbs categories={product.categories} />
        )}
        {product ? renderProduct() : <div>No se encontró el producto.</div>}
        </>
      )}
    </div>
  );
}

export default ProductDetailPage;
