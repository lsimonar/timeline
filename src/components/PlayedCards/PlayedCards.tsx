import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TimelineCard from "../Card/TimelineCard";
import { Card } from "../../utils/types";
import './PlayedCards.scss';

interface PlayedCardsProps {
    cards: Card[],
    isDragDisabled: boolean,
    cardToFlip?: string
}

function PlayedCards( {cards, isDragDisabled, cardToFlip}: PlayedCardsProps ){

    return(
        <div className="wrapper-top">
                <Droppable droppableId="timeline-cards" direction="horizontal">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className='items'>
                            {cards.map((card, index: number) => (
                            <TimelineCard 
                                isDragDisabled={isDragDisabled} 
                                key={card.id} 
                                card={card} 
                                index={index}
                                cardToFlip={cardToFlip} 
                            />
                            ))}
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
        </div>
    )
}

export default PlayedCards;