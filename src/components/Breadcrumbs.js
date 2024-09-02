import React from 'react';

function Breadcrumbs({ categories }) {
    return (
        <div className="container breadcrumb">
             {categories.map((category, index) => (
                <span key={index}>{category}</span>
            ))}
        </div>
    );
}

export default Breadcrumbs;
