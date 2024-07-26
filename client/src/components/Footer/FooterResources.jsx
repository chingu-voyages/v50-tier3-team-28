function FooterResources() {
  return (
    <div className="box3 px-8 w-full md:w-1/3 border border-footerBoxColor flex flex-col items-center rounded-3xl">
      <h2 className="text-xl font-bold my-4 text-footerProfileNameColor text-center dark:text-white">
        Resources
      </h2>
      <ul className="list-none w-full pl-8 mt-20">
        <li>
          <a
            href="https://www.beegirl.org/"
            className="underline mb-2 block text-footerBoxColor">
            Bee Regenerative
          </a>
        </li>
        <li>
          <a
            href="https://savethebeesusa.org/"
            className="underline mb-2 block text-footerBoxColor">
            Save The Bees USA
          </a>
        </li>
        <li>
          <a
            href="https://thebeeconservancy.org/"
            className="underline mb-2 block text-footerBoxColor">
            The Bees Conservancy
          </a>
        </li>
        <li>
          <a
            href="https://savethebees.com/"
            className="underline mb-2 block text-footerBoxColor">
            Save The Bees
          </a>
        </li>
        <li>
          <a
            href="https://www.newyorkbeesanctuary.org/"
            className="underline mb-2 block text-footerBoxColor">
            New York Bee Sanctuary
          </a>
        </li>
        <li>
          <a
            href="https://www.pollinator.org/about"
            className="underline mb-2 block text-footerBoxColor">
            Pollinator Partnership
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterResources;
