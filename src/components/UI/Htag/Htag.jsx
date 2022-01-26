import styles from "./Htag.module.scss";

export const Htag = ({ tag, children }) => {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h6":
      return <h6 className={styles.h6}>{children}</h6>;
    default:
      return <></>;
  }
};
