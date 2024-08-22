import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, auth }) => {
  const { isAuthenticated, isLoading } = auth;

  if (isLoading) return <section>Loading...</section>;
  if (isAuthenticated) return children;

  return (
    <Navigate to="/" />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.array,
  auth: PropTypes.object,
};
