import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Spinning glowing hexagon backgrounds */}
      <div className="absolute bottom-[-20%] z-0 flex justify-center items-center rotate-90">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] text-orange opacity-70 animate-spin" />
      </div>
      <div className="absolute bottom-[-20%] z-0 flex justify-center items-center rotate-90">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] text-orange opacity-70 animate-spin" />
      </div>
      <div className="absolute bottom-[-20%] z-0 flex justify-center items-center">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] text-cyan opacity-70 animate-spin" />
      </div>
      <div className="absolute bottom-[-20%] z-0 flex justify-center items-center">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] text-cyan opacity-70 animate-spin" />
      </div>

      {/* ✅ Circular Profile Image Container */}
      <div className="relative z-10 w-[260px] h-[260px] rounded-full overflow-hidden border-[4px] border-orange-400 shadow-xl">
        <img
          src="/images/profilepic.png"
          alt="Sathwik"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;
