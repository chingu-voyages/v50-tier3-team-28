import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Image } from "../UI/Image";
import { AnchorLink } from "../UI/AnchorLink";
import { UserInfo } from "./UserInfo";

export const User = ({ data }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

  const onChangeToggleUserInfoModalHandler = (updateState) => {
    setIsUserInfoModalOpen(updateState);
  };

  let showUserEmail;
  let showUserGravatar;

  for (let o in data) {
    if ([o] == "email") {
      showUserEmail = (<Fragment>
        <p>{data[o]}</p>
      </Fragment>);
    }
    if ([o] == "gravatar") {
      showUserGravatar = (<section className="w-20 h-20 rounded-full overflow-hidden">
        <AnchorLink className="relative" onClick={() => onChangeToggleUserInfoModalHandler(true)}>
          <Image src={data[o]} alt="User's Image" className="object-cover object-center h-20" />
        </AnchorLink>
      </section>);
    }
  }

  return (
    <section className="flex items-center justify-end gap-3 md:gap-6">
      {showUserEmail}

      {showUserGravatar}

      {isUserInfoModalOpen && <section className={`${isUserInfoModalOpen ? "bg-gray-300 border border-gray-200 rounded-lg absolute top-[19rem] right-0 w-full md:max-w-lg xl:right-[25%] dark:bg-black dark:border-white" : "hidden"}`}><section className="relative p-4"><UserInfo data={data} onClickHandler={() => onChangeToggleUserInfoModalHandler(false)} /></section></section>}
    </section>
  );
};

User.propTypes = {
  data: PropTypes.object,
  userEmail: PropTypes.string,
  userImage: PropTypes.string,
};
