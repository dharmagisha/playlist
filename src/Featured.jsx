import React from 'react';
import { Link } from 'react-router-dom';
import { image } from './assets/assets';
import Carousel from 'react-bootstrap/Carousel';

const Featured = () => {
    return (
        <>
            <div className="container my-5">
      <h2 className="text-center mb-3">About Us</h2>
      <p className="text-center text-muted mb-4">
        We offer a wide range of bikes to match every rider’s style and journey.
      </p>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.Main}   // replace with real images
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Sports Bikes</h5>
            <p>Feel the thrill and power on the road.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.Main}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Scooters</h5>
            <p>Perfect for city rides and commutes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.Main} 
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Cruisers</h5>
            <p>Comfort for those long highways.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
        </>
    )
}

export default Featured;
