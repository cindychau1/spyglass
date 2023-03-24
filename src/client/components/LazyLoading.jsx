import * as React from 'react';
import spyglass from '../../../assets/helm-only.png';
import { motion } from 'framer-motion';

function LazyLoading() {
  return (
    // wrap motion.div around spyglass logo to add rotating animations
    <motion.div whileHover={{ rotate: 25 }} whileTap={{ rotate: -25 }}>
      <img src={spyglass} className="spyglass-logo" alt="spyglass-logo" />
    </motion.div>
  );
}
export default LazyLoading;
