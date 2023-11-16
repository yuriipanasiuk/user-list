import styles from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={styles.wraper}> {children}</div>;
};

export default Container;
