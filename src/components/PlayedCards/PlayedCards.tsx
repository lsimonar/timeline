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
            <div className="listContainer">
                <Droppable droppableId="timeline-cards" direction="horizontal">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="list">
                        <div className="timelineContainer">
                            <div className="timeline"></div>
                        </div>
                        <div className="items">
                            {cards.map((card, index: number) => (
                            <TimelineCard 
                                isDragDisabled={isDragDisabled} 
                                key={card.id} 
                                card={card} 
                                index={index}
                                cardToFlip={cardToFlip} 
                            />
                            ))}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
            </div>
        </div>
    )
}

export default PlayedCards;