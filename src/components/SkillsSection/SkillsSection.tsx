import { ScrollFloatingText } from "./ScrollFloatingText/ScrollFloatingText"
import styles from "./SkillsSection.module.scss"

export const SkillsSection = () => {

    return (
        <div className={styles.container}>
            <ScrollFloatingText />
        </div>
    )
}
