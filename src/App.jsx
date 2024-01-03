/*
   Game
    -> Board
        -> Square
    -> Hostory
*/
import { useState } from "react";

function Square({ value, onSquareClick }) {
    return (
        <button
            className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

function Board({xIsNext, squares, onPlay}) {
    const winner = calculateWinner(squares);
    let status;

    if(winner) {
        status = `Winner: ${winner}`;
    } else {
        status = "Next Player " + (xIsNext ? "X" : "O");
    }


    function handClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    return (
        <>
            <div>{status}</div>
            <div className="flex">
                <Square value={squares[0]} onSquareClick={() => handClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handClick(2)} />
            </div>

            <div className="flex">
                <Square value={squares[3]} onSquareClick={() => handClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handClick(5)} />
            </div>

            <div className="flex">
                <Square value={squares[6]} onSquareClick={() => handClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handClick(8)} />
            </div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1);
    }

    function jumpTo(move) {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if( move > 0 ) {
            description = `Go to the move # ${move}`;
        } else {
            description = `Go to start the game`;
        }
        return(
            <li
                key={move}
                className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return(
        <div className="flex justify-center p-4">
            <div className="mr-16">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}/>
            </div>
            <div>
                <ol className="border border-gray-400 p-1 text-lg">{ moves }</ol>
            </div>
        </div>
    )
}


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
