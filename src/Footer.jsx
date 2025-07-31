import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './App'

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row className="text-center">
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Address</h6>
                        <p className="mb-1">123 Main Street</p>
                        <p className="mb-1">kanyakumari, Tamil Nadu, India</p>
                        <p className="mb-1">Phone: +91 98765 432**</p>
                        <p>Email: support@bikerenthub.com</p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Open Hours</h6>
                        <p className="mb-1">Mon – Sat: 9:00 AM – 8:00 PM</p>
                        <p className="mb-1">Sunday: Closed</p>
                        <p className="mb-1">Public Holidays: Closed</p>
                        <p>Emergency Service: Available</p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">About Us</h6>
                        <p className="mb-1">Your trusted bike rental partner</p>
                        <p className="mb-1">Affordable rates & easy booking</p>
                        <div className="mt-2 d-flex justify-content-center">
                            <a  target="_blank" rel="noopener noreferrer" className="footer-icon mx-2 fs-4">
                                <FaInstagram />
                            </a>
                            <a  target="_blank" rel="noopener noreferrer" className="footer-icon mx-2 fs-4">
                                <FaWhatsapp />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="footer-icon mx-2 fs-4">
                                <FaFacebook />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="footer-icon mx-2 fs-4">
                                <FaLinkedin />
                            </a>
                        </div>

                    </Col>
                </Row>
                <div className="text-center mt-2">
                    <p className="mb-0">&copy; {new Date().getFullYear()} BikeRent Hub. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
