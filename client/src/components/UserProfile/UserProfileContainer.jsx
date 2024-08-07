import PropTypes from "prop-types";
import { User } from "./User";
import { UserRequest } from "./UserRequest";

export const UserProfileContainer = ({ data }) => {
  return (
    <section className="flex flex-col gap-4 m-4 md:m-0 md:my-4">
      <section className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <h3 className="font-semibold text-xl">Dashboard</h3>
        <User data={data} />
      </section>

      <section className="flex flex-col gap-4 md:flex-row">
        <UserRequest />
      </section>
    </section>
  );
};

UserProfileContainer.propTypes = {
  data: PropTypes.object,
};
