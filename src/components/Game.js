import React, { Component } from "react"

import Board from "./Board"

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xNextMove: true,
      stepNumber: 0
    };
  }

  jumpTo(step) {
      this.setState({
          stepNumber: step,
          xNextMove: (step % 2) === 0
      })
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xNextMove ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xNextMove: !this.state.xNextMove
    });
  }
  
  calculateWinner(squares) {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
          }
      }
      return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber]
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Restart'
        return (
            <li key={move}>
                <button className="move-button" onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
        )
    })

    let status;
    if (winner) {
      status = 'Winner is ' + winner;
    } else {
      status = 'Next move: ' + (this.state.xNextMove ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
            <div>{status}</div>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <div className="game-info">
            <ul>{moves}</ul>
            </div>
        </div>
        
      </div>
    );
  }
}

export default Game