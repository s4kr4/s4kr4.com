import { Metadata } from "next";
import styles from "./page.module.css";
import PageTitle from "@/components/parts/PageTitle";

export const metadata: Metadata = {
  title: "Skills",
};

export default function Skills() {
  return (
    <div className={styles.container}>
      <PageTitle>Skills</PageTitle>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>OS</td>
            <td>Windows, macOS, Ubuntu</td>
          </tr>
          <tr>
            <td>言語</td>
            <td>JavaScript/TypeScript, HTML/CSS, Java, C#, Ruby, PHP, ShellScript</td>
          </tr>
          <tr>
            <td>フレームワーク</td>
            <td>
              React, React
              Native, Vue.js, CakePHP, Drupal, BEAR.Sunday, Ruby on Rails, Spring
            </td>
          </tr>
          <tr>
            <td>DB</td>
            <td>MySQL, PostgreSQL</td>
          </tr>
          <tr>
            <td>インフラ</td>
            <td>Google Cloud, AWS, Docker, Vagrant</td>
          </tr>
          <tr>
            <td>その他</td>
            <td>Git, SVN, Docker, Vagrant, Nginx, Apache</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
