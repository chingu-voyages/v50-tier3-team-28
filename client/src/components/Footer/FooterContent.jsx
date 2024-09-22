import { profiles } from "./footerUserData";
import FooterUserProfiles from "./FooterUserProfiles";
import FooterTechStack from "./FooterTechStack";
import FooterResources from "./FooterResources";

function FooterContent() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 text-footerBoxColor pt-2">
      <FooterUserProfiles profiles={profiles} />

      <FooterTechStack />

      <FooterResources />
    </div>
  );
}

export default FooterContent;
