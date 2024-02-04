import styles from "./icon.module.scss"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";


export const LinkedinIcon = () => {
    return (
        <a href="https://www.linkedin.com/in/tymur-myronenko/" target="_blank" rel="noreferrer" >
            <motion.div className={styles["icon-wrapper"]}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <FaLinkedin className={styles.icon} />
            </motion.div>
        </a>
    )
}
