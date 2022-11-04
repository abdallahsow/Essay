import Head from "next/head";
import styles from "../styles/Articles.module.css"

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <main>
        {articles.map(article => <h3 className={styles.card}>{article.title}</h3>)}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=3`
  );
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
};
