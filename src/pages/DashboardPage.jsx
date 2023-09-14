import React from 'react'
import { useEffect, useState } from "react";
import Doraemon from "../Components/img/DoraemonPoster.jpg"
import './DashBoardPage.css'


export const DashboardPage = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/anime')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <div>
      </div>
      <h1 className="titulo">Productos</h1>
      <div className="productos">
        {data.map((d, i) => (
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={Doraemon} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1 key={i} className="titulo">{d.titulo}</h1>
            <p className="categoria"> Descripcion </p>
            <h2 key={i} className="descripcion">{d.descripcion}</h2>
            <p key={i} className="price">${d.precio} </p>
          </div>
          <div className="buttom">
            <button className="btn">
              Añadir al carrito
            </button>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}
