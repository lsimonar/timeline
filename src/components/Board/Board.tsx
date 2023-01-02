
import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Card } from "../../utils/types";
import './Board.scss'
import PlayedCards from "../PlayedCards/PlayedCards";
import NextCard from "../NextCard/NextCard";
import Lifes from "../Lifes/Lifes";

interface BoardProps {
  lifes: number;
  deck: Card[]
}

function Board({ lifes, deck }: BoardProps) {

  const [initialCard] = deck.splice(Math.floor(Math.random() * deck.length), 1)
  const [initialPlayedCard] = deck.splice(Math.floor(Math.random() * deck.length), 1)

  const [nextCard, setNextCard] = useState<Card[] | undefined>([initialCard])
  const [playedCards, setPlayedCards] = useState<Card[]>([initialPlayedCard]);
  const [cardsToPlay, setCardsToPlay] = useState<Card[]>(deck)
  const [isDragging, setIsDragging] = useState<boolean>(true);
  const [wrongCards, setWrongCards] = useState<Card[]>([]);
  const [cardToFlip, setCardToFlip] = useState<Card>(initialPlayedCard);
  const [win, setWin] = useState<boolean>(false);
  const [rightCards, setRightCards] = useState<number>(0);

  const startOver = () => {
    setNextCard([deck[0]])
    setPlayedCards([deck[1]])
    setCardsToPlay(deck.slice(2))
    setCardToFlip(deck[1])
    setWrongCards([])
    setWin(false)
    setRightCards(0)
  }
  useEffect(() => {
    if (rightCards === 5) {
      setWin(true)
    }
  }, [rightCards])

  const getRandomCard = () => {
    if (cardsToPlay.length > 0 && nextCard) {
      let cardList = [...cardsToPlay];
      const [randomCard] = cardList.splice(Math.floor(Math.random() * cardList.length), 1)
      setCardsToPlay([...cardList]);
      return [randomCard]
    }
    return undefined
  }

  const checkCorrect = (index: number, playedCards: Card[]) => {

    if (nextCard && index > 0 && nextCard[0].date <= playedCards[index - 1].date) {
      return false;
    }
    if (nextCard && index < playedCards.length - 1 && nextCard[0].date >= playedCards[index + 1].date) {
      return false;
    }
    return true;
  }

  const onDragStart = () => {
    setIsDragging(false);
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    setIsDragging(true);
    if (!destination || destination.droppableId === 'next-card' || !nextCard) {
      return;
    }

    if (destination.droppableId === 'timeline-cards' && source.droppableId === 'next-card') {
      let sourceClone: Card[];
      let destClone: Card[];

      sourceClone = Array.from(nextCard);
      destClone = Array.from(playedCards);

      const [removed] = sourceClone.splice(source.index, 1);
      destClone.splice(destination.index, 0, removed);
      setNextCard(undefined)
      if (checkCorrect(destination.index, destClone)) {
        setPlayedCards(destClone);
        setTimeout(
          () => document.getElementById(removed.id)?.classList.add('flipped')
          , 125)
        setRightCards(rightCards+1)
        setNextCard(getRandomCard())
      } else {
        setPlayedCards(destClone);
        setTimeout(
          () => document.getElementById(removed.id)?.classList.add('flipped')
          , 125)
        setTimeout(() => {
          document.getElementById(removed.id)?.classList.add("wrong-effect")
        }, 1000)
        setTimeout(() => {
          setWrongCards([...wrongCards, removed]);
          let playedCardsClone = destClone
          playedCardsClone.splice(destination.index, 1)
          setPlayedCards([...playedCardsClone])
          setNextCard(getRandomCard())
        }, 2000);
      }
    }
  };

  return (
    <>
      <Lifes wrongCards={wrongCards} lifes={lifes} />
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="wrapper">
          <div className="top">
            <PlayedCards isDragDisabled={isDragging} cards={playedCards} cardToFlip={cardToFlip?.id} />
          </div>
          {wrongCards.length < 5 ?
            <div className="bottom">
              {win ? <><h1>You won! Congratulations</h1> <div className="bottom"> <button className="start-over" onClick={startOver}>Start over</button></div></> : cardsToPlay.length > -1 && nextCard && <div><NextCard nextCard={nextCard} /></div>}</div>
            : <div className="bottom"> <button className="start-over" onClick={startOver}>Start over</button></div>
          }
        <div className = "remaining-cards">{!win && wrongCards.length < 5 && <p>{`${5 - rightCards} remaining cards to win`}</p>}</div>
        </div>
      </DragDropContext>
    </>
  );
}

export default Board;

function useCallBack(arg0: Card[]): [any] {
  throw new Error("Function not implemented.");
}
