import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://tse4.mm.bing.net/th?id=OIP.XmSrW-TzAMVolpfjaIfM1QHaFj&pid=Api&P=0&h=180" alt="Logo" />
        <h1>Blood <br/>Donation</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/donors">Donors</Link></li>
          <li><Link to="/blood-banks">Blood Banks</Link></li>
          <li><Link to="/hospitals">Hospitals</Link></li>
          <li><Link to="/request">Request</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/signup" className="signup-button">Sign Up</Link>
        <Link to="/signin" className="signin-button">Sign In</Link>
      </div>
      <div className="user-icon">
        <img src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0" alt="User" />
      </div>
    </header>
  );
};

export default Header;
