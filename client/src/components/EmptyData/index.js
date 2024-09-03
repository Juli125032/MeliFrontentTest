import React from "react";
import search from "../../assets/images/search.png"
export const EmptyData = () => {
  return (
    <div className="empty">
      <img src={search}/>
      <p>Escribe en el buscador lo que quieras encontrar.</p>
    </div>
  );
};