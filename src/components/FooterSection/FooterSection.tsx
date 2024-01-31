import styles from "./FooterSection.module.scss"
import { motion } from "framer-motion"

export const FooterSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.span}>
                    <motion.span transition={{ duration: 1 }} initial={{ clipPath: "inset(100% 0% 0% 0%)" }} animate={{ clipPath: "inset(0% 0% 0% 0%)" }} className={styles["span-top"]}>T</motion.span>
                    {/* <span className={styles["span-bottom"]}>T</span> */}
                    <span className={styles["span-bottom"]}>T</span>
                </span>
                <span className={styles.span}>
                    <span className={styles["span-bottom"]}>E</span>
                    <span className={styles["span-top"]}>E</span>
                </span>
                <span className={styles.span}>
                    <span className={styles["span-bottom"]}>X</span>
                    <span className={styles["span-top"]}>X</span>
                </span>
                <span className={styles.span}>
                    <span className={styles["span-bottom"]}>T</span>
                    <span className={styles["span-top"]}>T</span>
                </span>
            </div>
        </div>
    )
}
