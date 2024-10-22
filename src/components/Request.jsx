import React, { useState } from 'react';

// Modal component to display messages
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

const Request = () => {
  const [modalMessage, setModalMessage] = useState(''); // State for the message
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle "Donate" button click
  const handleDonateClick = () => {
    setModalMessage('Thanks for donating!'); // Set the message
    setShowModal(true); // Show the modal
  };

  // Function to handle "Request" button click
  const handleRequestClick = () => {
    setModalMessage('Your request has been accepted!'); // Set the message
    setShowModal(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <main className="main-container">
      <div className="request-container">
        <div className="request-content">
          <h2>Request Actions</h2>
          <div className="buttons-container">
            <button className="donate-button" onClick={handleDonateClick}>
              Donate
            </button>
            <button className="request-button" onClick={handleRequestClick}>
              Request
            </button>
          </div>
          {/* Render modal when showModal is true */}
          {showModal && <Modal message={modalMessage} closeModal={closeModal} />}
        </div>
      </div>
    </main>
  );
};

// Modal styles
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

// Full layout styles for the component
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

  .main-container {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align items to the start */
    min-height: 100vh; /* Full height of the viewport */
    padding-top: 50px; /* Move down by 50px */
    background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white background */
  }

  .request-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px; /* Set a maximum width for the container */
    padding: 20px;
    background-color: transparent; /* Changed to transparent */
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  .request-content {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Drop shadow for the container */
    text-align: center;
    width: 100%; /* Full width within the request-container */
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }

  .request-content h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .donate-button,
  .request-button {
    padding: 10px 20px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .donate-button:hover,
  .request-button:hover {
    background-color: #cc0000;
  }
`;

// Inject styles dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Request;
