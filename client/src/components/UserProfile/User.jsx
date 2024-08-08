import PropTypes from "prop-types";
import { useState } from "react";
import { Image } from "../UI/Image";
import { AnchorLink } from "../UI/AnchorLink";
import { UserInfo } from "./UserInfo";

export const User = ({ email, gravatar, contactNumber }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

  const onChangeToggleUserInfoModalHandler = (updateState) => {
    setIsUserInfoModalOpen(updateState);
  };

  return (
    <section className="flex items-center justify-end gap-3 md:gap-6">
      <section>
        <p>{email}</p>
      </section>

      <section className="w-20 h-20 rounded-full overflow-hidden">
        <AnchorLink className="relative" onClick={() => onChangeToggleUserInfoModalHandler(true)}>
          <Image src={gravatar} alt="User's Image" className="object-cover object-center h-20" />
        </AnchorLink>
      </section>

      {isUserInfoModalOpen && <section className={`${isUserInfoModalOpen ? "bg-gray-300 border border-gray-200 rounded-lg absolute top-[19rem] right-0 w-full md:max-w-lg xl:right-[25%] dark:bg-black dark:border-white z-50 " : "hidden"}`}><section className="relative p-4"><UserInfo email={email} contactNumber={contactNumber} onClickHandler={() => onChangeToggleUserInfoModalHandler(false)} /></section></section>}
    </section>
  );
};

User.propTypes = {
  email: PropTypes.string,
  gravatar: PropTypes.string,
  contactNumber: PropTypes.string,
};
