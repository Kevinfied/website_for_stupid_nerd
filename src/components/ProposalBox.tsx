import React, { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface Position {
  x: number;
  y: number;
}

interface YesButtonProps {
  position?: Position;
  onClick?: () => void;
}

const YesButton = ({ position, onClick }: YesButtonProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      style={
        position
          ? {
              position: "absolute",
              left: position.x,
              top: position.y,
              transform: "translate(-50%, -50%)",
            }
          : undefined
      }
    >
      <Button
        variant="secondary"
        className="bg-pink-200 hover:bg-pink-300 text-pink-800"
        onClick={onClick}
      >
        Yes <Heart className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

interface ProposalBoxProps {
  onAccept?: () => void;
}

const ProposalBox = ({
  onAccept = () => console.log("Accepted!"),
}: ProposalBoxProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState<Position>({
    x: 260,
    y: 270,
  });
  const [yesButtons, setYesButtons] = useState<Position[]>([
    { x: 100, y: 250 },
  ]);

  const moveNoButton = useCallback(() => {
    const newX = Math.random() * 300 + 50; // Keep within container bounds
    const newY = Math.random() * 300 + 50;

    // Add a new Yes button at the previous No button position
    setYesButtons((prev) => [...prev, noButtonPosition]);

    // Move the No button
    setNoButtonPosition({ x: newX, y: newY });
  }, [noButtonPosition]);

  return (
    <div className="relative w-[400px] h-[400px] bg-pink-100 rounded-xl shadow-lg p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-pink-800 mb-8 text-center">
        Will you be my valentine?
      </h2>

      {/* Static Yes buttons */}
      {yesButtons.map((pos, index) => (
        <YesButton key={index} position={pos} onClick={onAccept} />
      ))}

      {/* Moving No button */}
      <motion.div
        style={{
          position: "absolute",
          left: noButtonPosition.x,
          top: noButtonPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button
          variant="outline"
          className="bg-white hover:bg-gray-100"
          onClick={moveNoButton}
        >
          No
        </Button>
      </motion.div>

      {/* Decorative hearts */}
      <motion.div
        className="absolute top-4 left-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Heart className="text-pink-300 h-6 w-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Heart className="text-pink-300 h-6 w-6" />
      </motion.div>
    </div>
  );
};

export default ProposalBox;
