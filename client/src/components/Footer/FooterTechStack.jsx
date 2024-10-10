import ModalResourceLink from "./ModalResourceLink";
import { useState } from "react";

function FooterTechStack({ techstack }) {
  const [modalIndex, setModalIndex] = useState(null);
  const handleClick = (e, url) => {
    e.preventDefault();
    setModalIndex(url);
  };
  return (
    <div className="box2 px-4 md:px-8 w-full lg:w-1/3 border border-footerBoxColor flex flex-col items-center rounded-3xl">
      <h2 className="text-xl font-bold my-4 text-footerProfileNameColor dark:text-white">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 gap-4 w-full">
        {techstack.map((tech, index) => (
          <div
            key={index}
            className={`flex justify-center items-center px-4 ${
              tech.name === "tailwindcss" ? "col-span-2" : ""
            }`}>
            <a
              href="#"
              className="group"
              onClick={e => handleClick(e, tech.url)}>
              <img
                src={tech.image}
                alt={tech.name}
                className={`object-contain ${
                  tech.name === "tailwindcss"
                    ? "w-96 mt-10"
                    : "w-24 xl:w-32 h-24 xl:h-32 mr-2 xl:mr-4 mt-1"
                }`}
              />
            </a>
          </div>
        ))}
      </div>

      {modalIndex && (
        <ModalResourceLink url={modalIndex} handleClick={setModalIndex} />
      )}
    </div>
  );
}

export default FooterTechStack;
