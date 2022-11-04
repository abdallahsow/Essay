import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = function () {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/aboutUs">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
