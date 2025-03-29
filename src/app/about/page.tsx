import { Metadata } from "next";
import styles from "./page.module.css";
import PageTitle from "@/components/PageTitle";
import P from "@/components/parts/P";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={styles.container}>
      <PageTitle>About</PageTitle>
      <div className={styles.content}>
        <P>
          滋賀県出身のエンジニアです。大学生のサークル活動でゲームを制作したことをきっかけにIT業界へ興味を持ち、エンジニアとして就職しました。フルスタックなWeb開発、React
          Nativeを活用したモバイルアプリ開発等に従事しています。
        </P>
        <P>
          サービス開発においてはUI/UXがどうなっているかを常に意識し、ユーザーの使いやすいものづくりを心がけています。
        </P>
        <P>
          また、開発環境の改善や生産性向上も意識しながら、日々の業務に取り組んでいます。
        </P>
      </div>
    </div>
  );
}
