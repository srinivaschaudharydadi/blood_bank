import React from 'react';

const bloodBanks = [
  { name: 'vijaya sri blood bank', location: 'Place:vijayawada' },
  { name: 'life share blood bank', location: 'Place:vijayawada' },
  { name: 'rainbow blood bank', location: 'Place:vijayawada' },
  { name: 'prabha blood bank', location: 'Place:vijayawada' },
  { name: 'chaitanya blood bank', location: 'Place:vijayawada' },
  { name: 'G G H blood bank', location: 'Place:vijayawada' },
  { name: 'new city blood bank', location: 'Place:vijayawada' },
  { name: 'chaitanya blood bank', location: 'Place:Guntur' },
  { name: 'pradha blood bank', location: 'Place:Guntur' },
  { name: 'suraksha blood bank', location: 'Place:Guntur' },
];

const BloodBanks = () => {
  return (
    <div className="blood-banks">
      <h2>Available Blood Banks</h2>
      <ul>
        {bloodBanks.map((bank, index) => (
          <li key={index}>
            <h3>{bank.name}</h3>
            <p>{bank.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BloodBanks;
