import styles from "./IntroSection.module.scss"
import portrait from "../../assets/placeholderportrait.jpg"
import { motion } from "framer-motion"
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon"

const portraitHeaderVariants = {
    hidden: {
        scale: 0,
        x: 50,
        rotate: 10,
        opacity: 0
    },
    visible: {
        scale: 1,
        x: 0,
        rotate: -10,
        opacity: 1
    }
}

const portraitImageVariants = {
    hidden: {
        scale: 0.5,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}

const infoVariants = {
    hidden: {
        scale: 0.65,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}

const IntroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles["info-container"]}>
                <motion.div className={styles.info}
                    initial={infoVariants.hidden}
                    animate={infoVariants.visible}
                    transition={{ duration: 1.25, type: "spring" }}
                >
                    <h1 className={styles["info-header"]}>FRONTEND REACT DEVELOPER</h1>
                    <p className={styles["info-text"]}>Hi, I`m Tymur Myronenko, a frontend react developer based in Kryvyi Rih, Ukraine. Currently, a <a target="_blank" href="https://www.duet.edu.ua/en" rel="noreferrer" className={styles.link}>State University of Economics and Technology (SUET)</a> student, earning a Bachelors Degree in Computer Science  👨🏻‍💻</p>
                    <div className={styles["info-icons"]}>
                        <GithubIcon />
                        <LinkedinIcon />
                    </div>
                </motion.div>
            </div>
            <div className={styles["portrait-container"]}>
                <motion.img variants={portraitImageVariants}
                    initial={portraitImageVariants.hidden}
                    animate={portraitImageVariants.visible}
                    transition={{ type: "spring", duration: 1, stiffness: 110 }}
                    className={styles.portrait} src={portrait} alt="portrait" />
                <motion.div className={styles["portrait-header-container"]}
                    variants={portraitHeaderVariants}
                    initial={portraitHeaderVariants.hidden}
                    animate={portraitHeaderVariants.visible}
                    transition={{ type: "spring", duration: 1, delay: 0.3, stiffness: 100, mass: 1.1 }}
                >
                    <h1 className={styles["portrait-header"]}>Tymur Myronenko</h1>
                </motion.div>
            </div>
        </div>
    )
}

export default IntroSection