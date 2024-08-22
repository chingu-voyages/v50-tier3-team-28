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
    <section>
      {/* The following section tailwind class - margin-bottom is not changing properly, when dark mode applies on the app */}
      {/* <section className="bg-[#9BC25B] mb-[22rem] sm:mb-[24rem] md:mb-[6rem] lg:mb-[6rem] xl:mb-[1rem]"> */}
      <section className="bg-[#9BC25B]">
        <section className="max-w-7xl mx-auto max-h-screen">
          <Header action={action} onClickHandler={onClickHandler} />
          <MainHeroLanding />
          <MainHeroLandingSurvey />
        </section>
      </section>

      <main className="dark:bg-black dark:text-white">
        <section className="max-w-7xl mx-auto">
          <ProblemContainter />
          <SolutionsHeader />
        </section>
        <section className="flex justify-center p-2">
          <Map />
        </section>
        <section className="max-w-7xl mx-auto">
          <SolutionsContainer />
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default HomeLayout;
