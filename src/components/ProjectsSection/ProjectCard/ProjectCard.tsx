import { AnimatePresence } from "framer-motion"
import { projectData } from "../../../types/projectData"
import styles from "./ProjectCard.module.scss"
import { useState } from "react"
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { IoMdCloseCircle } from "react-icons/io";

interface ProjectCardProps {
    data: projectData
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container} onClick={() => setIsOpen(prev => !prev)}>
            <img src={data.previewImage} alt={data.header} className={styles["preview-image"]} />
            <h1 className={styles["preview-header"]}>{data.header}</h1>
            <AnimatePresence>
                {
                    isOpen &&
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles["modal-slideshow"]}>
                            <img src={data.images[0]} />
                        </div>
                        <div className={styles["modal-description"]}>
                            <div className={styles["description-bar"]}>
                                <h1 className={styles["bar-header"]}>{data.header}</h1>
                                <div className={styles["bar-links"]}>
                                    <a href={data.link} target="_blank" rel="noreferrer">
                                        <button className={styles["bar-button"]}>
                                            <LiaExternalLinkAltSolid />
                                        </button>
                                    </a>
                                    <button className={styles["bar-button"]} onClick={() => setIsOpen(prev => !prev)}>
                                        <IoMdCloseCircle />
                                    </button>
                                </div>
                            </div>
                            <div className={styles["description-info"]}>
                                {data.description}
                            </div>

                        </div>

                    </div>
                }
            </AnimatePresence>
        </div>
    )
}
