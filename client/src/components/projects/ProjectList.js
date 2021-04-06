import React from 'react';
import Project from './Project';

const ProjectList = () => {

    const projects= [
        {name: 'Store'},
        {name: 'Design'},
        {name: 'Video'}
    ]

    return(
        <ul className="projects-list">
            {projects.map(project => (
                <Project
                    project={project}
                />
            ))}
        </ul>
    );
} 

export default ProjectList;