import { AnchorLink } from "./AnchorLink";

export const SolutionsHeader = () => {
  return (
    <section className="flex flex-col mt-4 pt-4 mb-4 pb-4">
      <h2 className="mb-2 pb-2 text-center text-[#101828] text-22px font-bold underline">Solutions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, maiores! Alias qui officiis impedit nemo iure. Libero architecto optio mollitia debitis dolores, nostrum sit illo, corrupti maxime blanditiis quos eius.
        Veritatis, labore nostrum? Iusto laboriosam tenetur facilis, vel possimus at accusantium. Perspiciatis natus officia voluptatibus dicta quasi sint aspernatur error dolorem nam ducimus quaerat doloribus, facere ad qui optio quam!
        <AnchorLink href="#" text="Login to send request" className="text-[#F4743B] uppercase underline ml-1" />
      </p>
    </section>
  );
};
