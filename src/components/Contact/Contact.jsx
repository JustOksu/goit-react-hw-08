import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
