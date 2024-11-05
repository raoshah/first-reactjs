// PageTransition.js
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}    // Start off-screen left
            animate={{ opacity: 1, x: 0 }}       // Move into view
            exit={{ opacity: 0, x: 100 }}        // Move out to the right
            transition={{ duration: 0.5 }}       // Animation duration
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
