import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResultsPage from './pages/SearchResult';
import ProductDetailPage from './pages/ProductDetailPage';
import Layout from './components/Layout/index';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchResultsPage />} />
          <Route path="/items" element={<SearchResultsPage />} />
          <Route path="/items/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
