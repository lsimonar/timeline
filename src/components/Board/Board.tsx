
import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Card } from "../../utils/types";
import './Board.scss'
import PlayedCards from "../PlayedCards/PlayedCards";
import NextCard from "../NextCard/NextCard";

function Board() {
  
  const [cards, setCards] = useState<Card[]>([
    { id: "1", date: new Date("11-10-1992"), content: "Card 1" },
    { id: "2", date: new Date("11-10-1992"), content: "Card 2" },
    { id: "3", date: new Date("11-10-1992"), content: "Card 3" },
  ]);

  const [nextCard, setNextCard] = useState<Card[]>(
    [{id: "0", date: new Date("10-10-1992"), content: "Card 0"}]
  )

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;
    if (!destination) {
      return;
    }

    // Handle resorting of bottom list, but this should be removed as no dragging is allowed.
    if(source.droppableId === destination.droppableId){
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const updatedCards = [...cards];
      updatedCards.splice(sourceIndex, 1); 
      updatedCards.splice(destinationIndex, 0, cards[sourceIndex]);

      if(source.droppableId === 'timeline-cards') setCards(updatedCards);

    } else {
      let sourceClone;
      let destClone;
      if(source.droppableId === 'timeline-cards'){
        sourceClone = Array.from(cards);
      } else {
        sourceClone = Array.from(nextCard);
      }

      if(destination.droppableId === 'timeline-cards'){
        destClone = Array.from(cards);
      } else {
        destClone = Array.from(nextCard);
      }

      const [removed] = sourceClone.splice(source.index, 1);
      destClone.splice(destination.index, 0, removed);
  
      source.droppableId === 'next-card'? setNextCard(sourceClone) : setCards(sourceClone);
      destination.droppableId === 'next-card'? setNextCard(destClone) : setCards(destClone);
    }

  };

  return (
    <div className="wrapper">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="top">
          <PlayedCards cards={cards}/>
        </div>
        <div className="bottom">
          <NextCard nextCard={nextCard} />
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board;