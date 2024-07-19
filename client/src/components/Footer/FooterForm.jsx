function FooterForm({ handleNewsletterSubmit }) {
  return (
    <div className="flex flex-col items-center justify-between sm:flex-row">
      <div className="text-sm font-medium flex-1 px-4">
        <div className="flex flex-col text-xl">
          <span className="text-5xl font-bold text-footerProfileNameColor">
            Lets
          </span>
          <span className="text-5xl font-bold text-footerTextColor pl-7">
            Connect
          </span>
        </div>
      </div>
      <form className="p-4 px-4" onSubmit={handleNewsletterSubmit}>
        <label
          htmlFor="newsletter"
          className="block text-xm text-footerProfileNameColor pb-3">
          Newsletter
        </label>
        <div className="flex w-full">
          <input
            id="newsletter"
            type="email"
            placeholder="Your Email Address"
            className="flex-grow px-4 py-2 text-footerBoxColor bg-footerBackgroundColor border border-footerBoxColor rounded-l-xl focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium bg-footerSubscribeBg hover:bg-orange-600 border border-transparent rounded-r-xl shadow-sm text-footerBackgroundColor">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default FooterForm;
