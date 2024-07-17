function FooterBottom() {
  return (
    <div className="relative w-full flex flex-col items-center sm:flex-row sm:items-start justify-between mt-10">
      <span className="flex items-center justify-center order-1 sm:order-none sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 text-sm text-footerBoxColor mb-4 sm:mb-0">
        <i className="fab fa-github text-4xl mr-4"></i>
        <a
          href="https://github.com/chingu-voyages/v50-tier3-team-28"
          target="_blank"
          className="hover:text-footerSubscribeBg text-lg">
          Github Project Link - August 2024
        </a>
      </span>
      <h2 className="text-4xl self-center sm:ml-auto mt-5 sm:mt-0 text-footerTextColor">
        Save Bees
      </h2>
    </div>
  );
}

export default FooterBottom;
