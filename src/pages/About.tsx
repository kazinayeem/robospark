// Full responsive RoboSpark page with updated competition data
// Paste this entire component into your project

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, DollarSign, Award } from "lucide-react";
import { SponsorSection } from "@/components/Sponsor";

const CustomStyles = () => (
  <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");

    .font-orbitron { font-family: "Orbitron", sans-serif; }
    .gradient-text {
      background: linear-gradient(90deg, #a78bfa, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .text-primary-neon { color: #8b5cf6; }
    .text-secondary-neon { color: #38bdf8; }

    .neon-card {
      background: rgba(18,24,47,0.45);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(139,92,246,0.45);
      box-shadow: 0 6px 30px rgba(139,92,246,0.06);
      transition: transform .28s ease, box-shadow .28s ease;
    }
    .neon-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(139,92,246,0.12);
    }

    .pulse-dot { animation: pulse-dot 1.5s infinite; }
    @keyframes pulse-dot {
      0%,100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.45); opacity: 0.55; }
    }

    .no-break {
      word-break: keep-all;
      overflow-wrap: normal;
    }
  `}</style>
);

const competitions = [
  {
    icon: "☣",
    title: "Drone Challenge",
    desc: "Navigate autonomous drones through aerial tracks.",
    prize: 60000,
    rewards: [
      { place: "Champion", amount: 30000 },
      { place: "1st Runner Up", amount: 20000 },
      { place: "2nd Runner Up", amount: 10000 },
    ],
    entryFee: "2000 BDT (3 Members)",
    extraFee: "+ 600 BDT per extra member",
    teamSize: "3 – 6 Members",
  },
  {
    icon: "🤖",
    title: "Line Following Robot",
    desc: "High-speed precision robot racing track.",
    prize: 23000,
    rewards: [
      { place: "Champion", amount: 10000 },
      { place: "1st Runner Up", amount: 8000 },
      { place: "2nd Runner Up", amount: 5000 },
    ],
    entryFee: "1500 BDT (3 Members)",
    extraFee: "+ 500 BDT per extra member",
    teamSize: "3 – 6 Members",
  },
  {
    icon: "⚽",
    title: "SoccerBot",
    desc: "Build robots to compete in autonomous soccer.",
    prize: 23000,
    rewards: [
      { place: "Champion", amount: 10000 },
      { place: "1st Runner Up", amount: 8000 },
      { place: "2nd Runner Up", amount: 5000 },
    ],
    entryFee: "1500 BDT (3 Members)",
    extraFee: "+ 500 BDT per extra member",
    teamSize: "3 – 6 Members",
  },
  {
    icon: "💻",
    title: "Techathon",
    desc: "6-hour hackathon to develop AI/software innovation.",
    prize: 45000,
    rewards: [
      { place: "Champion", amount: 20000 },
      { place: "1st Runner Up", amount: 15000 },
      { place: "2nd Runner Up", amount: 10000 },
    ],
    entryFee: "2000 BDT (3 Members)",
    extraFee: "+ 600 BDT per extra member",
    teamSize: "3 – 6 Members",
  },
  {
    icon: "✨",
    title: "Cozmo Clench",
    desc: "Robotic machine to clear simulated debris.",
    prize: 23000,
    rewards: [
      { place: "Champion", amount: 10000 },
      { place: "1st Runner Up", amount: 8000 },
      { place: "2nd Runner Up", amount: 5000 },
    ],
    entryFee: "1500 BDT (3 Members)",
    extraFee: "+ 500 BDT per extra member",
    teamSize: "3 – 6 Members",
  },
];

const App: React.FC = () => {
  const stats = [
    {
      value: <>5</>,
      label: "Competitions",
      icon: Award,
      color: "text-primary-neon",
      borderColor: "border-primary-neon",
    },
    {
      value: (
        <>
          170K<sup>+</sup> BDT
        </>
      ),
      label: "Prize Pool",
      icon: DollarSign,
      color: "text-yellow-400",
      borderColor: "border-yellow-400",
    },
  ];

  const eventOverview =
    "RoboSpark 2025 is a premier inter-university robotics and technology competition bringing together top innovators across Bangladesh.";

  const eventChallenges =
    "With five diverse competitions including Drone Challenge, Line Following Robot, Techathon, SoccerBot, and Cozmo Clench — participants will face exciting, skill-testing challenges.";

  const visionText =
    "To inspire and nurture the next generation of innovators in robotics and technology through a national platform of creativity and excellence.";

  const missionText =
    "To provide hands-on robotics experience, competitive challenges, and a strong tech community boosting innovation among students.";

  const clubText =
    "The DIU Robotics Club is dedicated to promoting robotics, automation, and technological innovation at Daffodil International University.";

  const keyAchievements = [
    "Successfully organized 3 previous robotics competitions",
    "Trained over 500 students in robotics & automation",
    "Winner of National Robotics Championship 2024",
    "Published 15+ robotics research papers",
  ];

  return (
    <>
      <CustomStyles />

      <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-950 via-indigo-900 to-black text-white antialiased">
        <div className="px-4 sm:px-6 lg:px-8 pt-32">
          {/* HERO */}
          <header className="pt-20 pb-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-orbitron gradient-text uppercase no-break text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              RoboSpark
            </motion.h1>
            <p className="mt-4 text-indigo-300 text-sm sm:text-base md:text-lg border-t border-b border-indigo-500/30 py-2 inline-block">
              Fostering Innovation and Excellence in Robotics & Technology
            </p>
          </header>

          <section className="pb-12 max-w-4xl mx-auto flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`neon-card border ${s.borderColor}/40 rounded-xl p-6 w-full max-w-xs flex flex-col justify-center items-center text-center`}
                >
                  <s.icon className={s.color} size={44} />
                  <div
                    className={`font-orbitron font-extrabold mt-3 ${s.color} text-3xl`}
                  >
                    {s.value}
                  </div>
                  <div className="text-gray-400 mt-1 text-sm tracking-wide">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Main Content */}
          <main className="max-w-4xl mx-auto space-y-12 pb-20">
            {/* Overview */}
            <section>
              <div className="neon-card p-6 sm:p-8 rounded-xl">
                <h2 className="text-primary-neon font-orbitron text-2xl mb-3">
                  {"Event Overview"}
                </h2>
                <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
                  {eventOverview}
                </p>
                <p className="text-indigo-300 mt-4 font-semibold text-sm sm:text-base">
                  {eventChallenges}
                </p>
              </div>
            </section>

            {/* Vision & Mission - stack on mobile, two columns on md */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="neon-card rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="text-secondary-neon" size={36} />
                  <h3 className="text-lg sm:text-xl font-orbitron font-bold text-secondary-neon">
                    {"Vision"}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {visionText}
                </p>
              </motion.div>

              <motion.div className="neon-card rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-primary-neon" size={36} />
                  <h3 className="text-lg sm:text-xl font-orbitron font-bold text-primary-neon">
                    {"Mission"}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {missionText}
                </p>
              </motion.div>
            </section>

            {/* Club Info & Achievements */}
            <section>
              <div className="neon-card rounded-2xl p-5 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-orbitron text-secondary-neon mb-3">
                  {"DIU Robotics Club"}
                </h3>
                <p className="text-indigo-200 leading-relaxed text-sm sm:text-base border-l-4 border-secondary-neon pl-3 mb-6">
                  {clubText}
                </p>

                <h4 className="text-primary-neon font-orbitron text-xl mb-3">
                  {"Key Achievements"}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200 text-sm">
                  {keyAchievements.map((k, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary-neon mt-0.5">▸</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Competitions Section */}
            <section>
              <h2 className="text-secondary-neon text-3xl font-orbitron text-center mb-6">
                {"Competitions"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {competitions.map((c, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="neon-card rounded-xl p-5 sm:p-6 border border-indigo-600/30"
                  >
                    <div className="text-4xl mb-2">{c.icon}</div>

                    <h3 className="text-primary-neon font-orbitron text-xl sm:text-2xl mb-1">
                      {c.title}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                      {c.desc}
                    </p>

                    <div className="text-secondary-neon font-orbitron text-lg mb-2">
                      Prize Pool: {c.prize} BDT
                    </div>

                    {/* Rewards */}
                    <ul className="text-gray-300 text-sm mb-4 space-y-1">
                      {c.rewards.map((r, i) => (
                        <li key={i}>
                          🏆{" "}
                          <span className="text-primary-neon">{r.place}:</span>{" "}
                          {r.amount} BDT
                        </li>
                      ))}
                    </ul>

                    {/* Entry Fee */}
                    <div className="bg-gray-800/40 p-3 rounded-lg border border-indigo-600/40 mb-3">
                      <div className="font-bold text-primary-neon">
                        Entry Fee
                      </div>
                      <div className="text-gray-200 text-sm">{c.entryFee}</div>
                      <div className="text-gray-400 text-xs">{c.extraFee}</div>
                    </div>

                    {/* Team Size */}
                    <div className="bg-gray-800/40 p-3 rounded-lg border border-secondary-neon/40">
                      <div className="font-bold text-secondary-neon">
                        Team Size
                      </div>
                      <div className="text-gray-200 text-sm">{c.teamSize}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Why Participate */}
            <section>
              <h4 className="text-secondary-neon text-2xl font-orbitron text-center mb-6">
                {"Why Participate"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Network with top tech talent and industry professionals",
                  "Win exciting prizes and recognition",
                  "Gain hands-on experience with cutting-edge technology",
                  "Enhance your problem-solving and teamwork skills",
                  "Showcase your innovations to a wide audience",
                  "Access mentorship from experienced professionals",
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-800/60 border border-secondary-neon/20 p-4 rounded-lg flex gap-3 items-start"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-secondary-neon mt-1 pulse-dot flex-shrink-0" />
                    <p className="text-sm text-gray-100 leading-relaxed">{b}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </main>
        </div>

        <SponsorSection />
      </div>
    </>
  );
};

export default App;
