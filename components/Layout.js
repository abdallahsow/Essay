import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
