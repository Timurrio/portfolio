import styles from "./icon.module.scss"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";


export const GithubIcon = () => {
    return (
        <a href="https://github.com/Timurrio" target="_blank" rel="noreferrer" >
            <motion.div className={styles["icon-wrapper"]}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <FaGithub className={styles.icon} />
            </motion.div>
        </a>
    )
}
