import { allCards } from "../../utils/cards"
import { peopleCards } from "../../utils/PeopleCards"
import { Card } from "../../utils/types"


interface HomePageProps{
    setSelectedDeck:React.Dispatch<React.SetStateAction<Card[]|undefined>>
}


export function HomePage(props: HomePageProps): JSX.Element{
    return(<>
    <button onClick= {()=>props.setSelectedDeck(allCards)}>World history</button>
    <button onClick= {()=>props.setSelectedDeck(peopleCards)}>Famous People Birthdays</button>
    </>)
}