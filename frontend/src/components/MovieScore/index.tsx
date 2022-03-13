import { useState } from "react"
import MovieStars from "../MovieStars"

import './style.css'

function MovieScore() {
  const [score, newScore] = useState(3.5)
  const [count, newCount] = useState(13)
  
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  )
}

export default MovieScore