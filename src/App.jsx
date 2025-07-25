import { useState } from "react";
import Cards from "./flashcards.js";

export default function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [cards, setCards] = useState(() =>
    Cards.map(card => ({
      ...card,
      showingQuestion: true,
    }))
  );

  const { question, answer, showingQuestion } = cards[cardIndex];

  function toggle() {
    setCards(prevCards => 
      prevCards.map((card, index) => 
        index === cardIndex ? {...card, showingQuestion: !card.showingQuestion} : card
      ) 
    )
  }

  function prevCard() {
    setCardIndex((prev) => prev - 1);
  }

  function nextCard() {
    setCardIndex((prev) => prev + 1);
  }

  return (
    <div className="container">
      <div className="card" onClick={toggle}>
          <h2 className={showingQuestion ? "" : "answer"}>{showingQuestion ? question : answer}</h2>
      </div>
      <div className="btn-container">
        <button className="previous-btn" onClick={prevCard} disabled={cardIndex === 0}>
          &lt;
        </button>
        <span className="question-counter">{cardIndex+1}/{cards.length}</span>
        <button className="next-btn" onClick={nextCard} disabled={cardIndex === cards.length - 1}>
          &gt;
        </button>
      </div>
    </div>
  );
}
