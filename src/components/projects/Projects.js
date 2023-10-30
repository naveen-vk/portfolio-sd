import React from 'react'
import Title from '../layouts/Title'
import { project1, project2, project4,project5,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check out my singing videos"
          des="MY VOCALS"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Kum. Sanjana Devarajan’s Vocal Arangetram "
          src={project2}
          githubLink="https://www.youtube.com/watch?v=ieXCBMZPHf0&t=924s"
        />
        <ProjectsCard
          title="Kum. Sanjana Devarajan’s Arangetram "
          src={project5}
          githubLink="https://www.youtube.com/watch?v=urluQnchQXw"
        />
        <ProjectsCard
          title="Kum. Sanjana Devarajan’s Arangetram Promo"
          src={project4}
          githubLink="https://www.facebook.com/550106724/videos/1128049704821172/"
        />        
        <ProjectsCard
          title="HTGC Ekanta Seva 6.11.22 - Venkata Ramana"
          src={project1}
          githubLink="https://www.youtube.com/watch?v=Q0f8BlDPJRc"
        />
      </div>
    </section>
  );
}

export default Projects