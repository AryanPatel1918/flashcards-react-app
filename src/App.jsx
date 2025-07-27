import { useState } from "react"
import Cards from "./flashcards.js"

export default function App() {
  const [cardIndex, setCardIndex] = useState(0)
  const [showingQuestion, setShowingQuestion] = useState(true)
  const [cards, setCards] = useState(() => Cards)

  const { question, answer } = cards[cardIndex]

  function toggle() {
    setShowingQuestion(prev => !prev)
  }

  function prevCard() {
    setCardIndex(index => index - 1)
    setShowingQuestion(true)
  }

  function nextCard() {
    setCardIndex(index => index + 1)
    setShowingQuestion(true)
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
  )
}
