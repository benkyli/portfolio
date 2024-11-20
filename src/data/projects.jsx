import { FaYoutube, FaGuitar, FaFolder } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

export const ProjectData = [
    {
        id: 0,
        title: "Youtube Live Chat Scroller",
        image: <FaYoutube />,
        description: "This app attempts to recreate the bullet chat scrolling of live stream platforms like Bilibili and Niconico using YouTube's data API. The intended purpose of the app is to be used as an OBS chat overlay.",
        link: "https://github.com/benkyli/Youtube-Live-Chat-Scroller",
        tools: [
            "Flask",
            "Bootstrap",
            "Youtube API",
            "OAuth 2.0"
        ]
    },
    {
        id: 1,
        title: "Guitar Chord Identifier",
        image: <FaGuitar />,
        description: "Class identifier that allows you to categorize and classify guitar chords in real time.",
        link: "https://github.com/benkyli/Guitar-Chord-Identifier",
        tools: [
            "TensorFlow",
            "OpenCV",
            "Python"
        ]
    },
    {
        id: 2,
        title: "Portfolio Website",
        image: <FaFolder />,
        description: "My portfolio website created using React and Tailwind.",
        link: "https://github.com/benkyli/portfolio",
        tools: [
            "React",
            "TailwindCSS",
            "React-Hook-Form",
            "Web3Forms"
        ]
    },
    {
        id: 3,
        title: "Rumination and Stroop Task Thesis",
        image: <GiBrain />,
        description: "The three programming projects for my thesis on rumination, the Stroop task, and emotional processing. The projects involved data analysis, computational modelling, and experimenting programming.",
        link: '',
        tools: [
        ],
        modal: true,
    },
];