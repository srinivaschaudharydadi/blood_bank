import React, { useState } from 'react';

// Modal component to display the success message
const Modal = ({ message, closeModal }) => {
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h2>Notification</h2>
        <p>{message}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bloodBank: '',
  });

  const [modalMessage, setModalMessage] = useState(''); // State for the modal message
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    // Set the modal message and display modal
    setModalMessage('Registration is completed!');
    setShowModal(true); // Show the modal

    // Optionally, clear the form data
    setFormData({
      name: '',
      email: '',
      password: '',
      bloodBank: '',
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label><br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label><br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label><br />
        <label>
          Blood Bank Name:
          <input
            type="text"
            name="bloodBank"
            value={formData.bloodBank}
            onChange={handleChange}
            required
          />
        </label><br />
        <button type="submit">Signup</button>
      </form>

      {/* Render modal when showModal is true */}
      {showModal && <Modal message={modalMessage} closeModal={closeModal} />}
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

export default Signup;
