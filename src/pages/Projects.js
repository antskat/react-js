import project01 from "../img/projects/01.jpg";
import project02 from "../img/projects/02.jpg";
import project03 from "../img/projects/03.jpg";
import project04 from "../img/projects/04.jpg";
import project05 from "../img/projects/05.jpg";
import project06 from "../img/projects/06.jpg";
import img1 from "../img/projects/01-big.jpg";
import img2 from "../img/projects/02-big.jpg";
import img3 from "../img/projects/03-big.jpg";
import img4 from "../img/projects/04-big.jpg";
import img5 from "../img/projects/05-big.jpg";
import img6 from "../img/projects/06-big.jpg";

import { NavLink } from "react-router-dom";

export const projects = [
  {
    id: 1,
    title: "Gaming streaming portal",
    img: project01,
    imgBig: img1
  },
  {
    id: 2,
    title: "Video service",
    img: project02,
    imgBig: img2
  },
  {
    id: 3,
    title: "Gaming streaming portal",
    img: project03,
    imgBig: img3
  },
  {
    id: 4,
    title: "Video service",
    img: project04,
    imgBig: img4
  },
  {
    id: 5,
    title: "Gaming streaming portal",
    img: project05,
    imgBig: img5
  },
  {
    id: 6,
    title: "Video service",
    img: project06,
    imgBig: img6
  },
];

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project) => (
            <li key={project.id} className="project">
              <NavLink to={`/project/${project.id}`}>
                <img
                  src={project.img}
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">{project.title}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};


export default Projects;
