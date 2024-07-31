import { User } from "./User";
import { UserRequest } from "./UserRequest";
import { UserInfo } from "./UserInfo";
import userImage1 from "../../assets/images/userProfile/userImages/userImage1.jpg";

export const UserProfileContainer = () => {
  return (
    <section className="flex flex-col gap-4 m-4 md:m-0 md:my-4">
      <User userEmail="test@test.com" userImage={userImage1} />

      <section className="flex flex-col gap-4 md:flex-row">
        <UserRequest />
        <UserInfo />
      </section>
    </section>
  );
};
