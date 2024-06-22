// Card.js
import React, { useState } from 'react';
import './Card.css';

function Card({ initial, interest, frequency }) {
  return (
    <div className="card">
      <h3>{initial}</h3>
      <p>{interest}</p>
      <p>{frequency}</p>
    </div>
  );
}


function NewCard({onClick}){
    const [initialValue, setInitialValue] = useState('');
    const [interest, setInterest] = useState('');
    const [frequency, setFrequency] = useState('daily');
    const handleClick = () => {
        onClick({ initialValue, interest, frequency });
    }
    return (
        <div className="card">
        <input
          type="number"
          className="card-input"
          placeholder="Initial Value"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        />
        <input
          type="number"
          className="card-input"
          placeholder="Interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <select
          className="card-select"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="biweekly">Biweekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="triannually">Triannually</option>
          <option value="semiannually">Semiannually</option>
          <option value="annually">Annually</option>
        </select>
        <button className="card-button" onClick={handleClick}>Submit</button>
      </div>
    )
}


export {Card, NewCard};