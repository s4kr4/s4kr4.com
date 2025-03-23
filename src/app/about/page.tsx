import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <p className={styles.text}>
          滋賀県出身のエンジニアです。大学生まではバリバリの文系でしたが、サークル活動としてゲームを制作したことをきっかけにIT業界へ興味を持ち、エンジニアとして就職しました。サーバーサイド・フロントエンドを問わず、Webアプリケーション等の制作プロジェクトに従事しています。
        </p>
      </div>
    </div>
  );
}
