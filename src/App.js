import './App.css';
import { useState } from 'react';
import { Card, NewCard } from './Card';

function App() {
  const [cards, setCards] = useState([
  ]);
  const addCard = (values) => {
    console.log(values)
    const newCard = { initial: values.initialValue, interest: values.interest, frequency: values.frequency };
    setCards([...cards, newCard]);
    }

  return (
    <div className="App">
      <div className="CardView">
        {cards.map((card, index) => (
          <Card key={index} initial={card.initial} interest={card.interest} frequency={card.frequency} />
        ))}
        <NewCard  onClick={addCard}/>

      </div>
      <div className="ChartView">

      </div>
    </div>
  );
}

export default App;