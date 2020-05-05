import React, {useState, useEffect} from 'react';
import { Deck, CardTypes, getCard } from "./Blackjack.helper";

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
  const [playerCards, setPlayerCards] = useState({
    player: [],
    dealer: []
  });
  const [message, setMessage] = useState({
    show: false,
    text: "",
  })

  useEffect(() => {
    // player must get a card
    onHit();
  }, [])

  /**
   * Used to generate and calculate total points based on given current points
   * & business logic.
   * @param {*} currentPoint 
   */
  function calculatePoints(currentPoint=0) {
    let _random = random1to13();
    let value = Deck[_random].value;
    if (_random === 1) {
      return {
        totalPoints: currentPoint + 11 > 21 ? currentPoint + 1 : currentPoint + 11,
        currentIndex: _random
      };
    }
    return {
      totalPoints: currentPoint + value,
      currentIndex: _random
    };
  }

  // Used to draw card for player
  function onHit() {
    if (playerPoints<=17) {
      let pointsResponse = calculatePoints(playerPoints)
      setPlayerPoints(pointsResponse["totalPoints"]);
      let _cardList = JSON.parse(JSON.stringify(playerCards["player"]));
      let cardPath = "";
      cardPath = getCard(Deck[pointsResponse.currentIndex].name, CardTypes[Math.floor(Math.random()*4)]);
      _cardList.push(cardPath);
      setPlayerCards({...playerCards, "player": [..._cardList]});
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
    let _cardList = [];
    while (point<=17) {
      let pointsResponse = calculatePoints(point);
      point = pointsResponse["totalPoints"];
      let cardPath = "";
      cardPath = getCard(Deck[pointsResponse.currentIndex].name, CardTypes[Math.floor(Math.random()*4)]);
      _cardList.push(cardPath);
    }
    setDealerPoints(point);
    setPlayerCards({...playerCards, "dealer": [..._cardList]});
    getWinner(playerPoints, point);
  }

  /**
   * Used to predict the winner of this game
   * @param {*} playerPoints 
   * @param {*} dealerPoints 
   */
  function getWinner(playerPoints=0, dealerPoints=0) {
    let isPlayerValid = playerPoints<=21;
    let isDealerValid = dealerPoints<=21;
    let _msg = "";
    if (isPlayerValid && isDealerValid) {
      _msg = dealerPoints === playerPoints ? "It's a tie"
        : (dealerPoints > playerPoints ? "Winner is DEALER"
          : "Winner is PLAYER")
    } else if (isPlayerValid) {
      _msg = "Winner is PLAYER";
    } else if (isDealerValid) {
      _msg = "Winner is DEALER";
    } else {
      _msg = "It's a tie";
    }
    setMessage({
      show: true,
      text: _msg + " !!",
    })
  }

  return (
    <div className="blackjack" style={{maxWidth: "400px", margin: "0 auto"}}>
      <h1>Blackjack</h1>
      {
        message.show ?
        <div className="message-container">
          <div className="message">
          <h2>{message.text}</h2>
          </div>
        </div> : <></>
      }
      <div className="players">
        <div className="player">
          <div className="title">Player: {playerPoints}</div>
          <div className="btn-container">
            <button onClick={onHit}>Hit</button>
            <button onClick={onStand} style={{marginLeft: "1rem"}}>Stand</button>
            <button onClick={() => window.location.reload()} style={{marginLeft: "1rem"}}>Reload</button>
          </div>
        </div>
        {
          playerCards.player.length ?
          <div className="cards">
            {
              playerCards.player.map((card, id) => 
                <img key={id} src={card}
                  alt={card.split("/").pop()}
                  style={{zIndex: (id), left: 10+(id*30)+'px'}} />
              )
            }
          </div> : <></>
        }
        <div className="title">Dealer: {dealerPoints}</div>
        {
          playerCards.dealer.length ?
          <div className="cards">
            {
              playerCards.dealer.map((card, id) => 
                <img key={id} src={card}
                  alt={card.split("/").pop()}
                  style={{zIndex: (id), left: 10+(id*30)+'px'}} />
              )
            }
          </div> : <></>
        }
      </div>
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
      <style jsx="true">{`
        .blackjack {
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 2px 2px 6px 2px #eee;
        }

        .blackjack .title {
          padding: 1rem;
        }

        .blackjack .btn-container {
          padding-bottom: 1rem;
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

        .blackjack .cards {
          position: relative;
          height: 180px;
        }

        .blackjack .cards img {
          height: 140px;
          width: 100px;
          border: 1px solid grey;
          padding: .25rem;
          border-radius: 5px;
          position: absolute;
          background: white;
          word-break: break-all;
        }

        .blackjack .message-container {
          padding: 0 1rem;
        }

        .blackjack .message-container .message {
          background: linear-gradient(45deg, #67dcfa, transparent);
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

export const random1to13 = () => {
  let _random = Math.random();
  if (_random === 0) {
    random1to13();
  }
  // return max 13 because highest card index is 13 which represents king.
  return Math.ceil(_random*13);
}