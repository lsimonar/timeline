import React, { useEffect, useRef } from "react";
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
      <Draggable isDragDisabled={isDragDisabled} draggableId={card.id} index={index} >
        {(provided, snapshot) => { return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card">
              <div id={card.id} className={`card-inner ${isFlipped? 'flipped' : ''}`} >
                <div className="card-front">
                  <img src={require('../../assets/images/french_revolution.jpg')} alt={card.content}></img>
                  <p className="card-text">{card.content}</p>
                </div>
                <div className="card-back">
                  <img src={require('../../assets/images/french_revolution.jpg')} alt={card.content}></img>
                  <p className="card-date">{`${card.date.getFullYear()}`}</p>
                  <p className="card-text">{card.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}}
      </Draggable>
    );
  }