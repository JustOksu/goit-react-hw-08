import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/slice";
import { selectFilter } from "../../redux/contacts/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Filter Contacts:</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Filter;
