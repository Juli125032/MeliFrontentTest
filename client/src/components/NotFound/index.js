import React from "react";
import vacia from "../../assets/images/vacia.png"

export const NotFound = () => {
  return (
    <div className="empty">
      <img alt="Parece que esta página no existe" src={vacia}/>
      <p>Parece que esta página no existe</p>
    </div>
  );
};