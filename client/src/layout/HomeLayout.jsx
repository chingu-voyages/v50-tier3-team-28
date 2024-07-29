import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/UI/Header";
import Footer from "../components/Footer/Footer";
import { ProblemContainter } from "../components/UI/ProblemContainer";
import { SolutionsContainer } from "../components/UI/SolutionsContainer";
import { Map } from "../components/UI/Map";

const HomeLayout = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const onClickHandler = () => {
    if (!isAuthenticated) {
      loginWithRedirect({});
    } else {
      logout({ returnTo: window.location.origin });
    }
  };

  useEffect(() => {
    setAction(isAuthenticated ? "Log Out" : "Sign Up");
  }, [isAuthenticated]);

  return (
    <section>
      <section className="bg-[#9BC25B]">
        <section className="max-w-7xl mx-auto">
          <Header action={action} onClickHandler={onClickHandler} />
        </section>
      </section>

      <main className="dark:bg-black dark:text-white">
        <section className="max-w-7xl mx-auto">
          <ProblemContainter />
          <SolutionsContainer />
        </section>
        <section className="col-span-12 h-1/2 bg-gray-200">
          <Map />
        </section>
      </main >

      <Footer />
    </section >
  );
};

export default HomeLayout;
