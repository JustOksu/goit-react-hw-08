import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter name"
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
