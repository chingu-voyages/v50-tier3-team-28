import { Button } from "../UI/Button";
import { useState } from "react";
import { RequestFormModal } from "../UI/RequestFormModal";

export const UserRequest = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex flex-col justify-around items-center border border-gray-400 rounded-lg h-64 w-full md:items-start md:pl-6">
      <section>
        <h3 className="uppercase">all active requests</h3>
      </section>

      <section>
        <p>Sort by country</p>
        <p>Location</p>
        <p>Dropdown</p>
      </section>

      <section className="flex gap-4 md:gap-6 md:justify-around">
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Completed" />
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Submit New Request" onClick={() => setShowModal(true)}/>
      </section>
      {showModal && (
          <RequestFormModal  showModal={showModal} setShowModal={setShowModal} />
        )}

    </section>
  );
};
