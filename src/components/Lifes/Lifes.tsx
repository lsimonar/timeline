import { Card } from '../../utils/types';
import './Lifes.scss'

interface LifesProps {
    wrongCards: Card[],
    lifes:number
}
interface SquareProps{
    wrongCard: Card
}

function Square({wrongCard}: SquareProps){
    return (
    < div style={{transform: 'scale(0.5)'}}>
    <div className="card">
              <div id={wrongCard.id} className='card-inner flipped' >
                <div className="card-front">
                  <img src={process.env.PUBLIC_URL + wrongCard.img} alt={wrongCard.content}></img>
                  <p className="card-text">{wrongCard.content}</p>
                </div>
                <div className="card-back">
                  <img src={process.env.PUBLIC_URL + wrongCard.img} alt={wrongCard.content}></img>
                  <p className= 'card-date wrong'>{`${wrongCard.date.getFullYear()}`}</p>
                  <p className="card-text">{wrongCard.content}</p>
                </div>
              </div>
            </div>
            </div>
    )
}

function Lifes({wrongCards, lifes}: LifesProps) {
    
    const generateHearts = () => {
        let hearts: JSX.Element[] = [];
        for(let i=0; i< lifes; i++){
            if (wrongCards[i]){
            hearts.push(<Square key = {i} wrongCard={wrongCards[i]}/>)
            }
            else{
            hearts.push(<div className= "square"></div>)
            }
        }
        return hearts;
    }

    return(
            <div className='flex'>{generateHearts()}</div>
    )
}

export default Lifes;