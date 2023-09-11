import React from 'react'
import Doraemon from "../Components/img/DoraemonPoster.jpg"
import './HomePage.css'

export const HomePage = () => {
  return (
    <>
      <h1 className="titulo">Productos</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={Doraemon} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1 className="titulo"> Titulo </h1>
            <p className="categoria"> Descripcion </p>
            <h2 className="descripcion">Doraemon es un robot que viene del futuro para ayudar a Nobita Nobi en el día a día para que pueda tener un futuro mejor.</h2>
            <p className="price"> $ </p>
          </div>
          <div className="buttom">
            <button className="btn">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>


    </>
  )
}
