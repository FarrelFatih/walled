import { useEffect } from "react";
import { useNavigate } from "react-router";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("login");
    navigate("/");
  }, [navigate]);

  return null;
};

export default SignOut;
