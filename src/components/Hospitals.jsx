import React from 'react';

const hospitals = [
  { name: 'Ramesh hospitals', location: 'Place:Guntur' },
  { name: 'uday hospitals', location: 'Place:Guntur' },
  { name: 'amaravathi hospital', location: 'Place:Guntur' },
  { name: 'Life hospital', location: 'Place:GUntur' },
  { name: 'Ramesh hospital', location: 'Place:vijayawada' },
  { name: ' Manipal Hospital ', location: 'Place:vijayawada' },
  { name: 'Aiims hospital', location: 'Place:Mangalagiri' },
  { name: 'tulasi hospital', location: 'Place:Guntur' },
  { name: 'health hospital', location: 'Place:Tenali' },
  { name: 'omega hospital', location: 'Place:Guntur' },
];

const Hospitals = () => {
  return (
    <div className="hospitals">
      <h2>Nearby Hospitals</h2>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            <h3>{hospital.name}</h3>
            <p>{hospital.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hospitals;
