import { ProjectCard } from "./ProjectCard/ProjectCard"
import styles from "./ProjectsSection.module.scss"
import { data } from "./data"
import { motion } from "framer-motion"

export const ProjectsSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>PROJECTS</h1>
            <div className={styles["card-list"]}>
                {
                    data.map((projectData, index) => (
                        <motion.div
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.7 }}
                            transition={{ duration: 0.6, type: "just" }}
                            viewport={{ once: true, amount: 0.5 }}
                            className={styles["card-wrapper"]}
                        >
                            <ProjectCard key={index} data={projectData} />
                        </motion.div>
                    ))
                }
            </div>

        </div>
    )
}
