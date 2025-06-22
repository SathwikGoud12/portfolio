import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Portfolio Website",
    year: "React.js, TailwindCSS,Html, Framer Motion, React Icons",
    desp: "Designed and developed a responsive personal portfolio website to showcase my skills, projects, and experience. Implemented smooth animations using Framer Motion, organized reusable components with React, and applied custom styling with TailwindCSS. The site features interactive sections, modern UI, and dynamic skill/project rendering for better engagement and professional presentation.",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://portfolio-three-beta-80.vercel.app/", // Replace with your actual GitHub repo
  },
  {
    name: "Food Recipe Website",
    year: "React.js, HTML, CSS, JavaScript, Fetch API",
    desp: "Built a food recipe web app that lets users search recipes based on ingredients using external APIs. Features include real-time search, modular design, and clean UI.",
    align: "left",
    image: "/images/website-img-2.webp", // Replace with your image if available
    link: "https://recipe-website-lac-iota.vercel.app/", // Replace with your deployed link or GitHub
  },
  {
    name: "Book Store App",
    year: "React.js, Node.js, Express.js, MongoDB, Firebase, Redux Toolkit",
    desp: "Developed a full-stack Book Store app with secure login via Firebase. Users can browse, sell, and manage book orders. Backend powered by Node.js & MongoDB with RESTful APIs.",
    align: "right",
    image: "/images/website-img-3.jpg", // Replace with your actual project screenshot if available
    link: "https://book-app-frontend-blush.vercel.app/", // Replace with your frontend or GitHub repo
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              desp={project.desp}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
