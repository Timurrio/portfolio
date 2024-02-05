import { ScrollColorText } from "../../ScrollColorText/ScrollColorText"
import styles from "./ScrollFloatingText.module.scss"
import { RefObject, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion"




export const ScrollFloatingText = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
    const currentY = useTransform(useSpring(scrollYProgress), [0, 1], ['0vh', '-100vh'])
    const rotation1 = useTransform(useSpring(scrollYProgress), [0, 1], ['-13deg', '13deg'])
    const rotation2 = useTransform(useSpring(scrollYProgress), [0, 1], ['13deg', '-6deg'])
    const rotation3 = useTransform(useSpring(scrollYProgress), [0, 1], ['10deg', '-7deg'])
    const rotation4 = useTransform(useSpring(scrollYProgress), [0, 1], ['-8deg', '10deg'])


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })


    return (
        <motion.div className={styles.container} ref={containerRef} >
            <motion.div className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation1 }}>
                <ScrollColorText text="TYPESCRIPT" target={containerRef} scrollOffset={["end start", "start end"]} />
            </motion.div>
            <motion.div className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation2 }}>
                <ScrollColorText colors={["#CF649B", "#CF649B"]} text="SCSS" target={containerRef} scrollOffset={["end start", "start end"]} />
            </motion.div>
            <motion.div className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation3 }}>
                <ScrollColorText colors={["#E44D25", "#E44D25"]} text="HTML" target={containerRef} scrollOffset={["end start", "start end"]} />
            </motion.div>
            <motion.div className={styles["text-wrapper"]} style={{ y: currentY, rotate: rotation4 }}>
                <ScrollColorText colors={["#61DBFB", "#61DBFB"]} text="REACT" target={containerRef} scrollOffset={["end start", "start end"]} />
            </motion.div>

        </motion.div>
    )
}
