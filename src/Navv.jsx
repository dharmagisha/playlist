import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './App.css';

const MyNavbar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const suggestions = [
    "Scooters", "Cruisers", "Sports Bikes", "Electric Bikes",
    "Touring Bikes", "Dirt Bikes", "Adventure Bikes", "Classic Bikes"
  ];

  const suggestionMap = {
    "Scooters": "Scooters",
    "Cruisers": "Cruisers",
    "Sports Bikes": "Sports",
    "Electric Bikes": "Electric Bikes",
    "Touring Bikes": "Touring Bikes",
    "Dirt Bikes": "Dirt Bikes",
    "Adventure Bikes": "Adventure Bikes",
    "Classic Bikes": "Classic Bikes"
  };

  return (
    <Navbar expand="lg" className="bg-dark py-2" data-bs-theme="dark">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="#" className="fw-bold ms-4">RideNow</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">

            <div className="position-relative">
              <Form className=" d-lg-flex">
                <InputGroup size="sm">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="small-search-input"
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  />
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                </InputGroup>

                {showSuggestions && (
                  <div className="bg-white border rounded mt-1 position-absolute w-100 shadow suggestion-list">
                    {suggestions.map((item, index) => (
                      <div
                        key={index}
                        className="p-2 hover-bg"
                        style={{ cursor: 'pointer' }}
                        onMouseDown={() => {
                          const routeName = suggestionMap[item];
                          navigate(`/Book/${routeName}`);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </Form>
            </div>
            <Link to='/bookings' className="ms-2 my-2 my-lg-0">
              <Button variant="outline-light fw-bold small-login-btn" size="sm">
                View Bookings
              </Button>
            </Link>
          
            <Link to='/' className="ms-2 my-2 my-lg-0">
              <Button variant="outline-light fw-bold small-login-btn" size="sm">
                Logout
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
