import React, {useState} from 'react';

/**
 * Problem : Create a react-app blackjack game, ensuring the following 
functionalities.
-  1. shuffle the deck
-  2. hand out 2 cards each to dealer and player
-  2. prompt player for actions (hit, stand)
-  3. dealer(computer) decides to draw until at least 17 points
-  4. determine who wins the round
Assumptions :
* Poker Cards only
* Rank: (A, 2-10, J,Q, K),
* Suit : (Spade, Heart, Club, Diamond)
* A Deck of poker cards: 52(13 rank * 4 suit) possible unique card combination, 
it's a game trying to make your hand closest to 21 points but exceeding 21 means
game over, whoever is highest below 22 points wins
* assume that there's only 1 dealer and 1 player
* 2-10: 2-10 points
* J,Q,K: 10 points
* A : 11/1 point (can be 11 or 1 points)
 */
export default () => {
  const [playerPoints, setPlayerPoints] = useState(0);
  const [dealerPoints, setDealerPoints] = useState(0);
  const [isDealerWon, setIsDealerWon] = useState(undefined);

  /**
   * Used to generate and calculate total points based on given current points
   * & business logic.
   * @param {*} currentPoint 
   */
  function calculatePoints(currentPoint=0) {
    let _random = random1to13();
    if (_random === 1 && currentPoint <=6) {
      return currentPoint + 11;
    }
    return currentPoint + _random;
  }

  // Used to draw card for player
  function onHit() {
    if (playerPoints<=17) {
      setPlayerPoints(calculatePoints(playerPoints))
    }    
  }

  // Used to draw card card for dealer
  // and calls getWinner method 
  function onStand() {
    let buttonIndexes = [0, 1]; // 0 for hit, 1 for stand
    buttonIndexes.forEach(key => {
      document.getElementsByTagName('button')[key].setAttribute('disabled',true)
    });
    let point = 0;
    while (point<=17) {
      point = calculatePoints(point);
    }
    setDealerPoints(point);
    setIsDealerWon(getWinner(playerPoints, point));
  }

  /**
   * Used to predict the winner of this game
   * @param {*} playerPoints 
   * @param {*} dealerPoints 
   */
  function getWinner(playerPoints=0, dealerPoints=0) {
    let isPlayerValid = playerPoints<=21;
    let isDealerValid = dealerPoints<=21;
    let winner = true;
    if (isPlayerValid && isDealerValid) {
      winner = dealerPoints >= playerPoints;
    } else if (isPlayerValid) {
      winner = false;
    }
    return winner; //dealer won if true else player won
  }

  return (
    <div className="blackjack" style={{maxWidth: "400px", margin: "0 auto"}}>
      <h1>Blackjack</h1>
      <div className="players">
        <div className="player">
          <div className="title">Player: {playerPoints}</div>
          <div>
            <button onClick={onHit}>Hit</button>
            <button onClick={onStand} style={{marginLeft: "1rem"}}>Stand</button>
            <button onClick={onStand} style={{marginLeft: "1rem"}} onClick={() => window.location.reload()}>Reload</button>
          </div>
        </div>
        <div className="title">Dealer: {dealerPoints}</div>
      </div>
      {
        isDealerWon !== undefined ?
        <div style={{padding: "1rem"}}>
          Winner is:&nbsp;
          <span>{isDealerWon ? "Dealer" : "Player"}</span>
        </div> : <></>
      }
      <p> 
      Rules: <br />
      -  1. shuffle the deck <br />
      -  2. hand out 2 cards each to dealer and player <br />
      -  2. prompt player for actions (hit, stand) <br />
      -  3. dealer(computer) decides to draw until at least 17 points <br />
      -  4. determine who wins the round <br />
      <br />
      Assumptions : <br />
      * Poker Cards only <br />
      * Rank: (A, 2-10, J,Q, K), <br />
      * Suit : (Spade, Heart, Club, Diamond) <br />
      * A Deck of poker cards: 52(13 rank * 4 suit) possible unique card combination,  <br />
      * It's a game trying to make your hand closest to 21 points but exceeding 21 means
      game over, whoever is highest below 22 points wins
      * assume that there's only 1 dealer and 1 player <br />
      * 2-10: 2-10 points <br />
      * J,Q,K: 10 points <br />
      * A : 11/1 point (can be 11 or 1 points) <br />
      </p>
      <style jsx>{`
        .blackjack {
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 2px 2px 6px 2px #eee;
        }

        .blackjack .title {
          padding: 1rem;
        }

        .blackjack button {
          padding: .35rem 1.5rem;
          border-radius: 5px;
          font-weight: bold;
        }

        .blackjack button:focus, button:hover {
          outline: none;
        }

        .blackjack p {
          text-align: left;
          font-size: 14px;
          color: #949494;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

export const random1to13 = () => {
  // 10 because hishest possible outcome can be 10.
  return Math.ceil(Math.random()*10);
}