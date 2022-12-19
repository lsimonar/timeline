import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "../../utils/types";
import './TimelineCard.scss';

interface cardProps {
    card: Card,
    index: number,
    isDragDisabled: boolean,
    isFlipped?: boolean
}

export default function TimelineCard({ card, index, isDragDisabled, isFlipped }: cardProps) {
    return (
      <Draggable isDragDisabled={isDragDisabled} draggableId={card.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              margin: "10px",
              borderRadius: "10px",
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              ...provided.draggableProps.style,
            }}
          >
            <div className={`timeline-card ${isFlipped ? 'flipped' : ''}`} 
                 data-back={`${card.date.getDate()}, ${card.date.getMonth()}, ${card.date.getFullYear()}`}>
              <div>
                <h3>Card {card.id}</h3>
                <p>{card.content}</p>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }