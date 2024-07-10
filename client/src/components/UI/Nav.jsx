import PropTypes from "prop-types";
import { AnchorLink } from "../UI/AnchorLink";
import { Button } from "../UI/Button";

export const Nav = ({ action, onClickHandler }) => {
    return (
        <nav className="">
            <ul className="font-medium flex flex-col space-y-6 p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:space-y-0">
                <li>
                    <AnchorLink
                        href="#"
                        className={`underline text-[#F4743B] p-2.5`}
                        text="Home"
                    />
                </li>
                <li>
                    <AnchorLink href="#" className="text-black p-2.5" text="About Us" />
                </li>
                <li>
                    <AnchorLink href="#" className="text-black p-2.5" text="Stats" />
                </li>
                <li>
                    <AnchorLink
                        href="#"
                        className={`font-normal text-white bg-[#F4743B] rounded-lg p-2.5`}
                        text="Contact"
                    />
                </li>
                <li>
                    <Button className="font-normal text-white bg-green-500 hover:bg-green-300 rounded-lg p-2 -mt-4" type="button" text={action} onClick={onClickHandler} />
                </li>
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    action: PropTypes.string,
    onClickHandler: PropTypes.func,
};
