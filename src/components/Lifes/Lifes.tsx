import React from 'react';
import './Lifes.scss'

interface LifesProps {
    lifes: number
}

function Lifes({lifes}: LifesProps) {
    
    const generateHearts = () => {
        let hearts: JSX.Element[] = [];
        for(let i=0; i< lifes; i++){
            hearts.push(<span>💗</span>)
        }
        return hearts;
    }

    return(
        <div className="lifes-ctn">
            <p>{generateHearts()}</p>
        </div>
    )
}

export default Lifes;