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

const Donors = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    dob: '',
    bloodGroup: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [showModal, setShowModal] = useState(false); // State for modal visibility

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

    // Set success message
    setSuccessMessage('Submitted successfully!'); // Update success message
    setShowModal(true); // Show modal

    // Optionally, clear the form data
    setFormData({
      name: '',
      mobile: '',
      age: '',
      dob: '',
      bloodGroup: '',
    });
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="donors">
      <h2>Donor Registration</h2>
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
        </label><br/>
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label><br/>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label><br/>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label><br/>
        <label>
          Blood Group:
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
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

export default Donors;
