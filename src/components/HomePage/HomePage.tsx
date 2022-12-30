import { useNavigate } from "react-router-dom"
import './HomePage.scss'


interface GameModeProps {
    gamemode: string;
    subtitle: string;
    navTo: string;
}


export function HomePage(): JSX.Element{

    let navigate = useNavigate();

    const GameMode = ({gamemode, subtitle, navTo}: GameModeProps) => {
        return(
            <div className="gamemode-button">
                <div className="titles-ctn">
                    <h1 className="title">{gamemode}</h1>
                    <span className="subtitle">{subtitle}</span>
                </div>
                <button className="play-button" onClick= {()=>navigate(navTo)}>Play</button>
            </div>
        )
    }

    return(<>
        <div className="home-page-ctn">
            <h1 className="home-title">Timeline</h1>
            <div className="home-buttons-ctn">
                <GameMode 
                    gamemode="World History" 
                    subtitle="Order world history events" 
                    navTo="world-history"/>
                <GameMode 
                    gamemode="Famous Characters" 
                    subtitle="Order the birthday of famous characters"
                    navTo="famous-characters"/>
            </div>
        </div>
    </>)
}