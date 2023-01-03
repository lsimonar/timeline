import React, {useMemo} from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "../../utils/types";
import './TimelineCard.scss';

interface cardProps {
    card: Card,
    index: number,
    isDragDisabled: boolean,
    cardToFlip?: string, 
    isWrong?: boolean
}

export default function TimelineCard({ card, index, isDragDisabled, cardToFlip, isWrong }: cardProps) {

    const imageUrl = process.env.PUBLIC_URL + card.img;
    const image = useMemo(() => {
      const img = new Image();
      img.src = imageUrl;
      return img;
    }, [imageUrl]);

    return (
      <Draggable isDragDisabled={isDragDisabled} draggableId={card.id} index={index} >
        {(provided) => { 

          return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card">
              <div id={card.id} className={`card-inner ${isWrong || cardToFlip === card.id? 'flipped' : ''}`} >
                <div className="card-front">
                  <img src={image.src} alt={card.content}></img>
                  <p className="card-text">{card.content}</p>
                </div>
                <div className="card-back">
                  <img src={image.src} alt={card.content}></img>
                  <p className= {isWrong === true ? 'card-date wrong': 'card-date' }>{`${card.date}`}</p>
                  <p className="card-text">{card.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}}
      </Draggable>
    );
  }