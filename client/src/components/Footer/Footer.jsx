import FooterProfiles from "./FooterProfiles";
import FooterBottom from "./FooterBottom";
import FooterForm from "./FooterForm";

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-footerBackgroundColor rounded-lg col-span-12 pt-10">
      <div className="w-full mx-auto px-8">
        <FooterForm handleNewsletterSubmit={handleNewsletterSubmit} />

        <FooterProfiles />

        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;