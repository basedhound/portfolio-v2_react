import { motion } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.5, delay: 0.25 }}>
      {children}
    </motion.div>
  );
};

export const SlideReveal = ({ children }) => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5, delay: 0.25 }}>
      {children}
    </motion.div>
  );
};
