import { Button } from "../UI/Button";
import { useState } from "react";
import { RequestFormModal } from "../UI/RequestFormModal";
import { Input } from "../UI/Input";
import { RequestComponent } from "./RequestTable";
export const UserRequest = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex flex-col justify-around items-center border border-gray-400 rounded-lg w-full md:items-start md:p-10">
      <section className="flex justify-between items-center mb-4 w-full flex-col gap-4 md:flex-row md:justify-between">
        <h3 className="font-semibold text-xl dark:text-white">Requests</h3>
        <Input type="text" placeholder="Search" className="w-64 bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 dark:text-black" type="button" text="Send New Request" onClick={() => setShowModal(true)}/>
      </section>

      {/* <section>
        <p>Sort by country</p>
        <p>Location</p>
        <p>Dropdown</p>
      </section> */}

<RequestComponent fixedHeader
  fixedHeaderScrollHeight="300px"
/>
      
      <section className="flex gap-4 md:gap-6 md:justify-around">
        {/* <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 dark:text-black" type="button" text="Completed" /> */}
      </section>
      {showModal && (
          <RequestFormModal  showModal={showModal} setShowModal={setShowModal} />
        )}

    </section>
  );
};
