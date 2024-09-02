import React from 'react';
import SearchBox from './SearchBox';

function Layout({ children }) {
  return (
    <div>
      <header>
        <SearchBox />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
