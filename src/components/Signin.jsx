
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

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    setModalMessage('Login successful!');
    setShowModal(true); // Show the modal

    // Optionally, clear the form data
    setFormData({
      email: '',
      password: '',
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Signin</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label><br/>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label><br/>
          <button type="submit">Signin</button>
        </form>

        {/* Render modal when showModal is true */}
        {showModal && <Modal message={modalMessage} closeModal={closeModal} />}
      </div>
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

// Full layout styles for the signin component
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: red; /* Body background set to red */
  }

  .signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Full height of the viewport */
    background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white background */
  }

  .signin-form {
    width: 500px; /* Increased width for the form */
    background-color: white;
    padding: 40px; /* Increased padding for more space */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Drop shadow for the form */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .signin-form h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .signin-form label {
    margin-bottom: 10px;
    width: 100%;
  }

  .signin-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .signin-form button {
    width: 100%;
    padding: 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .signin-form button:hover {
    background-color: #cc0000;
  }
`;

// Inject styles dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Signin;
