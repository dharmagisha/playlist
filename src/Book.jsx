import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { image } from './assets/assets'
import { Link } from 'react-router-dom';

const bikes = [
  {
    title: "Sports Bikes",
    nam: "Sports",
    text: "Fast and stylish bikes for adrenaline lovers.",
    img: image.yamaha
  },
  {
    title: "Scooters",
    nam: "Scooters",
    text: "Perfect for daily commutes and city rides.",
    img: image.Scooter1
  },
  {
    title: "Cruisers",
    nam: "Cruisers",
    text: "Comfortable bikes for long highway rides.",
    img: image.Cru4
  },

  {
    title: "Electric Bikes",
    nam: "Electric Bikes",
    text: "Eco-friendly rides with modern tech.",
    img: image.Elec
  },
  {
    title: "Adventure Bikes",
    nam: "Adventure Bikes",
    text: "Built for off-road and long touring adventures.",
    img: image.advan
  },
  {
    title: "Touring Bikes",
    nam: "Touring Bikes",
    text: "Comfortable bikes designed for long distance rides.",
    img: image.Back
  },
  {
    title: "Dirt Bikes",
    nam: "Dirt Bikes",
    text: "Lightweight bikes for motocross and dirt tracks.",
    img: image.dirt
  },
  {
    title: "Classic Bikes",
    nam: "Classic Bikes",
    text: "Vintage style bikes with modern engineering.",
    img: image.clasic
  }
];




const Book = () => {
  return (
    <div >
      <div className="container my-1 ">
        <Link to='/home'>
          <button className="back-button">←</button>
        </Link>
        <h2 className="text-center mb-4">Choose Your Bike Category</h2>
        

        <div className="book-over row g-5 ">
          {bikes.map((cate) => (
            <div className="col-md-6">
              <Link to={`/Book/${cate.nam}`} className="text-decoration-none text-dark">
                <Card className="h-100 card-hover ">
                  <Card.Img variant="top" src={cate.img} />
                  <Card.Body className='d-flex justify-content-center align-items-center'>
                    <h4 className="fw-bold ">{cate.title}</h4>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Book
