import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { image } from './assets/assets';

const API_URL = import.meta.env.VITE_API_URL;

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const ratePerDay = 1500;

  const fetchBookings = async () => {
    const res = await fetch(`${API_URL}/bookings`);
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/bookings/${id}`, { method: 'DELETE' });
    fetchBookings();
  };

  const handleUpdate = async () => {
    await fetch(`${API_URL}/bookings/${editing.id}`, {
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
      <h2 className="mb-4 text-xl sm:text-2xl">All Bookings</h2>

      <div className="space-y-2 mt-4 grid grid-cols-3 gap-2 w-300">
        {bookings.map((b) => (
          <div key={b.id} className="border rounded p-2 shadow text-xs">
            <h6><span className="font-semibold">Name:</span> {b.name}</h6>
            <h6><span className="font-semibold">Email:</span> {b.email}</h6>
            <h6><span className="font-semibold">Phone:</span> {b.phone}</h6>
            <h6><span className="font-semibold">Days:</span> {b.days}</h6>
            <h6><span className="font-semibold">Total:</span> ₹{b.total}</h6>
            <div className="flex flex-wrap items-center gap-1 mt-1">
              <Button variant="" size="sm" onClick={() => { setEditing(b); setShowModal(true); }}>
                <img src={image.Edit} width={16} alt="Edit" />
              </Button>
              <Button variant="" size="sm" onClick={() => handleDelete(b.id)}>
                <img src={image.Dustbin} width={16} alt="Delete" />
              </Button>
              <Link to='/Booking'>
                <Button variant="dark" size="sm" className="px-1 text-xs">
                  Create
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-base">Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editing && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label className="text-sm">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  value={editing.name}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="text-sm">Email</Form.Label>
                <Form.Control
                  type="email"
                  size="sm"
                  value={editing.email}
                  onChange={(e) => setEditing({ ...editing, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="text-sm">Phone</Form.Label>
                <Form.Control
                  type="tel"
                  size="sm"
                  value={editing.phone}
                  onChange={(e) => setEditing({ ...editing, phone: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="text-sm">Days</Form.Label>
                <Form.Control
                  type="number"
                  size="sm"
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
          <Button variant="secondary" size="sm" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" size="sm" onClick={handleUpdate}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookingList;
