import './App.css';
import React, { useState } from 'react';
import { Card, NewCard } from './Card';
import LineChart from './Chart';

function App() {
  const [cards, setCards] = useState([]);
  const [timing, setTiming] = useState([2, 100]);

  const deleteCard = (index) =>{
    setCards(prevCards => prevCards.filter((_, i) => i !== index));
  }

  const addCard = (values) => {
    const newCard = { initial: values.initialValue, interest: values.interest, frequency: values.frequency };
    setCards([...cards, newCard]);
  }

  const handleTimingChange = (event) => {
    const selectedValue = Number(event.target.value);
    setTiming([selectedValue, 100]);
  };

  return (
    <div className="App">
      <div className="CardView">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            initial={card.initial} 
            interest={card.interest} 
            frequency={card.frequency} 
            delcard={() => deleteCard(index)} 
          />
        ))}
        {cards.length < 9 && <NewCard onClick={addCard} />}
      </div>

      <div className="ChartView">
        <label>
          Select Timing:
          <select value={timing[0]} onChange={handleTimingChange}>
            <option value={0}>Daily</option>
            <option value={1}>Weekly</option>
            <option value={2}>Monthly</option>
            <option value={3}>Annually</option>
          </select>
        </label>
        <LineChart cardData={cards} timing={timing} />
      </div>
    </div>
  );
}

export default App;
