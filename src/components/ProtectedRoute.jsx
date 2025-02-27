import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();

  // If the user is not signed in, redirect them to the sign-in page
  if (!isSignedIn) {
    return <Navigate to="/signin" />;
  }

  // If the user is signed in, render the child components
  return children;
};

export default ProtectedRoute;
