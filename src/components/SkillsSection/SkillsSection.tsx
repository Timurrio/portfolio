import { ScrollFloatingText } from "./ScrollFloatingText/ScrollFloatingText"
import styles from "./SkillsSection.module.scss"
import { motion } from "framer-motion"

const stackNames = ["HTML", "CSS (SCSS)", "Javascript (Typescript)", "React", "Redux", "Framer Motion (animation)"]
const infoVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}
const techVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0
    }
}

export const SkillsSection = () => {

    return (
        <div className={styles.container}>
            <motion.div className={styles.info} variants={infoVariants} transition={{ staggerChildren: 0.2, duration: 1 }} initial={"hidden"} whileInView={"visible"} viewport={{ once: true, amount: 1 }}>
                <h2 className={styles.header}>My Tech Stack 👨‍💻</h2>
                <motion.ul className={styles.stack}>
                    {
                        stackNames.map((str) => (
                            <motion.li variants={techVariants} transition={{ duration: 0.7, type: "spring", stiffness: 150, mass: 1.2 }}>
                                {str}
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </motion.div>
            <ScrollFloatingText />
        </div>
    )
}
