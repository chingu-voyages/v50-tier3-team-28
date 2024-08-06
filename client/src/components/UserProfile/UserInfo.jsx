import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

export const UserInfo = ({ data, onClickHandler }) => {
  const [isEditable, setIsEditable] = useState(false);
  // const [updateUserContactNumber, setUpdateUserContactNumber] = useState('');

  const userEmail = [];
  const userContactNumber = [];

  for (let o in data) {
    if ([o] == "email") {
      userEmail.push(data[o]);
    }
    if ([o] == "contactNumber") {
      userContactNumber.push(data[o]);
    }
  }

  const onClickEditUserEmailHandler = () => {
    setIsEditable(!isEditable);
  };

  return (
    <section className="flex flex-col justify-around items-start h-64 md:items-start md:pl-6">
      <section className="fixed top-[20rem] right-[2rem] md:top-[20rem] md:right-[8vw] xl:right-[26vw]">
        <Button onClickHandler={onClickHandler}>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </Button>
      </section>

      <section className="self-center">
        <h3 className="uppercase">user info</h3>
      </section>

      <section>
        <p>Email: {userEmail} </p>

        {!isEditable && <p>Contact number: {userContactNumber}</p>}
        {isEditable && <Input
          className="border-2 border-blue-300 w-56"
          type="text"
          label="Contact number"
          placeholder="update contact number..."
        />}
      </section>

      <section>
        <p>Bee Hives Found - 500</p>
        <p>Bee Hives Saved - 500</p>
      </section>

      <section className="flex self-center gap-4 md:gap-6 md:justify-around">
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Delete Account" />

        <Button className="font-normal text-white w-32 bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text={!isEditable ? "Edit" : "Update"} onClickHandler={onClickEditUserEmailHandler} />
      </section>
    </section>
  );
};

UserInfo.propTypes = {
  data: PropTypes.object,
  onClickHandler: PropTypes.func,
};
