import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Associate Software Engineer",
    company: "Synergy Universal, Hyderabad",
    date: "Dec 2023 – Aug 2024",
    responsibilities: [
      "Developed responsive web applications using React.js, Node.js, and Java Spring Boot.",
      "Integrated RESTful APIs to connect front-end and back-end functionality.",
      "Collaborated with UI/UX teams to translate requirements into user-centric features.",
    ],
  },
  {
    job: "Frontend Developer Intern",
    company: "Innomatics Research Labs, Hyderabad",
    date: "Sept 2024 – Nov 2024",
    responsibilities: [
      "Built dynamic UI components using React.js and Redux Toolkit.",
      "Developed and tested APIs using Express.js and Node.js.",
      "Participated in full-stack development using the MERN stack.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-6">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
