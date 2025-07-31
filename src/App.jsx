import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav'
import Navv from './Navv'

import Home from './home'
import Book from './Book'
import BookList from './Booklist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register';
import Contact from './Contact'
import Footer from './Footer'
import Booking from './Booking'
import BookingList from './BookingList';


const App = () => {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/Register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/booking' element={<><Navv /><Booking /></>} />
          <Route path="/bookings" element={<><Navv /><BookingList /></>} />
          <Route path='/home' element={<><Nav /><Home /><Contact /><Footer /> </>} />
          <Route path='/Book' element={<><Nav /><Book /><Footer />  </>} />
          <Route path='/Book/:Bikename' element={<><Nav /><BookList /><Footer /> </>} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
