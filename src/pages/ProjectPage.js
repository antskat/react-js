import { useParams } from "react-router-dom";

import githubSvg from "./../img/icons/gitHub-black.svg";

import { projects } from "./Projects";




const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find((i) => i.id === Number(id));
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.imgBig} alt="" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <a href="#!" className="btn-outline">
                    <img src={githubSvg} alt="" />
                    GitHub repo
                </a>

            </div>
        </div>
    </main>
     );
}
 
export default ProjectPage;