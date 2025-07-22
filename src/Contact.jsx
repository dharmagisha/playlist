import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
                <Row className="g-4">
                    <Col md={6}>
                        <Card className="shadow h-100">
                            <Card.Body>
                                <h4 className="mb-3">Get in Touch</h4>
                                <Form>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Your message..." />
                                    </Form.Group>
                                    <Button variant="dark" type="submit">Send Message</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="shadow h-100">
                            <Card.Body className="text-center mt-5">
                                <h4 className="mb-3">Contact Information</h4>
                                <p className="mb-2"><strong>BikeRent Hub</strong></p>
                                <p className="mb-2">123 Main Street, Chennai, Tamil Nadu, India</p>
                                <p className="mb-2">Phone: +91 98765 43210</p>
                                <p className="mb-2">Email: support@bikerenthub.com</p>
                                <p className="mb-0">Open Hours: 9:00 AM – 8:00 PM (Mon – Sat)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
