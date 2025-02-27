import { SignIn, SignUp } from "@clerk/clerk-react";
import Header from "./Header"; // Import your existing Header component

const AuthPage = ({ type }) => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen relative">
        {type === "sign-in" ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthPage;
