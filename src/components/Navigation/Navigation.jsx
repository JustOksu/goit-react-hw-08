import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link} activeClassName={styles.active}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={styles.link}
          activeClassName={styles.active}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
