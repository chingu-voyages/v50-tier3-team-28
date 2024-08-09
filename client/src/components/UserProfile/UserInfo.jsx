import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../UI/Button";
// import { RequestFormModal } from "../UI/RequestFormModal";
import { Input } from "../UI/Input";

export const UserInfo = ({ email, contactNumber, onClickHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [updateUserContactNumber, setUpdateUserContactNumber] = useState(contactNumber ? contactNumber : '');
  const [isNumber, setIsNumber] = useState(true);

  // TODO: logic to delete user from database
  const onClickDeleteUserAccount = () => {
    if (confirm('Are you sure you want to delete your account from the database?')) {
      console.log('User would liket to delete the account from the database.');
    } else {
      console.log('User do not want to delete the account.');
    }
  };

  const onClickEditUserContactNumberHandler = () => {
    setShowModal(true);
    setIsEditable(!isEditable);

    if (isNaN(updateUserContactNumber)) {
      alert("Please enter a contact number.");
      setUpdateUserContactNumber("");
    }
    else {
      setIsNumber(!isNumber);
      setUpdateUserContactNumber(updateUserContactNumber);
    }
  };

  const onChangeUserContactNumberHandler = (e) => {
    setUpdateUserContactNumber(e.target.value);
  };

  return (
    <section className="flex flex-col justify-around items-start h-64 md:items-start md:pl-6">
      <section className="absolute top-[2rem] right-[2rem]">
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
        <p>Email: {email} </p>

        {(isNumber && !isEditable) ? <p>Contact number: {updateUserContactNumber}</p> : <Input
          className="border-2 border-blue-300 w-56"
          type="text"
          label="Contact number"
          placeholder="update contact number..."
          value={updateUserContactNumber}
          onChange={onChangeUserContactNumberHandler}
        />}
      </section>

      <section>
        <p>Bee Hives Found - 500</p>
        <p>Bee Hives Saved - 500</p>
      </section>

      <section className="flex self-center gap-4 md:gap-6 md:justify-around">
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Delete Account" onClickHandler={onClickDeleteUserAccount} />
        {/* <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Edit" onClick={() => setShowModal(true)} /> */}
        <Button className="font-normal text-white w-32 bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text={(isNumber && !isEditable) ? "Edit" : "Update"} onClickHandler={onClickEditUserContactNumberHandler} />
        {/* {showModal && (
          <RequestFormModal  showModal={showModal} setShowModal={setShowModal} />
        )} */}
      </section>
    </section>
  );
};

UserInfo.propTypes = {
  email: PropTypes.string,
  contactNumber: PropTypes.string,
  onClickHandler: PropTypes.func,
};
