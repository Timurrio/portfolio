import { ProjectCard } from "./ProjectCard/ProjectCard"
import styles from "./ProjectsSection.module.scss"
import { data } from "./data"

export const ProjectsSection = () => {
    return (
        <div className={styles.container}>
            {
                data.map((projectData, index) => (
                    <ProjectCard key={index} data={projectData} />
                ))
            }
        </div>
    )
}
