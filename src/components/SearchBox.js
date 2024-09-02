import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import lupa from '../assets/images/lupa.png';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/items?search=${searchTerm}`);
  };

  return (
    <div className="search-box">
      <div className="search-box-container container">
        <a href="/">
          <img 
            src={logo}
            alt="Logo" 
            className="search-box-logo"
          />
        </a>
        <form onSubmit={handleSearch} className="search-box-form">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Nunca dejes de buscar"
            className="search-box-input"
          />
          <button type="submit" className="search-box-button">
            <img 
              src={lupa}
              alt="Buscar" 
            />
          </button>
        </form>
      </div>
    </div>
    
  );
}

export default SearchBox;
