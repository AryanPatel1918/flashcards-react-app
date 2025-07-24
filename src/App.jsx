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
    let newCards = [...cards];
    newCards[cardIndex] = {
      ...newCards[cardIndex],
      showingQuestion: !newCards[cardIndex].showingQuestion,
    };
    setCards(newCards);
  }

  function prevCard() {
    setCardIndex((prev) => prev - 1);
  }

  function nextCard() {
    setCardIndex((prev) => prev + 1);
  }

  return (
    <div>
      {showingQuestion ? <h4>{question}</h4> : <p>{answer}</p>}
      <button onClick={toggle}>
        {showingQuestion ? "Show" : "Hide"} Answer
      </button>
      <br />
      <div>
        <button className="previous-btn" onClick={prevCard} disabled={cardIndex === 0}>
          &lt;
        </button>
        <button className="next-btn" onClick={nextCard} disabled={cardIndex === cards.length - 1}>
          &gt;
        </button>
      </div>
    </div>
  );
}
