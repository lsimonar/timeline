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
    <div className="square-ctn">
      <div className="card">
        <div id={wrongCard.id} className='card-inner flipped' >
          <div className="card-back">
            <img src={process.env.PUBLIC_URL + wrongCard.img} alt={wrongCard.content}></img>
            <p className= 'card-date wrong'>{`${wrongCard.date}`}</p>
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
            hearts.push(
              <div key = {i} className="square">
                {wrongCards[i]? <Square wrongCard={wrongCards[i]}/> : 
                 i === lifes - 1? <span style={{color: 'red'}}>Game<br/>Over</span> : ''}
              </div>)
        }
        return hearts;
    }

    return(
      <div className='lifes-ctn'>
        <div className='flex'>{generateHearts()}</div>
      </div>
    )
}

export default Lifes;