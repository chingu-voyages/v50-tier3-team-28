function FooterBottom() {
  return (
    <div className="relative w-full flex flex-col items-center sm:flex-row sm:items-start justify-between mt-10 pb-20  dark:bg-black dark:text-white">
      <span className="flex items-center justify-center order-1 sm:order-none sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 text-sm text-footerBoxColor mb-4 sm:mb-0">
        <i className="fab fa-github text-4xl mr-4"></i>
        <a
          href="https://github.com/chingu-voyages/v50-tier3-team-28"
          target="_blank"
          className="hover:text-footerSubscribeBg text-lg">
          Github Project Link - September 2024
        </a>
      </span>
      <div className="relative w-full flex flex-col items-center content-center sm:flex-row sm:items-start justify-center mt-12 rounded-3xl bg-[#9BC25B]">
        <div className="px-8 py-8 flex flex-col space-y-6 content-center">
          <div>
            Disclaimer: This website and its associated services are provided for demonstrative and educational purposes only. The content and features, including the ability to report bee swarms, are part of a web developement project and may not be fully functional or accurate. The information presented about bees is intended solely for informational purposes and should not be relied upon for professional advice or real-world applications.
          </div>
          <div>
            Please note that this site is not monitored, and any reports submitted regarding bee swarms will not be acted upon. For assistance with bee-related concerns, please contact a licensed professional or your local authorities.
          </div>
          <div>
            We are not responsible for any inaccuracies or issues arising from the use of this site. By using this website, you acknowledge and agree to these terms.
          </div>
        </div>
      </div>
    </div>

  );
}

export default FooterBottom;
