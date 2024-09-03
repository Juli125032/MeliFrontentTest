import React from "react";
import search from "../../assets/images/search.png"
export const EmptyData = () => {
  return (
    <div className="empty">
      <img alt="Escribe en el buscador lo que quieras encontrar" src={search}/>
      <p>Escribe en el buscador lo que quieras encontrar.</p>
    </div>
  );
};