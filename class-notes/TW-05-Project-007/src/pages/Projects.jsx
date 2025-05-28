import React from "react";
import ProjectsBio from "../components/ProjectsBio";


const projectImages = [
  'img/project-1.jpg',
  'img/project-2.jpg',
  'img/project-3.jpg',
  'img/project-4.jpg',
  'img/project-5.jpg',
  'img/project-6.jpg',
];
const Projects = () => {
  return (
    <div>
      <ProjectsBio />
      <main className="projects">
        <div className="projects__items">
          {projectImages.map((src, index) => (
            <div key={index} className="projects__item">
              <img src={src} alt={`My Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;