import ArticleItem from "./ArticleItem";
import styles from "../styles/Articles.module.css";

export default function ArticleList({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
}
