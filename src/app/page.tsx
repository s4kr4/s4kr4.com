import SocialLinks from "@/components/SocialLinks";
import Profile from "@/components/Profile";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <SocialLinks />
      <Profile />
    </div>
  );
}
