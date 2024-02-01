import { useRef } from "react"
import { ScrollColorText } from "../ScrollColorText/ScrollColorText"
import styles from "./FooterSection.module.scss"
import { motion } from "framer-motion"

export const FooterSection = () => {
    const scrollContainerRef = useRef(null)

    return (
        <div className={styles.container}>
            <div ref={scrollContainerRef} className={styles["scroll-container"]}>

                <ScrollColorText colors={["#FFF5EE", "#DC143C"]} target={scrollContainerRef} text="TEXT" />

            </div>
        </div>
    )
}
