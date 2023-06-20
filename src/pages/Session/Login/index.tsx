import { SignIn } from "@clerk/clerk-react";
import "./styles.css";

export const Login = () => {
  return (
    <div className="signin_content">
      <SignIn />
    </div>
  );
};
