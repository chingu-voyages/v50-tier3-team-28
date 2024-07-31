import FooterContent from './FooterContent';
import FooterBottom from './FooterBottom';
import FooterForm from './FooterForm';

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="dark:bg-black">
      <div className="max-w-7xl mx-auto rounded-lg col-span-12 pt-10">
        <div className="w-full mx-auto px-8">
          <FooterForm handleNewsletterSubmit={handleNewsletterSubmit} />

          <FooterContent />

          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
