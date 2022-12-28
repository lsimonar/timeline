import { useNavigate } from "react-router-dom"
import { allCards } from "../../utils/cards"
import { peopleCards } from "../../utils/PeopleCards"
import { Card } from "../../utils/types"


interface HomePageProps{
    setSelectedDeck:React.Dispatch<React.SetStateAction<Card[]|undefined>>
}


export function HomePage(props: HomePageProps): JSX.Element{

    let navigate = useNavigate();

    return(<>
        <button onClick= {()=>navigate('world-history')}>World history</button>
        <button onClick= {()=>navigate('famous-characters')}>Famous People Birthdays</button>
    </>)
}