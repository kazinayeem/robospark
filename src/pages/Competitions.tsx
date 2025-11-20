import React from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, Zap } from "lucide-react";
import { SponsorSection } from "@/components/Sponsor";
import { competitions } from "@/data/competitions";

// ★ Custom CSS
const CustomStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

    .font-orbitron {
      font-family: 'Orbitron', sans-serif;
    }

    .gradient-text {
      background: linear-gradient(90deg, #a78bfa, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px rgba(167, 139, 250, 0.6);
    }

    .neon-card {
      background: rgba(18, 24, 47, 0.55);
      border: 1px solid rgba(139, 92, 246, 0.3);
      backdrop-filter: blur(10px);
      transition: 0.3s;
    }
    .neon-card:hover {
      border-color: rgba(56, 189, 248, 0.9);
      box-shadow: 0 0 20px rgba(56,189,248,0.4);
      transform: translateY(-6px);
    }
  `}</style>
);

// ★ Competition Card
const CompetitionCard = ({
  title,
  description,
  icon,
  totalPrize,
  prizeBreakdown,
  baseFee,
  baseTeamSize,
  extraPerMember,
  maxTeamSize,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="neon-card rounded-2xl p-6 flex flex-col w-full"
    >
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4 border-b border-indigo-700/40 pb-3">
        <div className="p-3 rounded-xl bg-indigo-900/40 text-3xl">{icon}</div>
        <h3 className="text-2xl font-orbitron font-bold text-purple-300">
          {title}
        </h3>
      </div>

      <p className="text-gray-300 text-sm mb-6">{description}</p>

      {/* Details */}
      <div className="space-y-4 border-t border-indigo-700/40 pt-4">
        {/* Prize Pool */}
        <div className="flex justify-between">
          <span className="text-gray-400 flex items-center gap-2 text-sm">
            <DollarSign size={16} className="text-yellow-400" /> Prize Pool
          </span>
          <span className="font-bold text-yellow-300">{totalPrize} BDT</span>
        </div>

        {/* Prize Breakdown */}
        <div className="bg-indigo-900/30 p-3 rounded-lg border border-indigo-700/40 text-xs text-gray-300 space-y-1">
          <p>🏆 Champion: {prizeBreakdown.champion} BDT</p>
          <p>🥈 1st Runner Up: {prizeBreakdown.firstRunnerUp} BDT</p>
          <p>🥉 2nd Runner Up: {prizeBreakdown.secondRunnerUp} BDT</p>
        </div>

        {/* Base Fee */}
        <div className="flex justify-between">
          <span className="text-gray-400 flex items-center gap-2 text-sm">
            <Zap size={16} className="text-red-400" /> Entry Fee
          </span>
          <span className="font-bold text-red-300">
            {baseFee} BDT ({baseTeamSize} Members)
          </span>
        </div>

        {/* Extra Fee */}
        <p className="text-xs text-gray-400">
          + {extraPerMember} BDT per extra member
        </p>

        {/* Team Size */}
        <div className="flex justify-between pt-1">
          <span className="text-gray-400 flex items-center gap-2 text-sm">
            <Users size={16} className="text-green-400" /> Team Size
          </span>
          <span className="font-bold text-green-300">
            {baseTeamSize} – {maxTeamSize}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ★ MAIN PAGE
const CompetitionsPage = () => {
  return (
    <>
      <CustomStyles />

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-900 to-black text-white p-6">
        {/* HERO Section */}
        <section className="text-center max-w-3xl mx-auto pt-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-orbitron font-extrabold gradient-text"
          >
            Competitions
          </motion.h1>

          <p className="text-indigo-300 mt-4 text-lg">
            Explore robotics, AI & innovation challenges.
          </p>
        </section>

        {/* Cards Grid */}
        <section className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((c, i) => (
              <CompetitionCard key={i} index={i} {...c} />
            ))}
          </div>
        </section>

        <SponsorSection />
      </div>
    </>
  );
};

export default CompetitionsPage;
