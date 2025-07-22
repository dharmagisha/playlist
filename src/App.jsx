import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav'
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
          {/* <Route path='/' element={<Register />} /> */}
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/booking' element={<><Nav /><Booking /></>} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path='/' element={<><Nav /><Home /><Contact /><Footer /> </>} />
          <Route path='/Book' element={<><Nav /><Book /><Footer />  </>} />
          <Route path='/Book/:Bikename' element={<><Nav /><BookList /><Footer /> </>} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
