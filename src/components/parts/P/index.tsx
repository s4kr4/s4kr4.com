import styles from "./P.module.css";

type PProps = {
  children: React.ReactNode;
};

export default function P(props: PProps) {
  return <p className={styles.paragraph}>{props.children}</p>;
}
