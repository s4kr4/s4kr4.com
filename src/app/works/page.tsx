import Image from "next/image";
import styles from "./page.module.css";

export default function Works() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Works</h2>

      <div className={styles.content}>
        <h3 className={styles.projectTitle}>s4kr4.com</h3>

        <div className={styles.imageContainer}>
          <Image
            src="/images/s4kr4-com.png"
            alt="s4kr4.com screenshot"
            width={800}
            height={450}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
