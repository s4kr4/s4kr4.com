import { Metadata } from "next";
import styles from "./page.module.css";
import PageTitle from "@/components/PageTitle";

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
            <td>Java, C#, Ruby, JavaScript, PHP, HTML, CSS, ShellScript</td>
          </tr>
          <tr>
            <td>フレームワーク</td>
            <td>
              Spring, CakePHP, Drupal, BEAR.Sunday, Ruby on Rails, React, React
              Native
            </td>
          </tr>
          <tr>
            <td>DB</td>
            <td>MySQL, PostgreSQL</td>
          </tr>
          <tr>
            <td>その他</td>
            <td>Git, SVN, Vagrant, Docker, Apache, Samba, AWS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
