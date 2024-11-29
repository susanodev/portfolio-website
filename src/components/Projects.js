import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    { title: 'Project 1', description: 'Description for project 1' },
    { title: 'Project 2', description: 'Description for project 2' },
    { title: 'Project 3', description: 'Description for project 3' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
