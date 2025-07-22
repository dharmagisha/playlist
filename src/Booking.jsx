import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { image } from './assets/assets';
import "./App.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';

const BookingPage = () => {

 const Navigate = useNavigate();
  const [days, setDays] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const ratePerDay = 1500;
  const total = days * ratePerDay;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      email,
      phone,
      days,
      total
    };

    try {
      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        alert('Booking saved successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setDays(1);
      }
      return(
         Navigate('/bookings')
      )
  
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving booking');
    }
  };


  return (
    <div style={{
      backgroundImage: `url(${image.Backk})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '800px',
    }}>
      <Container className="py-5" >
        <Row >
          <Col md={6}>
            <div className="booking-header">
              <Link to="/Book">
                <button className="back-buttonn">←</button>
              </Link>
              <h2 style={{ textAlign: 'center' }}>Book Your Ride</h2>
            </div>

            <Card className="shadow" style={{ backgroundColor: "rgba(255,255,255,0.3)", border: "none", fontFamily: 'bolder' }}>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Select number of days (max 5):</Form.Label>
                    <Form.Select value={days} onChange={(e) => setDays(Number(e.target.value))}>
                      {[1, 2, 3, 4, 5].map(d => (
                        <option key={d} value={d}>{d} {d === 1 ? 'day' : 'days'}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <div className="mb-3">
                    <p>Price per day: <strong>₹{ratePerDay}</strong></p>
                    <p>Total: <strong>₹{total}</strong></p>
                  </div>

                  <strong className="text-muted small mb-3">
                    Note: Bring original Driving License and Govt. ID proof when picking up your bike.
                  </strong>
                  
                 
          <Button variant="dark" type="submit" className='mt-3'>Confirm Booking</Button>

                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingPage;

