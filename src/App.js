import './App.css';
import React, { useState } from 'react';
import { Card, NewCard } from './Card';
import LineChart from './Chart';

function App() {
  const [cards, setCards] = useState([]);

  const deleteCard = (index) =>{
    setCards(prevCards => prevCards.filter((_, i) => i !== index));
  }

  const addCard = (values) => {
    const newCard = { initial: values.initialValue, interest: values.interest, frequency: values.frequency};
    setCards([...cards, newCard]);
    }

  return (
    <div className="App">
      <div className="CardView">
        {cards.map((card, index) => (
          <Card key={index} initial={card.initial} interest={card.interest} frequency={card.frequency}  delcard={() => deleteCard(index)} />
        ))}
        {cards.length < 9 && 
        <NewCard  onClick={addCard}/>
        }
        

      </div>
      <div className="ChartView">
        <LineChart cardData={cards} timing={1}/>
      </div>
    </div>
  );
}

export default App;