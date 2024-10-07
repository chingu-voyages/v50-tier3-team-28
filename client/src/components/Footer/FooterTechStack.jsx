import ModalResourceLink from "./ModalResourceLink";
import jsLogo from "../../assets/images/footer/js_logo.png";
import reactLogo from "../../assets/images/footer/react_logo.png";
import nodeLogo from "../../assets/images/footer/node_js_logo.png";
import mongoDBLogo from "../../assets/images/footer/mongo_db_logo.png";
import tailwindLogo from "../../assets/images/footer/tailwindcss_logo.png";

function FooterTechStack() {
  const [modalIndex, setModalIndex] = useState(null);
  const handleClick = (index) => {
    setModalIndex(index);
  };
  return (
    <div className="box2 px-4 md:px-8 w-full lg:w-1/3 border border-footerBoxColor flex flex-col items-center rounded-3xl">
      <h2 className="text-xl font-bold my-4 text-footerProfileNameColor dark:text-white">
        Tech Stack
      </h2>
      <div className="flex justify-between items-center w-full px-4 object-contain">
        <a onClick={()=> handleClick(index)}>
          <img
            src={jsLogo}
            alt="JavaScript"
            className="w-24 xl:w-32 h-24 xl:h-32 object-contain mr-2 xl:mr-4"
          />
        </a>
        {modalIndex === index && (
              <ModalResourceLink url={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} handleClick={handleClick} />
            )}
        <img
          src={reactLogo}
          alt="React"
          className="w-24 xl:w-32 h-24 xl:h-32 object-contain ml-2 xl:ml-4"
        />
      </div>
      <div className="flex justify-between items-center w-full px-4 mt-4 xl:mt-10 object-contain">
        <img
          src={nodeLogo}
          alt="Node.js"
          className="w-24 xl:w-32 h-24 lg:h-32 object-contain mr-2 xl:mr-4"
        />
        <img
          src={mongoDBLogo}
          alt="MongoDB"
          className="w-24 xl:w-32 h-24 xl:h-32 object-contain ml-2 xl:ml-4"
        />
      </div>
      <div className="flex justify-center items-center w-full mt-10 xl:mt-20">
        <img
          src={tailwindLogo}
          alt="Tailwind CSS"
          className="w-40 xl:w-80 h-10 object-contain mt-2 mb-6"
        />
      </div>
    </div>
  );
}

export default FooterTechStack;
