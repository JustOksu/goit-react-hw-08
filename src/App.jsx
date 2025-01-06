import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCurrentUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import HomePage from "./pages/Home/HomePage";
import ContactsPage from "./pages/Contacts/ContactsPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Registration/RegistrationPage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user data...</p>;
  }

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </>
  );
};

export default App;
