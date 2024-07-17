import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/UI/Header";
import { Button } from "../components/UI/Button";

import Footer from "../components/Footer/Footer";
import Graph from "../components/Graph";
import AnimatedNumber from "./AnimatedNumber";

const HomeLayout = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  const [statHighlights] = useState({
    countries: 12,
    hivesSaved: 16000,
    volunteers: 300,
  });

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
    <section className="grid grid-cols-12 grid-rows-auto h-screen">
      <Header action={action} onClickHandler={onClickHandler} />

      <main className="flex flex-col justify-around col-span-12 row-span-6 ">
        <section className="bg-[#9BC25B] grid grid-cols-3 gap-1 md:grid-cols-6 font-body space-x-4 md:space-y-20">
          <img
            src="./src/assets/imgs/bee.png"
            alt=""
            className="w-[190px] h-[185px] border-2 border-[#D9D9D9] rounded-full"
          />
          <h2 className="my-auto">
            Its Time to Save The Bees To Save Our Future Generations
          </h2>
          <Button
            className="w-[134px] h-[54px] font-normal text-white bg-[#F4743B] rounded-lg my-auto"
            type="button"
            text="Learn More"
          />
          <div className="my-10">
            <div className="flex flex-row">
              <span className="font-bold">
                <AnimatedNumber className="" n={statHighlights.countries} />
              </span>
              <div className="font-bold">+</div>
            </div>
            <p>Countries</p>
          </div>
          <div className="my-10">
            <div className="flex flex-row">
              <span className="font-bold">
                <AnimatedNumber className="" n={statHighlights.hivesSaved} />
              </span>
              <div className="font-bold">+</div>
            </div>
            <p>Beehives Saved</p>
          </div>
          <div className="my-10">
            <div className="flex flex-row">
              <span className="font-bold">
                <AnimatedNumber className="" n={statHighlights.volunteers} />
              </span>
              <div className="font-bold">+</div>
            </div>
            <p>Volunteers</p>
          </div>
        </section>
        <section className="col-span-12 h-1/2 ">
          <Graph />
        </section>
        <section className="col-span-12 h-1/2 bg-gray-200">
          <h2>Map</h2>
        </section>
        <section className="col-span-12 h-1/2">
          <h2>Solutions</h2>
        </section>
      </main>

      <Footer />
    </section>
  );
};
export default HomeLayout;
