import moonWebp from "../../assets/destination/image-moon.webp"
import marsWebp from "../../assets/destination/image-mars.webp"
import europaWebp from "../../assets/destination/image-europa.webp"
import titanWebp from "../../assets/destination/image-titan.webp"


 const Array = [ 
    {
        id: "1",
        img : moonWebp,    
        name: "Moon",
        description : "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        AvgDistance : "384,400 km",
        travelTime  : "3 days"
    },
    {
        id : "2",
        img : marsWebp,
        name: "Mars",
        description : `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It’s two and a half times 
        the size of Everest!`,
        AvgDistance : "225 mil . km",
        travelTime  : "9 months"
    },
    {
        id : "3",
        img : europaWebp,
        name: "Europa",
        description : `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
        AvgDistance : "628 mil . km",
        travelTime  : "3 years"
    },
    {
        id : "4",
        img : titanWebp,
        name: "Titan",
        description : "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        AvgDistance : "1.6 bil . km",
        travelTime  : "7 years"
    },

] 

export default Array;