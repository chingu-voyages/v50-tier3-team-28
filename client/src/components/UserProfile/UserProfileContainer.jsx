import PropTypes from "prop-types";
import { useEffect } from "react";
import { User } from "./User";
import { UserRequest } from "./UserRequest";

export const UserProfileContainer = ({ data }) => {
  const {
    name,
    email,
    userId,
    emailVerified,
    gravatar,
  } = data || {};
  // IMP: set default value, since userName and contactNumber are null/undefined
  const { metadata: { userName } = {} } = data;
  const { metadata: { contactNumber } = {} } = data;

  useEffect(() => {
  }, [data]);

  return (
    <section className="flex flex-col gap-4 m-4 md:m-0 md:my-4">
      <section className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <h3 className="font-semibold text-xl">Dashboard</h3>
        <User email={email} gravatar={gravatar} contactNumber={contactNumber} />
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
