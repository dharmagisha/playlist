import React from 'react';
import { FaMotorcycle, FaRupeeSign, FaCheckCircle, FaClock, FaTools, FaStar } from 'react-icons/fa';

const reasons = [
  { icon: 
  <FaMotorcycle size={30} />, 
  title: "Wide Range of Bikes", 
  text: "From sports bikes to scooters, find the perfect ride." 
},
  { icon: 
  <FaRupeeSign size={30} />, 
  title: "Affordable Pricing", 
  text: "Flexible plans starting at just ₹500/day." 
},
  { icon: <FaCheckCircle size={30} />, title: "Easy Online Booking", text: "Book your bike in minutes, hassle-free." },
  { icon: <FaTools size={30} />, title: "Well-Maintained & Safe", text: "All bikes are regularly serviced for your safety." },
  { icon: <FaClock size={30} />, title: "Convenient Pickup & Drop", text: "Multiple pickup and drop locations." },
  { icon: <FaStar size={30} />, title: "Trusted by Riders", text: "Thousands of happy customers & great reviews." }
];

const WhyChooseUs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold"> Why Choose Us</h2>
      <div className="row mt-4 g-4">
        {reasons.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card why-card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <div className="mb-3 why-icon text-primary d-flex justify-content-center">{item.icon}</div>
                <h5 className="card-title fw-semibold">{item.title}</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
