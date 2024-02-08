import { projectData } from "../../../types/projectData"
import styles from "./ProjectCard.module.scss"

interface ProjectCardProps {
    data: projectData
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
    return (
        <div>
            <h1>{data.header}</h1>
        </div>
    )
}
