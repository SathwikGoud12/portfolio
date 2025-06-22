import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Sathwik Goud, a passionate Full Stack Developer with a B.Tech in Information Technology from 
        Malla Reddy Institute of Technology and Science. I bring hands-on experience in building dynamic 
        and scalable web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js.
        <br /><br />
        At Synergy Universal, I worked as an Associate Software Engineer, where I developed responsive web 
        apps using React for the frontend and Java, Spring Boot, and Node.js for backend services. I also 
        contributed to robust RESTful APIs and ensured data integrity with SQL.
        <br /><br />
        My internships and personal projects have strengthened my ability to design modern UI, integrate 
        APIs, and deploy full-stack applications. Whether it's building a book store app, a food recipe 
        finder, or my own portfolio, I focus on delivering clean code, performance, and great user experience.
        <br /><br />
        I’m always eager to learn new technologies and enjoy solving real-world problems through thoughtful 
        engineering, open-source collaboration, and continuous development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
