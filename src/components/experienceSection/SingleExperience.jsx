import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-auto md:max-w-[400px] sm:w-full border-2 border-orange border-dashed rounded-2xl mt-8 p-6 bg-[#2e1e1e] flex flex-col justify-between shadow-lg"
    >
      <div>
        <p className="font-bold text-cyan text-lg">{experience.job}</p>
        <p className="text-orange font-semibold">{experience.company}</p>
        <p className="text-lightGrey text-sm mb-4">{experience.date}</p>
        <ul className="list-disc list-inside text-lightGrey text-sm leading-relaxed space-y-1">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
