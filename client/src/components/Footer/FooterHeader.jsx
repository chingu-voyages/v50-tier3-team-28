function FooterHeader() {
  return (
    <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between w-full px-10">
      <div className="flex flex-col text-xl">
        <span className="text-5xl font-bold text-footerProfileNameColor dark:text-footerBackgroundColor">
          Lets
        </span>
        <span className="text-5xl font-bold text-footerTextColor pl-7">
          Connect
        </span>
      </div>

      <h2 className="text-5xl font-bold text-footerTextColor mt-10 sm:mt-12">
        Save Bees
      </h2>
    </div>
  );
}

export default FooterHeader;
