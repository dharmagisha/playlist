import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {image} from './assets/assets'

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [editing, setEditing] = useState(null); // booking being edited
    const [showModal, setShowModal] = useState(false);

    const ratePerDay = 1500; // 💡 add this line

    // Fetch bookings
    const fetchBookings = async () => {
        const res = await fetch('http://localhost:5000/bookings');
        const data = await res.json();
        setBookings(data);
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    // Delete booking
    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/bookings/${id}`, { method: 'DELETE' });
        fetchBookings();
    };

    // Update booking
    const handleUpdate = async () => {
        await fetch(`http://localhost:5000/bookings/${editing.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editing)
        });
        setShowModal(false);
        setEditing(null);
        fetchBookings();
    };

    return (
        <div className="p-4">
            <h2 className="mb-4">All Bookings</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Days</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((b) => (
                        <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.email}</td>
                            <td>{b.phone}</td>
                            <td>{b.days}</td>
                            <td>₹{b.total}</td>
                            <td>
                                <Button variant="" size="sm" onClick={() => { setEditing(b); setShowModal(true); }}>
                                    <img src={image.Edit} width={30} alt="" />

                                </Button>{' '}
                                <Button variant="" size="sm" onClick={() => handleDelete(b.id)}>
                                    <img src={image.Dustbin} width={30} alt="" />

                                </Button>
                                <Link to='/Booking'><Button variant="dark" size="sm" className='ms-2' >
                                    Create
                                </Button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editing && (
                        <Form>
                            <Form.Group className="mb-2">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editing.name}
                                    onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={editing.email}
                                    onChange={(e) => setEditing({ ...editing, email: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    value={editing.phone}
                                    onChange={(e) => setEditing({ ...editing, phone: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Label>Days</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={editing.days}
                                    onChange={(e) => {
                                        const newDays = Number(e.target.value);
                                        setEditing({
                                            ...editing,
                                            days: newDays,
                                            total: newDays * ratePerDay
                                        });
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BookingList;
