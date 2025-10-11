import { ThesisProjects } from './data/thesisProjects.jsx'
import ThesisProject from './ThesisProject.jsx'

export default function ThesisSection() {
    return (
        <div id='thesis-section'>
            <h3 className='text-4xl font-bold pb-4'>Thesis</h3>
            <h4>The culmination of my undergraduate thesis containing the online experiment, the data analysis, and the computational model of the experiment.</h4>
            <div className='w-5/6 flex flex-wrap gap-3 justify-center m-4'>
                {ThesisProjects.map(project =>
                    <ThesisProject key={project.id} {...project} />
                )}
            </div>
            <h4>The work from my thesis was used as the basis for another dissertation that I co-authored. The paper has been submitted and is awaiting approval from Cognitive..... The preprint can be viewed here. </h4>
        </div>
    )
}