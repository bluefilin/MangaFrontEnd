import React from 'react'
import Doraemon from "../Components/img/DoraemonPoster.jpg"
import './HomePage.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }

  };
  return (
    <>
      <div className="carousel">
        <div style={{ position: 'relative' }}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 1
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <img
              src="https://static.displate.com/857x1200/displate/2022-12-20/a18122c9f5ffbda7687b385479be0c99_c2e7f6cd94c852a70ee8aa660d7cf40b.jpg"
              style={{
                display: 'block',
                height: '100px',
                margin: 'auto',
                width: '100px'
              }} />
            <img
              src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src="https://static.displate.com/857x1200/displate/2022-12-20/a18122c9f5ffbda7687b385479be0c99_c2e7f6cd94c852a70ee8aa660d7cf40b.jpg"
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
          </Carousel>
        </div>
      </div>
      <div>
        <div className="sction-claro">
          <h1>hola</h1>
        </div>
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
      </div>



    </>
  )
}
