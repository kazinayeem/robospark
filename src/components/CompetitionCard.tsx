import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CompetitionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  totalPrize: number;
  prizeBreakdown: {
    champion: number;
    firstRunnerUp: number;
    secondRunnerUp: number;
  };
  baseFee: number;
  baseTeamSize: number;
  extraPerMember: number;
  maxTeamSize: number;
  index: number;
}

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
}: CompetitionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03, translateY: -5 }}
      className="bg-card/80 backdrop-blur-sm rounded-lg p-6 neon-border hover:glow-border transition-all duration-300"
    >
      {/* TOP */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-3xl">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
            {title}
          </h3>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-muted-foreground mb-6">{description}</p>

      {/* DETAILS BLOCK */}
      <div className="space-y-4 mb-6">
        {/* TOTAL PRIZE */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Trophy size={16} className="text-secondary" />
            <span className="text-muted-foreground">Total Prize</span>
          </div>
          <span className="font-semibold text-secondary">
            {totalPrize.toLocaleString()} BDT
          </span>
        </div>

        {/* PRIZE BREAKDOWN */}
        <div className="text-xs text-muted-foreground bg-muted/10 p-3 rounded-lg">
          <p>
            🏆 Champion:{" "}
            <span className="text-white">{prizeBreakdown.champion} BDT</span>
          </p>
          <p>
            🥈 1st Runner-up:{" "}
            <span className="text-white">
              {prizeBreakdown.firstRunnerUp} BDT
            </span>
          </p>
          <p>
            🥉 2nd Runner-up:{" "}
            <span className="text-white">
              {prizeBreakdown.secondRunnerUp} BDT
            </span>
          </p>
        </div>

        {/* BASE FEE */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className="text-primary" />
            <span className="text-muted-foreground">Base Fee</span>
          </div>
          <span className="font-semibold text-foreground">
            {baseFee} BDT (3 Members)
          </span>
        </div>

        {/* EXTRA FEE */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className="text-yellow-400" />
            <span className="text-muted-foreground">Extra Per Member</span>
          </div>
          <span className="font-semibold text-yellow-300">
            +{extraPerMember} BDT
          </span>
        </div>

        {/* TEAM SIZE */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Users size={16} className="text-blue-400" />
            <span className="text-muted-foreground">Team Size</span>
          </div>
          <span className="font-semibold text-blue-300">
            {baseTeamSize} – {maxTeamSize} Members
          </span>
        </div>
      </div>

      {/* REGISTER BTN */}
      <Button
        asChild
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron font-semibold"
      >
        <Link to={`/register?competition=${encodeURIComponent(title)}`}>
          Register Now
        </Link>
      </Button>
    </motion.div>
  );
};

export default CompetitionCard;
