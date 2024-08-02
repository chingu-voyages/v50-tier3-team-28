import { Button } from "../UI/Button";

export const UserRequest = () => {
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

      <section>
        <Button className="font-normal text-white bg-[#F4743B] hover:bg-green-300 rounded-lg p-2 -mt-4 dark:text-black" type="button" text="Completed" />
      </section>
    </section>
  );
};
