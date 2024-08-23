import { ScrollColorText } from "../../ScrollColorText/ScrollColorText"
import styles from "./ScrollFloatingText.module.scss"
import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"




export const ScrollFloatingText = () => {
    const textRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: textRef, offset: ["start end", "end start"] })
    const currentY = useTransform(useSpring(scrollYProgress), [0, 1], ['0vh', '-100vh'])
    const rotation1 = useTransform(scrollYProgress, [0, 1], ['-13deg', '13deg'])
    const rotation2 = useTransform(scrollYProgress, [0, 1], ['8deg', '-18deg'])
    const rotation3 = useTransform(scrollYProgress, [0, 1], ['15deg', '-13deg'])
    const rotation4 = useTransform(scrollYProgress, [0, 1], ['-8deg', '18deg'])


    return (
        <motion.div className={styles.container} >

            <motion.div className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation2, left: "20%" }}>
                <ScrollColorText colors={["#CF649B", "#CF649B"]} text="SCSS" target={textRef} scrollOffset={["start end", "start 20%"]} />
            </motion.div>
            <motion.div ref={textRef} className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation1, bottom: "17%" }}>
                <ScrollColorText text="TYPESCRIPT" target={textRef} scrollOffset={["start end", "start 20%"]} />
            </motion.div>
            <motion.div className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation3, right: "5%", top: "5%" }}>
                <ScrollColorText colors={["#E44D25", "#E44D25"]} text="HTML" target={textRef} scrollOffset={["start end", "start 20%"]} />
            </motion.div>
            <motion.div className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation4, bottom: "10%", right: "20%" }}>
                <ScrollColorText colors={["#61DBFB", "#61DBFB"]} text="REACT" target={textRef} scrollOffset={["start end", "start 20%"]} />
            </motion.div>

        </motion.div>
    )
}
