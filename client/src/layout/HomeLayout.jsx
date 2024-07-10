import { useState } from "react";
import { AnchorLink } from "../components/UI/AnchorLink";
import { Form } from "../components/UI/Form";
import Graph from "./Graph";

export const HomeLayout = () => {
    // const COLOR = {
    //     GreenBackgroundColor: '#9BC25B',
    //     LightGreenBackgroundColor: '#D8E5C3',
    //     OrangeBackgroundColor: '#F4743B',
    // }

    const [action, setAction] = useState("Sign Up");

    const onClickHandler = () => {
        console.log(action);
        setAction("Login");
    }

    return (
        <section className="grid grid-cols-12 grid-rows-auto gap-2 h-screen">
            {/* <header className={`col-span-12 bg-[${COLOR.GreenBackgroundColor}]`}> */}
            <header className={`col-span-12 bg-[#9BC25B]`}>
                <section className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <AnchorLink
                        href="#"
                        className="logo-custom font-normal text-black text-2xl"
                        text="LOGO"
                    />
                    <nav className="">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 ">
                            <li>
                                <AnchorLink
                                    href="#"
                                    className={`underline text-[#F4743B]`}
                                    text="Home"
                                />
                            </li>
                            <li>
                                <AnchorLink href="#" className="text-black" text="Home" />
                            </li>
                            <li>
                                <AnchorLink href="#" className="text-black" text="Stats" />
                            </li>
                            <li>
                                <AnchorLink
                                    href="#"
                                    className={`font-normal text-white bg-[#F4743B] p-2.5`}
                                    text="Contact"
                                />
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>

            <main className="flex flex-col justify-between col-span-12 row-span-6">
                <section className="col-span-12 h-1/2">
                    {/* <h2>Problem</h2> */}
                    <Form action={action} onClickHandler={onClickHandler} />
                    <Graph />
                </section>
                <section className="bg-gray-200 col-span-12 h-1/2">
                    <h2>Map</h2>
                </section>
                <section className="col-span-12 h-1/2">
                    <h2>Solutions</h2>
                </section>
            </main>

            <footer className="bg-gray-200 col-span-12">
                <p>Footer</p>
            </footer>
        </section>
    );
};
