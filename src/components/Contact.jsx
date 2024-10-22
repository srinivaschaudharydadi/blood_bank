import React, { useState } from 'react';

// Simple modal component
const Modal = ({ message, closeModal }) => {
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h2>Success</h2>
        <p>{message}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(contactData);

    // Set success message
    setSuccessMessage('Your message has been sent successfully!'); // Update success message
    setShowModal(true); // Show modal

    // Optionally, clear the form data
    setContactData({
      name: '',
      email: '',
      message: '',
    });
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="contact">
      <h2>Contact Customer Care</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contactData.name}
            onChange={handleChange}
            required
          />
        </label><br/>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            required
          />
        </label><br/>
        <label>
          Message:
          <textarea
            name="message"
            value={contactData.message}
            onChange={handleChange}
            required
          />
        </label><br/>
        <button type="submit">Submit</button>
      </form>

      {/* Render modal when form is successfully submitted */}
      {showModal && <Modal message={successMessage} closeModal={closeModal} />}
    </div>
  );
};

// Styles for the modal dialog box
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    width: '300px',
    textAlign: 'center',
  },
};

export default Contact;
