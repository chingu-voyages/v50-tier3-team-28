import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { SolutionsContainer } from "./SolutionsContainer";
import { Header } from "./Header";
import Footer from "../Footer/Footer";

const Solutions = () => {
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);
  const { loginWithRedirect, logout } = useAuth0();
  // const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  // const [action, setAction] = useState("Sign Up");
  const [action, setAction] = useState("");

  const returnToUri = import.meta.env.VITE_AUTH0_RETURN_TO_URI;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const onClickHandler = () => {
    if (!isAuthenticated) {
      loginWithRedirect({});
    } else {
      // logout({ returnTo: window.location.origin });
      logout({ logoutParams: { returnTo: returnToUri } });
    }
  };

  useEffect(() => {
    setAction(isAuthenticated ? "Log Out" : "Sign In / Up");
  }, [isAuthenticated]);

  return (
    <>
      <section className="relative bg-[#9BC25B] h-[100%]">
        <section className=" bg-[#9BC25B] flex flex-col justify-between md:justify-evenly md:gap-4 md:max-w-7xl md:mx-auto">
          <Header action={action} onClickHandler={onClickHandler} />
        </section>
      </section>

      <main className="flex flex-col justify-between dark:bg-black dark:text-white">
        {/* temporary section placeholder for solutions */}
        <section className="md:max-w-7xl md:mx-auto">
          <SolutionsContainer />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Solutions;
