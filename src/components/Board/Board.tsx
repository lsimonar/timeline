
import React, { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Card } from "../../utils/types";
import './Board.scss'
import PlayedCards from "../PlayedCards/PlayedCards";
import NextCard from "../NextCard/NextCard";
import { allCards } from "../../utils/cards";
import TimelineCard from "../Card/TimelineCard";

interface BoardProps {
  lifes: number;
  setLifes: React.Dispatch<React.SetStateAction<number>>;
}

function Board({ lifes, setLifes }: BoardProps) {

  const [nextCard, setNextCard] = useState<Card[] | undefined>([allCards[0]])
  const [playedCards, setPlayedCards] = useState<Card[]>([allCards[1]]);
  const [cardsToPlay, setCardsToPlay] = useState<Card[]>(allCards.slice(2))
  const [isDragging, setIsDragging] = useState<boolean>(true);
  const [wrongCards, setWrongCards] = useState<Card[]>([]);
  const [cardToFlip, setCardToFlip] = useState<Card>(allCards[1]);

  const startOver = () => {
    setNextCard([allCards[0]])
    setPlayedCards([allCards[1]])
    setCardsToPlay(allCards.slice(2))
    setCardToFlip(allCards[1])
    setLifes(5)
    setWrongCards([])
  }


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
        setNextCard(getRandomCard())
      } else {
        setLifes(lifes - 1)
        setPlayedCards(destClone);
        setTimeout(
          () => document.getElementById(removed.id)?.classList.add('flipped')
        , 125)
        setTimeout(()=> {
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
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="wrapper">
        <div className="top">
          <PlayedCards isDragDisabled={isDragging} cards={playedCards} cardToFlip={cardToFlip?.id}/>
        </div>
        {lifes > 0 ?
          <div className="bottom">
            {cardsToPlay.length > -1 && nextCard && <NextCard nextCard={nextCard} />}</div>
           : <div className= "bottom"> <button className = "start-over" onClick={startOver}>Start over</button></div>}
      </div>
      <h1>Wrong cards</h1>
      <Droppable droppableId="wrong-cards" direction="horizontal">
        {(provided) => (
          <div className = "wrong-cards" ref={provided.innerRef} {...provided.droppableProps}>
            {wrongCards && wrongCards.map((card,i) => 
              <TimelineCard 
                isWrong = {true} 
                key={card.id}
                card={card}
                index={i} 
                isDragDisabled={true} 
              />
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;