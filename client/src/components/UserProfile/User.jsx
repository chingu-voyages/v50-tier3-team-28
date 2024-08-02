import PropTypes from "prop-types";
import { useState } from "react";
import { Image } from "../UI/Image";
import { AnchorLink } from "../UI/AnchorLink";
import { UserInfo } from "./UserInfo";

export const User = ({ userEmail, userImage }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

  const onChangeToggleUserInfoModalHandler = (updateState) => {
    setIsUserInfoModalOpen(updateState);
  };

  return (
    <section className="flex items-center justify-end gap-3 md:gap-6">
      <section>
        <p>{userEmail}</p>
      </section>

      <section className="w-20 h-20 rounded-full overflow-hidden">
        <AnchorLink className="relative" onClick={() => onChangeToggleUserInfoModalHandler(true)}>
          <Image src={userImage} alt="User's Image" className="object-cover object-center h-20" />
        </AnchorLink>
      </section>

      {isUserInfoModalOpen && <section className={`${isUserInfoModalOpen ? "bg-gray-300 border-gray-200 rounded-lg fixed top-[18rem] right-0 w-full md:top-[19rem] md:right-[5vw] xl:right-[25vw] md:w-2/4 xl:w-1/4" : "hidden"}`}><section className="relative p-4"><UserInfo onClickHandler={() => onChangeToggleUserInfoModalHandler(false)} /></section></section>}
    </section>
  );
};

User.propTypes = {
  userEmail: PropTypes.string,
  userImage: PropTypes.string,
};
