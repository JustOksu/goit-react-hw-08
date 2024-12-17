import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { clearContacts } from "../../redux/contacts/slice";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearContacts());
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
