import React from "react";
import './NextCard.scss';
import TimelineCard from "../Card/TimelineCard";
import { Droppable } from "react-beautiful-dnd";
import { Card } from "../../utils/types";

interface NextCardProps {
    nextCard: Card[]
}

function NextCard({nextCard}: NextCardProps ) {

    return(
        <div className="container">
            <Droppable droppableId="next-card" direction="horizontal">
                {(provided) => (
                    <div className="wrapper">
                        <div ref={provided.innerRef} {...provided.droppableProps} className="list">
                        {nextCard.map((card, index: number) => (
                            <TimelineCard isDragDisabled={false} key={card.id} card={card} index={index} />
                        ))}
                        {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    )

}

export default NextCard;