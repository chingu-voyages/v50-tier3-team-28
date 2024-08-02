import { User } from "./User";
import { UserRequest } from "./UserRequest";
import userImage1 from "../../assets/images/userProfile/userImages/userImage1.jpg";

export const UserProfileContainer = () => {
  return (
    <section className="flex flex-col gap-4 m-4 md:m-0 md:my-4">
      <section className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <h3 className="font-semibold text-xl">Dashboard</h3>
        <User userEmail="test@test.com" userImage={userImage1} />
      </section>

      <section className="flex flex-col gap-4 md:flex-row">
        <UserRequest />
      </section>
    </section>
  );
};
