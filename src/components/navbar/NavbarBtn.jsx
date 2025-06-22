import { IoIosCloudDownload } from "react-icons/io";

const NavbarBtn = () => {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = "/resume_4.pdf"; // Public folder path
    link.download = "SathwikGoud_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={onButtonClick}
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Resume
      <div className="sm:hidden md:block">
        <IoIosCloudDownload />
      </div>
    </button>
  );
};

export default NavbarBtn;
