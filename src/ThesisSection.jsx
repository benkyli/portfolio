import { ThesisProjects } from './data/thesisProjects.jsx';
import ThesisProject from './ThesisProject.jsx';
import { IoBookOutline } from "react-icons/io5";
import { openInNewTab } from './utils/utils.js';

export default function ThesisSection() {
    const prepublishLink = "https://www.researchgate.net/profile/Selena-Singh/publication/391197067_Emotional_modulation_of_inhibitory_control_in_rumination_from_empirical_and_computational_perspectives/links/68127170df0e3f544f4f5afc/Emotional-modulation-of-inhibitory-control-in-rumination-from-empirical-and-computational-perspectives.pdf"

    return (
        <div id='thesis-section'>
            <h3 className='text-5xl font-extrabold pb-4 text-yellow-500'>Thesis</h3>
            <p className='text-lg'>The culmination of my undergraduate thesis containing the data analysis, the online experiment, and the computational model of the experiment.</p>
            <div className='w-5/6 flex flex-wrap gap-3 justify-center mx-auto my-4'>
                {ThesisProjects.map(project =>
                    <ThesisProject key={project.id} {...project} />
                )}
            </div>
            <div className='flex flex-col w-full '>
                <div className='flex items-center gap-2 font-extrabold text-yellow-500'>
                    <IoBookOutline />
                    <p>Publication Update:</p>
                </div>
                <p className='relative cursor-pointer underline' onClick={() => openInNewTab(prepublishLink)}>Emotional modulation of inhibitory control in rumination from empirical and computational perspectives</p>
                <p className='text-sm pt-1'>Manuscript accepted by Cognitive, Affective, and Behavioral Neuroscience, October 2025.</p>
                <div className='pt-2 mt-2 border-t border-gray-500'>
                    <b>Note: </b>After graduation, I co-authored a manuscript with my undergraduate lab that further expanded on the work from my thesis. The link above is the open source preprint, since the production of the accepted article is still in process. 
                </div>
            </div>
        </div>
    )
}