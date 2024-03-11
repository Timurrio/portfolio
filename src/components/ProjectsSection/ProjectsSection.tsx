import { ProjectCard } from "./ProjectCard/ProjectCard"
import styles from "./ProjectsSection.module.scss"
import { data } from "./data"
import { motion } from "framer-motion"

export const ProjectsSection = () => {
    return (
        <div className={styles.container}>
            <motion.h1
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                className={styles.header}>
                PROJECTS 💻
            </motion.h1>
            <div className={styles["card-list"]}>
                {
                    data.map((projectData, index) => (
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className={styles["card-wrapper"]}
                            key={index}
                        >
                            <ProjectCard data={projectData} />
                        </motion.div>
                    ))
                }
            </div>

        </div>
    )
}
