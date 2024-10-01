import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/UI/Header";
import MainHeroLanding from "../components/UI/MainHeroLanding";
import { MainHeroLandingSurvey } from "../components/UI/MainHeroLandingSurvey";
import Footer from "../components/Footer/Footer";
import { ProblemContainter } from "../components/UI/ProblemContainer";
import { SolutionsHeader } from "../components/UI/SolutionsHeader";
import { SolutionsContainer } from "../components/UI/SolutionsContainer";
import { Map } from "../components/Map";

const HomeLayout = () => {
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
      <section className="bg-[#9BC25B]">
        <section className="bg-[#9BC25B] h-screen flex flex-col justify-between md:max-w-7xl md:mx-auto">
          <Header action={action} onClickHandler={onClickHandler} />
          {/* The following component (absolute/relative positions) is causing a design issue */}
          {/* TODO: Fix the positioning issue in the following component */}
          {/* <MainHeroLanding /> */}
          <MainHeroLandingSurvey />
        </section>
      </section>

      {/* TODO: Test and remove pt-[25vh], if it is not needed, before submitting the project */}
      <main className="flex flex-col justify-between pt-[25vh] md:pt-[2vh] dark:bg-black dark:text-white">
        <section className="md:max-w-7xl md:mx-auto">
          <ProblemContainter />
          <SolutionsHeader />
        </section>
        <section className="flex justify-center p-2">
          <Map />
        </section>
        <section className="md:max-w-7xl md:mx-auto">
          <SolutionsContainer />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomeLayout;
