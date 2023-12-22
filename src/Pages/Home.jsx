import React from "react";
import projectList from "../Store/data.js";
import ProjectCard from "../Page/ProjectCard.jsx";


function Home() {
  return (
    <div className="container p-5 text-white">
      <div className="h3 text-success">Project List</div>
      <div className="row">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
