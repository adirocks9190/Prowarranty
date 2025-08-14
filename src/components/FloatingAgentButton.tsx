import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingAgentButtonProps {
  isVisible: boolean;
}

const FloatingAgentButton: React.FC<FloatingAgentButtonProps> = ({ isVisible }) => {
  // The updated image URL for the AI agent
  const agentImageUrl = 'https://i.imgur.com/8e295gG.png';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 w-20 h-20 bg-white/50 backdrop-blur-lg rounded-full shadow-2xl border border-white/30 cursor-pointer flex items-center justify-center p-2"
          aria-label="AI Assistant"
        >
          <img src={agentImageUrl} alt="AI Agent" className="w-full h-full object-contain rounded-full" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingAgentButton;
