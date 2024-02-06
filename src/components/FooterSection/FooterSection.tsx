import { useRef } from "react"
import { ScrollColorText } from "../ScrollColorText/ScrollColorText"
import styles from "./FooterSection.module.scss"
import { motion } from "framer-motion"
import { GithubIcon } from "../Icons/GithubIcon"
import { LinkedinIcon } from "../Icons/LinkedinIcon"

export const FooterSection = () => {
    const scrollContainerRef = useRef(null)

    return (
        <footer className={styles.container}>
            <div ref={scrollContainerRef} className={styles["scroll-container"]}>
                <div className={styles["footer-header"]}>
                    <ScrollColorText colors={["white", "white"]} target={scrollContainerRef} text="LET`S" scrollOffset={["start end", "end end"]} />
                    <ScrollColorText colors={["white", "white"]} target={scrollContainerRef} text="WORK" scrollOffset={["start end", "end end"]} />
                    <ScrollColorText colors={["#de6161", "#2657eb"]} target={scrollContainerRef} text="TOGETHER!" scrollOffset={["start end", "end end"]} />
                </div>

                <div className={styles["mail-button-wrapper"]}>
                    <a href="mailto:tymur.myronenko@gmail.com" className={styles["mail-button-link"]}>
                        <div className={styles["mail-button"]}>
                            tymur.myronenko@gmail.com
                        </div>
                    </a>
                </div>

                <div className={styles["copyright-section"]}>
                    <p className={styles["copyright-text"]}>© Myronenko Tymur. All rights are reserved 2024.</p>
                    <div className={styles["copyright-icons"]}>
                        <GithubIcon />
                        <LinkedinIcon />
                    </div>

                </div>

            </div>
        </footer>
    )
}
