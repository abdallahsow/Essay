import Link from "next/link";
import styles from "../styles/Articles.module.css";

export default function ArticleItem({ article }) {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}
