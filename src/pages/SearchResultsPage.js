import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemsList from '../components/ItemsList';
import { searchItems } from '../services/api';
import Breadcrumbs from '../components/Breadcrumbs';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SearchResultsPage() {
  const query = useQuery().get('search');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getResults() {
      try {
        const data = await searchItems(query);
        setItems(data.items);
        setCategories(data.categories);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    if (query) {
      getResults();
    }
  }, [query]);

  if (loading && query) {
    return <div className='container alert'>Cargando resultados...</div>;
  }

  if (error) {
    return <div className='container alert'>Error: {error}</div>;
  }

  return (
    <div>
      {categories.length > 0 && (
        <Breadcrumbs categories={categories}/>
      )}
      <ItemsList items={items} />
    </div>
  );
}

export default SearchResultsPage;
