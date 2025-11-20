import { motion } from "framer-motion";

export const SponsorSection = () => {
  const sponsors = [
    {
      name: "Department of SWE",
      tier: "DIU SWE Department",
      logoUrl: "/sponsor.png",
      size: "xl",
    },
    {
      name: "Daffodil International University",
      tier: "Daffodil International University",
      logoUrl: "/sponsor1.png",
      size: "lg",
    },
    {
      name: "DIU Robotics Club",
      tier: "DIU Robotics Club",
      logoUrl: "/sponsor2.png",
      size: "lg",
    },
    {
      name: "RoboSpark",
      tier: "Event Partner",
      logoUrl: "/sponsor3.png",
      size: "md",
    },
  ];

  // 🔥 Improved responsive sizes
  const getSize = (size: string) => {
    switch (size) {
      case "xl":
        return "h-[120px] sm:h-52 md:h-60";
      case "lg":
        return "h-36 sm:h-44 md:h-52";
      case "md":
        return "h-32 sm:h-40 md:h-48";
      default:
        return "h-24";
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-orbitron font-extrabold mb-14 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Official Organizers & Sponsors
        </h2>

        {/* -------- Marquee Container -------- */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-10 sm:gap-16 md:gap-24" // 🔥 Reduced gap on mobile
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            style={{ width: "200%" }} // double width for seamless loop
          >
            {[...sponsors, ...sponsors].map((sponsor, i) => (
              <div
                key={i}
                className="flex flex-col items-center group hover:scale-105 transition-all duration-300"
              >
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className={`
                    ${getSize(sponsor.size)}
                    max-w-[200px] sm:max-w-[260px]   // 🔥 Prevent shrink
                    object-contain
                    opacity-90 
                    group-hover:opacity-100 
                    drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]
                    transition
                  `}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
