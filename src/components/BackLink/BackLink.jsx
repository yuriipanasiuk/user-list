import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import styles from "./BackLink.module.scss";

const BackLink = ({ link }) => {
  return (
    <Link to={link.current} className={styles.backLink}>
      <FaLongArrowAltLeft size={24} />
      <span className={styles.linkText}>Back to user list</span>
    </Link>
  );
};

export default BackLink;
