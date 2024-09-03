import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItems } from '../../services/api';
import Breadcrumbs from '../../components/Breadcrumbs';
import Item from './components/Item'
import Loader from '../../components/Loader';
import { EmptyData } from '../../components/EmptyData';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SearchResultsPage() {
  const query = useQuery().get('search');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    setItems([]);
    async function getResults() {
      try {
        const data = await searchItems(query);
        setItems(data.items);
        setCategories(data.categories);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    if (query) {
      getResults();
    }
  }, [query]);

  return (
    <div>
      {query ?
        (<>
          {loading ? (<Loader></Loader>) : (
            <>
              {categories.length > 0 && (
                <Breadcrumbs categories={categories} />
              )}
              <div className={`container items-container ${categories.length > 0 ? '' : 'mt-2'}`}>
                {items.map((item, index) => (
                  <Item key={index} product={item} />
                ))}
              </div>
            </>
          )}
        </>) : (<EmptyData></EmptyData>)}
    </div>
  );
}

export default SearchResultsPage;
