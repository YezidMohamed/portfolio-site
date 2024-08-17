import React from 'react';

const projects = [
  {
    title: 'Project 1',
    image: 'path-to-image1.jpg',
    description: 'Description of Project 1'
  },
  {
    title: 'Project 2',
    image: 'path-to-image2.jpg',
    description: 'Description of Project 2'
  },
  {
    title: 'Project 3',
    image: 'path-to-image3.jpg',
    description: 'Description of Project 3'
  }
];

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
