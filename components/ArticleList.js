import styles from "../styles/Articles.module.css"

export default function ArticleList({ articles }) {
    return (
      <div className={styles.grid}>
        {articles.map((article) => (
          <h3 className={styles.card}>{article.title}</h3>
        ))}
      </div>
    );
}