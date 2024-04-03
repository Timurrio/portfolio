import { AnimatePresence, color } from "framer-motion"
import { projectData } from "../../../types/projectData"
import styles from "./ProjectCard.module.scss"
import { useState } from "react"
import { motion } from "framer-motion"
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { IoMdCloseCircle } from "react-icons/io";
import ProjectCardCarousel from "./ProjectCardCarousel/ProjectCardCarousel"

interface ProjectCardProps {
    data: projectData
}

// const cardVariants = {
//     hover: {
//     },
//     initial: {
//     },
// }

// const headerVariants = {
//     hover: {
//         color: "#2657eb",
//         width: "120%"
//     },
//     initial: {
//         color: "white",
//         width: "50%"
//     }
// }

// const imageVariants = {
//     hover: {
//         scale: 1.25
//     },
//     initial: {
//         scale: 1
//     }
// }

export const ProjectCard = ({ data }: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHover, setIsHover] = useState(false)

    return (
        <motion.div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={styles.container}
            onClick={() => setIsOpen(prev => !prev)}>
            <motion.img style={(isOpen || isHover) ? { scale: 1.1, transition: "all 0.4s" } : { transition: "all 0.4s" }} transition={{ duration: 0.3 }} src={data.previewImage} alt={data.header} className={styles["preview-image"]} />
            <motion.h1 style={(isOpen || isHover) ? { color: "#2657eb", width: "110%", transition: "all 0.4s" } : { width: "75%", transition: "all 0.4s" }} transition={{ duration: 0.2 }} className={styles["preview-header"]}>{data.header}</motion.h1>
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                        transition={{ duration: 0.15 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.25 } }}
                        initial={{ opacity: 0 }}
                        className={styles.modal}
                        onClick={(e) => { e.stopPropagation(); setIsOpen(prev => !prev); setIsHover(false) }}>
                        <motion.div onClick={(e) => e.stopPropagation()} transition={{ delay: 0.075, duration: 0.5, type: "spring", stiffness: 75, damping: 16 }} animate={{ x: 0 }} exit={{ x: "-120%" }} initial={{ x: "-120%" }} className={styles["modal-slideshow"]}>
                            <div className={styles["carousel-wrapper"]}>
                                <ProjectCardCarousel slides={data.images} />
                            </div>
                        </motion.div>
                        <motion.div onClick={(e) => e.stopPropagation()} transition={{ delay: 0.075, duration: 0.5, type: "spring", stiffness: 75, damping: 16 }} animate={{ x: 0 }} exit={{ x: "120%" }} initial={{ x: "120%" }} className={styles["modal-description"]}>
                            <div className={styles["description-bar"]}>
                                <h1 className={styles["bar-header"]}>{data.header}</h1>
                                <div className={styles["bar-links"]}>
                                    <a href={data.link} target="_blank" rel="noreferrer">
                                        <motion.button whileHover={{ scale: 1.1, borderRadius: "50%" }} transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 11 }} className={styles["bar-button"]}>
                                            <LiaExternalLinkAltSolid />
                                        </motion.button>
                                    </a>
                                    <motion.button whileHover={{ scale: 1.1, borderRadius: "50%" }} transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 11 }} className={styles["bar-button"]} onClick={() => { setIsOpen(prev => !prev); setIsHover(false) }}>
                                        <IoMdCloseCircle />
                                    </motion.button>
                                </div>
                            </div>
                            <div className={styles["description-info"]}>
                                {data.description}
                            </div>

                        </motion.div>

                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}
