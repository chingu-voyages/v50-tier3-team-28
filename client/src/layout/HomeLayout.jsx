import { useState } from "react";
import { Header } from "../components/UI/Header";
import { Footer } from "../components/UI/Footer";
import Graph from "../components/Graph";
import AnimatedNumber from "./AnimatedNumber";

export const HomeLayout = () => {
  const [action, setAction] = useState("Sign Up");
  const [statHighlights, setStatHighlights] = useState({
    countries: 12,
    hivesSaved: 16000,
    volunteers: 300,
  });

  const onClickHandler = () => {
    console.log(action);
    setAction("Login");
  };

  return (
    <section className="grid grid-cols-12 grid-rows-auto gap-2 h-screen">
      <Header action={action} onClickHandler={onClickHandler} />

      <main className="flex flex-col justify-between col-span-12 row-span-6 ">
        <section className="bg-[#9BC25B] col-span-12 h-1/2">
          <h2>Map</h2>
          <div className="flex justify-between w-[499px] h-[68px] font-body">
            <div>
              <span className="font-bold">
                <AnimatedNumber n={statHighlights.countries} />
              </span>
              Countries
            </div>
            <div>
              <span className="font-bold">
                <AnimatedNumber n={statHighlights.hivesSaved} />
              </span>
              Beehives Saved
            </div>
            <div>
              <span className="font-bold">
                <AnimatedNumber n={statHighlights.volunteers} />
              </span>
              Volunteers
            </div>
          </div>
        </section>
        <section className="col-span-12 h-1/2 ">
          <Graph />
        </section>
        <section className="col-span-12 h-1/2">
          <h2>Solutions</h2>
        </section>
      </main>

      <Footer />
    </section>
  );
};
