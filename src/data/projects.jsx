import { FaYoutube, FaGuitar} from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md"; // funny because this is a tennis icon that I'm using for pickleball
import { FaGithub } from 'react-icons/fa';

export const ProjectData = [
    {
        id: 0,
        title: "Youtube Live Chat Scroller",
        image: <FaYoutube />,
        description: "This app recreates the bullet chat scrolling of live stream platforms like Bilibili and Niconico using YouTube's data API. The intended purpose of the app is to be used as an OBS chat overlay.",
        link: "https://github.com/benkyli/Youtube-Live-Chat-Scroller",
        tools: [
            "Fullstack",
            "Flask",
            "Bootstrap",
            "Youtube API",
            "OAuth",
            "WebSocket"
        ]
    },
    {
        id: 1,
        title: "Guitar Chord Identifier",
        image: <FaGuitar />,
        description: "Class identifier that allows you to categorize and classify guitar chords in real time.",
        link: "https://github.com/benkyli/Guitar-Chord-Identifier",
        tools: [
            "Machine Learning",
            "TensorFlow",
            "OpenCV",
            "MediaPipe",
            "Python",
            "NumPy"
        ]
    },
    {
        id: 2,
        title: "Pickleball Booking Bot",
        image: <MdSportsTennis />,
        description: "A Tkinter Python app that books public pickeball courts in Hamilton through concurrent requests and bypasses captchas using Selenium. I made this for my non-programmer brother.",
        link: "https://github.com/benkyli/Pickleball-Booking-Bot",
        tools: [
            "Web Scraping",
            "Requests",
            "Tkinter",
            "Selenium",
            "Asyncio",
            "Beautiful Soup"
        ]
    },
    {
        id: -1,
        title: "GitHub",
        image: <FaGithub />,
        link: "https://github.com/benkyli",
        description: "See all of my repositories."
    }
];