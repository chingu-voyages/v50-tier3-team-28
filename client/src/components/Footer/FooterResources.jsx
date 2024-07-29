import ModalResourceLink from "./ModalResourceLink";
import { resourcesData } from "./footerResourcesData";
import { useState } from "react";

function FooterResources() {
  const [modalIndex, setModalIndex] = useState(null);
  const handleClick = (index) => {
    setModalIndex(index);
  };
  return (
    <div className="box3 px-8 w-full md:w-1/3 border border-footerBoxColor flex flex-col items-center rounded-3xl">
      <h2 className="text-xl font-bold my-4 text-footerProfileNameColor text-center">
        Resources
      </h2>
      <ul className="list-none w-full pl-8 mt-20">
        {resourcesData.map((resource, index) => (
          <li key={index}>
            <a
              className="underline mb-2 block text-footerBoxColor"
              onClick={() => handleClick(index)}
            >
              {resource.name}
            </a>
            {modalIndex === index && (
              <ModalResourceLink url={resource.url} handleClick={handleClick} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterResources;
