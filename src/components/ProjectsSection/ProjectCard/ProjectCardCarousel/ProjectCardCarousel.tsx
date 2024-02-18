import styles from "./ProjectCardCarousel.module.scss"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion } from "framer-motion"
import { useState } from "react";

interface ProjectCardCarouselProps {
  slides: string[],
}

export default function ProjectCardCarousel({ slides }: ProjectCardCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  const prev = () => setActiveSlide((i) => i === 0 ? slides.length - 1 : i - 1)
  const next = () => setActiveSlide((i) => i === slides.length - 1 ? 0 : i + 1)

  return (
    <div className={styles.container}>
      <motion.div style={{ x: `-${activeSlide * 100}%` }} className={styles.slideshow}>
        {
          slides.map((slide, i) => (
            <img className={styles.slide} src={slide} key={i} alt="slide" />
          ))
        }
      </motion.div>

      <div className={styles["slideshow-buttons"]}>
        <motion.button whileHover={{ backgroundColor: "#2657eb", scale: 1.25 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", duration: 0.4 }} className={styles.button} onClick={() => prev()}>
          <FaChevronCircleLeft size={50} />
        </motion.button>
        <motion.button whileHover={{ backgroundColor: "#2657eb", scale: 1.25 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", duration: 0.4 }} className={styles.button} onClick={() => next()}>
          <FaChevronCircleRight size={50} />
        </motion.button>
      </div>

      <div className={styles["dot-wrapper"]}>
        <div className={styles["dot-container"]}>
          {
            slides.map((_, i) => (
              <div className={`${styles.dot} ${i === activeSlide && styles["dot-active"]}`} onClick={() => setActiveSlide(i)} />
            ))
          }
        </div>
      </div>

    </div>
  )
}
