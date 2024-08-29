import React, { useEffect, useState } from 'react';

export default function TicTacToe() {
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [isPlayerY, setIsPlayerY] = useState(false);
  const [playerXPattern, setPlayerXPattern] = useState([]);
  const [playerYPattern, setPlayerYPattern] = useState([]);
  const [isWinner, setIsWinner] = useState('');

  const winningPatterns = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 2, 1],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [6, 5, 4],
    [7, 4, 1],
    [7, 5, 3],
    [7, 8, 9],
    [8, 5, 2],
    [9, 8, 7],
    [9, 6, 3],
    [9, 5, 1],
  ];

  function findWinner(pattern) {
    const winnerPattern = winningPatterns.find((item) => {
      return item.every((id) => pattern.includes(id));
    });
    if (winnerPattern) {
      return true;
    }
  }

  function onHandleSubmit(id) {
    const allPattern = [...playerXPattern, ...playerYPattern];
    console.log('allPattern', allPattern);

    if (allPattern.includes(id)) {
      return;
    }

    if (isPlayerX) {
      if (!playerXPattern.includes(id)) setPlayerXPattern((prev) => [...prev, id]);
    }

    if (isPlayerY) {
      if (!playerYPattern.includes(id)) setPlayerYPattern((prev) => [...prev, id]);
    }
  }

  const showingValues = (id) => {
    if (playerXPattern.includes(id)) {
      return 'X';
    } else if (playerYPattern.includes(id)) {
      return 'O';
    } else {
      return;
    }
  };

  useEffect(() => {
    if (playerXPattern) {
      setIsPlayerX(false);
      setIsPlayerY(true);
    }
    const winner = findWinner(playerXPattern);

    if (winner) {
      setIsWinner('X');
    }
  }, [playerXPattern]);

  useEffect(() => {
    if (playerYPattern) {
      setIsPlayerX(true);
      setIsPlayerY(false);
    }
    const winner = findWinner(playerYPattern);

    if (winner) {
      setIsWinner('O');
    }
  }, [playerYPattern]);

  console.log(isWinner);
  return (
    <>
      <div className='middleDiv'>
        <div className='wholeDiv'>
          <div className='firstRow'>
            <div className='boxes first'>
              <div className='boxesInsideDiv'>
                <div className='text'>Player X</div>
                <div className='number'>{isWinner == 'X' && '1'}</div>
              </div>
            </div>
            <div className='boxes second'>
              <div className='boxesInsideDiv'>
                <div className='text'>Winner</div>
                <div className='number'>{isWinner}</div>
              </div>
            </div>
            <div className='boxes third'>
              <div className='boxesInsideDiv'>
                <div className='text'>Player O</div>
                <div className='number'>{isWinner == 'O' && '1'}</div>
              </div>
            </div>
          </div>

          <div className='smallEmptyBoxes'>
            <div className='line'>
              <div id='1' className='smallBoxes' onClick={() => onHandleSubmit(1)}>
                <div className='values'>{showingValues(1)}</div>
              </div>
              <div id='2' className='smallBoxes' onClick={() => onHandleSubmit(2)}>
                <div className='values'>{showingValues(2)}</div>
              </div>
              <div id='3' className='smallBoxes' onClick={() => onHandleSubmit(3)}>
                <div className='values'>{showingValues(3)}</div>
              </div>
            </div>
            <div className='line'>
              <div id='4' className='smallBoxes' onClick={() => onHandleSubmit(4)}>
                <div className='values'>{showingValues(4)} </div>
              </div>
              <div id='5' className='smallBoxes' onClick={() => onHandleSubmit(5)}>
                <div className='values'>{showingValues(5)}</div>
              </div>
              <div id='6' className='smallBoxes' onClick={() => onHandleSubmit(6)}>
                <div className='values'>{showingValues(6)}</div>
              </div>
            </div>
            <div className='line'>
              <div id='7' className='smallBoxes' onClick={() => onHandleSubmit(7)}>
                <div className='values'>{showingValues(7)}</div>
              </div>
              <div id='8' className='smallBoxes' onClick={() => onHandleSubmit(8)}>
                <div className='values'>{showingValues(8)}</div>
              </div>
              <div id='9' className='smallBoxes' onClick={() => onHandleSubmit(9)}>
                <div className='values'>{showingValues(9)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className='img' src='../src/Assets/picture.png' />
    </>
  );
}
