import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/sathwik-goud-53a2ab198"><SingleContactSocial Icon={FaLinkedinIn} /></a>
      <a href="https://github.com/SathwikGoud12"><SingleContactSocial Icon={FiGithub} /></a>
      <a href="https://www.instagram.com/sathwik_raja?igsh=MWd1cDN4cmhlaTBnaQ=="><SingleContactSocial Icon={FaInstagram} /> </a>
    </div>
  );
};

export default ContactSocial;
