import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import huggingBear from "../assets/hugging.gif";

const SuccessPage = () => {
  // Animation variants for floating hearts
  const floatingHearts = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    delay: Math.random() * 2,
  }));

  return (
    <div className="min-h-screen w-full bg-pink-50 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Floating hearts background animation */}
      {floatingHearts.map(({ id, x, delay }) => (
        <motion.div
          key={id}
          initial={{ y: window.innerHeight + 100, x }}
          animate={{
            y: -100,
            x: x + (Math.random() - 0.5) * 200,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay,
            ease: "linear",
          }}
          className="absolute"
        >
          <Heart
            size={24}
            className={`text-pink-${Math.random() > 0.5 ? "400" : "300"}`}
          />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-xl max-w-md mx-4"
      >
        <img
          src={huggingBear}
          alt="hugging bear"
          className="w-32 h-32 mx-auto mb-6 rounded-full"
        />

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-pink-600 mb-4"
        >
          YIPEEEEEEE! 💖
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-pink-800 mb-8"
        >
          Thank you for being my Valentine! ✨
          <br />I LOVE YOU 💝
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-pink-700"
        >
          Let's make beautiful memories together! 🌹
          <div className="mt-4 text-[10px] text-pink-400">footjob?</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
