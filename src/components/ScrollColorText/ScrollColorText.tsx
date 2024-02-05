import { RefObject } from "react"
import styles from "./ScrollColorText.module.scss"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface ScrollColorTextProps {
    target: RefObject<HTMLElement>,
    text: string,
    colors?: string[],
    scrollOffset?: string[]
}

export const ScrollColorText = ({ target, text, colors = ["#2657eb", "#2657eb"], scrollOffset = ["start start", "start end"] }: ScrollColorTextProps) => {
    // @ts-ignore
    const { scrollYProgress } = useScroll({ target: target, offset: scrollOffset, layoutEffect: false })
    const textFillProgress = useTransform(useSpring(scrollYProgress), [0, 1], ["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"])
    const colorsTransform = useTransform(scrollYProgress, [0, 1], [colors[1], colors[0]])
    return (
        <div className={styles.container}>
            {
                text.split("").map((letter) => (
                    <span className={styles.span}>
                        <span aria-hidden className={styles["span-bottom"]}>{letter}</span>
                        <motion.span
                            aria-hidden
                            style={{ clipPath: textFillProgress, color: colorsTransform }}
                            className={styles["span-top"]}>

                            {letter}
                        </motion.span>
                        {letter}
                    </span>
                ))
            }
        </div>
    )
}
