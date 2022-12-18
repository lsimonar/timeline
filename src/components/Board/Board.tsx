
import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Card } from "../../utils/types";
import './Board.scss'
import PlayedCards from "../PlayedCards/PlayedCards";
import NextCard from "../NextCard/NextCard";
import { allCards } from "../../utils/cards";


function Board() {

  const [nextCard, setNextCard] = useState<Card[] | undefined>([allCards[0]])
  const [playedCards, setPlayedCards] = useState<Card[]>([allCards[1]]);
  const [cardsToPlay, setCardsToPlay] = useState(allCards.splice(2))
  const [isDragging, setIsDragging] = useState<boolean>(true);

  const getRandomCard = () => {
    if(cardsToPlay.length > 0 && nextCard){
      let cardList = [...cardsToPlay];
      console.log(cardList)
      const [randomCard] = cardList.splice(Math.floor(Math.random()*cardList.length), 1)
      console.log(cardList)
      setCardsToPlay([...cardList]);
      return [randomCard]
    }
    return undefined
  }

  const onDragStart = () => {
    setIsDragging(false);
  }

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;
    setIsDragging(true);
    if (!destination || destination.droppableId === 'next-card' || !nextCard) {
      return;
    }

    if (destination.droppableId === 'timeline-cards' && source.droppableId === 'next-card') {
      let sourceClone;
      let destClone;

      sourceClone = Array.from(nextCard);
      destClone = Array.from(playedCards);

      const [removed] = sourceClone.splice(source.index, 1);
      destClone.splice(destination.index, 0, removed);
  
      setPlayedCards(destClone);
      setNextCard(getRandomCard())
    }
  };

  return (
    <div className="wrapper">
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <div className="top">
          <PlayedCards isDragDisabled={isDragging} cards={playedCards}/>
        </div>
        <div className="bottom">
          {cardsToPlay.length > -1 && nextCard && <NextCard nextCard={nextCard} />}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board;