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
        {(provided, snapshot) => { return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card">
              <div id={card.id} className={`card-inner ${isFlipped? 'flipped' : ''}`} >
                <div className="card-front">
                  <h2 className="card-title">Card {card.id}</h2>
                  <p className="card-text">{card.content}</p>
                </div>
                <div className="card-back">
                  <p>{`${card.date.getDate()}, ${card.date.getMonth()}, ${card.date.getFullYear()}`}</p>
                </div>
              </div>
            </div>
          </div>
        )}}
      </Draggable>
    );
  }