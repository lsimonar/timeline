import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TimelineCard from "../Card/TimelineCard";
import { Card } from "../../utils/types";
import './PlayedCards.scss';

interface PlayedCardsProps {
    cards: Card[]
}

function PlayedCards( {cards}: PlayedCardsProps ){
    return(
        <div className="wrapper">
            <div className="listContainer">
                <Droppable droppableId="timeline-cards" direction="horizontal">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="list">
                        <div className="timelineContainer">
                            <div className="timeline"></div>
                        </div>
                        <div className="items">
                            {cards.map((card, index: number) => (
                            <TimelineCard key={card.id} card={card} index={index} />
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