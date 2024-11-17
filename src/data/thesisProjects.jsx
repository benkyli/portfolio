import { GiBrain } from "react-icons/gi";

export const ThesisProjects = [
    {
        id: 0,
        title: "Rumination and Stroop Task Thesis",
        image: <GiBrain />,
        description: "The three programming projects for my thesis on rumination, the Stroop task, and emotional processing. The projects involved data analysis, computational modelling, and experimenting programming.",
        link: "",
        tools: [
        ],
    },
    {
        id: 1,
        title: 'Data Analysis',
        description: 'The parsing, preparation, and analysis of data from the thesis experiment.',
        link: 'https://github.com/benkyli/Rumination-Stroop-Data-Analysis',
        tools: [
            'Pandas',
            'Python',
            'R'
        ]
    },
    {
        id: 2,
        title: 'Online Stroop Task',
        description: 'An online experiment hosted on PsyToolKit. The experiment included rumination surveys, a rumination induction, and trials using the emotional Stroop task and the standard Stroop task.',
        link: 'https://github.com/benkyli/Emotional-Stroop-Experiment',
        tools: [
            'Prolific',
            'PsyToolKit',
        ]
    },
    {
        id: 3,
        title: 'GRAIN Model of the Emotional Stroop Task',
        description: "An adapted version of PsyNeuLink's GRAIN model. Layers for emotional processing were added to simulate emotional pathways in the brain.",
        link: 'https://github.com/benkyli/Emotional-Stroop-GRAIN-Model',
        tools: [
            'PsyNeuLink',
            'Python',
        ]
    }
]