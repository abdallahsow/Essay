import styles from "../styles/Articles.module.css";

export default function ArticleItem({ article }) {
  return <h3 className={styles.card}>{article.title}</h3>;
}
