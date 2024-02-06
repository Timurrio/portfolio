import { ScrollColorText } from "../../ScrollColorText/ScrollColorText"
import styles from "./ScrollFloatingText.module.scss"
import { RefObject, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion"




export const ScrollFloatingText = () => {
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end end"] })
    const currentY = useTransform(useSpring(scrollYProgress), [0, 1], ['0vh', '-100vh'])
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.4, 1, 1])
    const rotation1 = useTransform(useSpring(scrollYProgress), [0, 1], ['-13deg', '13deg'])
    const rotation2 = useTransform(useSpring(scrollYProgress), [0, 1], ['13deg', '-6deg'])
    const rotation3 = useTransform(useSpring(scrollYProgress), [0, 1], ['10deg', '-7deg'])
    const rotation4 = useTransform(useSpring(scrollYProgress), [0, 1], ['-8deg', '10deg'])


    return (
        <motion.div className={styles.container} ref={containerRef} >

            <motion.div className={styles["text-wrapper"]} style={{ opacity, y: currentY, rotate: rotation2, left: "8%" }}>
                <ScrollColorText colors={["#CF649B", "#CF649B"]} text="SCSS" target={textRef} scrollOffset={["start end", "start start"]} />
            </motion.div>
            <motion.div ref={textRef} className={styles["text-wrapper"]} style={{ opacity, y: currentY, rotate: rotation1, bottom: "17%" }}>
                <ScrollColorText text="TYPESCRIPT" target={textRef} scrollOffset={["start end", "start start"]} />
            </motion.div>
            <motion.div className={styles["text-wrapper"]} style={{ opacity, y: currentY, rotate: rotation3, right: "5%", top: "5%" }}>
                <ScrollColorText colors={["#E44D25", "#E44D25"]} text="HTML" target={textRef} scrollOffset={["start end", "start start"]} />
            </motion.div>
            <motion.div className={styles["text-wrapper"]} style={{ opacity, y: currentY, rotate: rotation4, bottom: "10%", right: "8%" }}>
                <ScrollColorText colors={["#61DBFB", "#61DBFB"]} text="REACT" target={textRef} scrollOffset={["start end", "start start"]} />
            </motion.div>

        </motion.div>
    )
}
