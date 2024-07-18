import jsLogo from "../../assets/images/footer/js_logo.png";
import reactLogo from "../../assets/images/footer/react_logo.png";
import nodeLogo from "../../assets/images/footer/node_js_logo.png";
import mongoDBLogo from "../../assets/images/footer/mongo_db_logo.png";
import tailwindLogo from "../../assets/images/footer/tailwindcss_logo.png";
import { profiles } from "./footerUserData";

function FooterProfiles() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0 md:space-x-10 text-footerBoxColor pt-8">
      <div className="box1 px-8 w-full md:w-1/3 border border-footerBoxColor rounded-3xl pt-8 pb-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="profile-info flex justify-between items-center mb-4"
          >
            <div className="firstNameContainer">
              <h2 className="text-2xl text-footerProfileNameColor">
                {profile.name}
              </h2>
              <p className="text-sm text-footerBoxColor">{profile.role}</p>
            </div>
            <div className="icon-containers flex items-center">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <i className="fab fa-linkedin text-4xl mr-4 h-8 group-hover:text-[#0072B1]"></i>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-4xl mr-2 h-8"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="box2 px-4 md:px-8 w-full md:w-1/3 border border-footerBoxColor flex flex-col items-center rounded-3xl">
        <h2 className="text-xl font-bold my-4 text-footerProfileNameColor">
          Tech Stack
        </h2>
        <div className="flex justify-between items-center w-full px-4">
          <img
            src={jsLogo}
            alt="JavaScript"
            className="w-24 md:w-32 h-24 md:h-32 object-contain mr-2 md:mr-4 rounded-full"
          />
          <img
            src={reactLogo}
            alt="React"
            className="w-24 md:w-32 h-24 md:h-32 object-contain ml-2 md:ml-4"
          />
        </div>
        <div className="flex justify-between items-center w-full px-4 mt-4 md:mt-10">
          <img
            src={nodeLogo}
            alt="Node.js"
            className="w-24 md:w-32 h-24 md:h-32 object-contain mr-2 md:mr-4"
          />
          <img
            src={mongoDBLogo}
            alt="MongoDB"
            className="w-24 md:w-32 h-24 md:h-32 object-contain ml-2 md:ml-4"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-10 md:mt-20">
          <img
            src={tailwindLogo}
            alt="Tailwind CSS"
            className="w-40 md:w-80 h-10 object-contain mt-2 mb-6"
          />
        </div>
      </div>

      <div className="box3 px-8 w-full md:w-1/3 border border-footerBoxColor flex flex-col items-center rounded-3xl">
        <h2 className="text-xl font-bold my-4 text-footerProfileNameColor text-center">
          Resources
        </h2>
        <ul className="list-none w-full pl-8 mt-20">
          <li>
            <a
              href="https://www.beegirl.org/"
              className="underline mb-2 block text-footerBoxColor"
            >
              Bee Regenerative
            </a>
          </li>
          <li>
            <a
              href="https://savethebeesusa.org/"
              className="underline mb-2 block text-footerBoxColor"
            >
              Save The Bees USA
            </a>
          </li>
          <li>
            <a
              href="https://thebeeconservancy.org/"
              className="underline mb-2 block text-footerBoxColor"
            >
              The Bees Conservancy
            </a>
          </li>
          <li>
            <a
              href="https://savethebees.com/"
              className="underline mb-2 block text-footerBoxColor"
            >
              Save The Bees
            </a>
          </li>
          <li>
            <a
              href="https://www.newyorkbeesanctuary.org/"
              className="underline mb-2 block text-footerBoxColor"
            >
              New York Bee Sanctuary
            </a>
          </li>
          <li>
            <a
              href="https://www.pollinator.org/about"
              className="underline mb-2 block text-footerBoxColor"
            >
              Pollinator Partnership
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterProfiles;
