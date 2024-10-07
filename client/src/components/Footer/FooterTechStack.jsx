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

      {techstack.map((tech, index) => (
        <div key={index} className="flex justify-between items-center w-full px-4 object-contain">
          <a
            href="#"
            className="group"
            onClick={(e) => handleClick(e, tech.url)}>
            <img
              src={tech.image}
              alt={tech.name}
              className="w-24 xl:w-32 h-24 xl:h-32 object-contain mr-2 xl:mr-4"
            />
          </a>
        </div>
      ))}
      {modalIndex && (
        <ModalResourceLink url={modalIndex} handleClick={setModalIndex} />
      )}
    </div>
  );
}

export default FooterTechStack;
