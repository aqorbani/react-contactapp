import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        This app is used to manage contacts{" "}
        <a href="https://github.com/aqorbani/react-contactapp">(GitHup)</a>
      </p>
    </div>
  );
};

export default Header;
