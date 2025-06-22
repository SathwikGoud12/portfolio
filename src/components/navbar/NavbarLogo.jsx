const NavbarLogo = () => {
  return (
    <div>
      {/* Full name for md and up screens */}
      <a href="#hero">
        <h1 className="text-white text-2xl sm:hidden md:block hover:text-orange transition duration-300 font-bold">
          Sathwik Goud
        </h1>
      </a>

      {/* Initials for small screens */}
      <a href="#hero">
        <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block hover:text-orange transition duration-300">
          SV
        </h1>
      </a>
    </div>
  );
};

export default NavbarLogo;
