import { Button } from "../UI/Button";
import { useState } from "react";
import { RequestFormModal } from "../UI/RequestFormModal";

export const UserInfo = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <section className="flex flex-col justify-around items-center border border-gray-400 rounded-lg h-64 md:w-1/2 md:items-start md:pl-6">
      <section>
        <h3 className="uppercase">user info</h3>
      </section>

      <section>
        <p>History of Requests</p>
        <p>Bee Hives Found - 500</p>
        <p>Bee Hives Saved - 500</p>
      </section>

      <section>
        <Button className="font-normal text-white bg-red-500 hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Delete Account" />
      </section>

      <section className="flex gap-4">
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Send New Request" onClick={() => setShowModal(true)}/>
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Edit User Profile" />

        {showModal && (
          <RequestFormModal  showModal={showModal} setShowModal={setShowModal} />
        )}
      </section>
    </section>
  );
};
