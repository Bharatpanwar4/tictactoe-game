
import Board from './components/Board';
import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);


  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : "O";
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`;
  console.log(winner);
  const handlSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares((currentSquares) => {
      return currentSquares.map((SquareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return SquareValue;
      })
    });
    setIsXNext((currentIsXNext) => !currentIsXNext)
  };

  return (
    <div className="app">

      <h1> {statusMessage}</h1>
      <Board squares={squares} handlSquareClick={handlSquareClick} />

    </div>
  );
}

export default App;
