import { Card } from "./types";

export const allCards: Card[] = [
    { id: "1", 
      date: new Date("1215"), 
      content: "The signing of the Magna Carta", 
      img: '/images/magna_carta.jpg' 
    },
    { id: "2", 
      date: new Date("1492"), 
      content: "The discovery of America", 
      img: '/images/discovery_america.jpg' 
    },
    { id: "3", 
      date: new Date("1517"), 
      content: "The Protestant Reformation", 
      img: '/images/protestant_reformation.jpg' 
    },
    { id: "4", 
      date: new Date("1776"), 
      content: "Declaration of Independence of the USA", 
      img: '/images/declaration_of_independence.jpg' 
    },
    { id: "5", 
      date: new Date("1789"), 
      content: "The French Revolution", 
      img: '/images/french_revolution.jpg' 
    },
    { id: "6", 
      date: new Date("1865"), 
      content: "The abolition of slavery in the USA", 
      img: '/images/abolition_slavery.jpg' 
    },
    { id: "7", 
      date: new Date("1914"), 
      content: "The assassination of Archduke Ferdinand", 
      img: '/images/assesination_Archiduke.jpg' 
    },
    { id: "8", 
      date: new Date("1919"), 
      content: "The signing of the Treaty of Versailles", 
      img: '/images/treaty_of_versailles.jpg' 
    },
    { id: "9", 
      date: new Date("1945"), 
      content: "The end of World War II", 
      img: '/images/end_ww2.jpg' 
    },
    { id: "10",
      date: new Date("1991"), 
      content: "The collapse of the Soviet Union", 
      img: '/images/collapse_of_soviet_union.png' 
    },
    { id: "11",
      date: new Date("2001"), 
      content: "The terrorist attacks of September 11", 
      img: '/images/september_11.jpg' 
    },
    { id: "12",
      date: new Date("2019"), 
      content: "Start of the COVID-19 pandemic", 
      img: '/images/covid.webp'
    }
  ]