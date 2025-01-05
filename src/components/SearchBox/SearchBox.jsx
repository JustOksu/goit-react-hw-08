import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsSlice";
import { selectFilter } from "../../redux/contacts/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;
