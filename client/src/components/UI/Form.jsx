import PropTypes from "prop-types";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = ({ action, onClickHandler }) => {
    const isNewUser = action === "Sign Up";
    const isExistingUser = action === "Login";

    return (
        <form className="flex flex-col items-center gap-2 m-auto p-4">
            <section>
                <h2 className="text-xl">{action}</h2>
            </section>
            {isNewUser && <section>
                <Input className="border-2 border-blue-300" type="text" label="Name" placeholder="User name..." />
            </section>}
            <section>
                <Input className="border-2 border-blue-300" type="email" label="Email" placeholder="User email..." />
            </section>
            <section>
                <Input className="border-2 border-blue-300" type="password" label="Password" placeholder="User password..." />
            </section>
            {isExistingUser && <section>
                <p>Forgot password? <Button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" text="Click here" /> </p>
            </section>}
            {isNewUser &&
                <section>
                    <Button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" text="Sign Up" onClickHandler={onClickHandler} />
                </section>
            }
            {isExistingUser &&
                <section>
                    <Button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" text="Login" onClickHandler={onClickHandler} />
                </section>
            }
        </form>
    )
}

Form.propTypes = {
    action: PropTypes.string,
    text: PropTypes.string,
    onClickHandler: PropTypes.func,
};
