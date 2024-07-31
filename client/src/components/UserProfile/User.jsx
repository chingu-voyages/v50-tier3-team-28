import PropTypes from "prop-types";
import { Image } from "../UI/Image";

export const User = ({ userEmail, userImage }) => {
  return (
    <section className="flex items-center justify-end gap-3">
      <section>
        <p>{userEmail}</p>
      </section>

      <section className="w-20 h-20 relative border-4 border-red-400 rounded-full overflow-hidden">
        <Image src={userImage} alt="User's Image" className="object-cover object-center h-20" />
      </section>
    </section>
  );
};

User.propTypes = {
  userEmail: PropTypes.string,
  userImage: PropTypes.string,
};
