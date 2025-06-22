import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Sathwik Goud <br className="sm:hidden md:block" />

      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        Full Stack Developer with 1+ years of experience designing, developing, and optimizing <br />scalable web applications. Proficient in JavaScript with expertise in building responsive, <br />accessible user interfaces using ReactJS and developing robust backend services with <br /> Node.js. 
        <br />Experienced in REST API integration, performance optimization, accessibility <br /> (WCAG 2.1),and full project lifecycle from user research to deployment. <br /> Strong collaborator with a proven track record of improving usability, system reliability, and team efficiency.
      </motion.p>
    </div>
  );
};

export default HeroText;
