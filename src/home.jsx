import React from 'react'
import { image } from './assets/assets'
import './App.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Why from './why'
import Featured from  './Featured'



const home = () => {
  return (
    <div>
      <div className="back-main d-flex justify-content-start align-items-center">
        <Link to='/Book'><Button variant="outline-dark fw-bold ms-5"> Book Your Ride Now</Button></Link>
      </div>

       <Why/>
       <Featured/>
    </div>
  )
}

export default home
