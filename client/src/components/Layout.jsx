export const Layout = () => {
    const COLOR = {
        GreenBackgroundColor: '#9BC25B',
        LightGreenBackgroundColor: '#D8E5C3',
        OrangeBackgroundColor: '#F4743B'
    }

    return (
        <section className="grid grid-cols-12 grid-rows-auto gap-2 h-screen">
            <header className={`col-span-12 bg-[${COLOR.GreenBackgroundColor}]`}>
                <section className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="text-black">LOGO</a>
                    <nav className="">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 ">
                            {/* TODO - text color - orange */}
                            <li>
                                <a href="#" className={`text-[${COLOR.OrangeBackgroundColor}]`}>Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-black">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-black">Stats</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </section>

            </header>

            <main className="flex flex-col justify-between col-span-12 row-span-6">
                <section className="col-span-12 h-1/2">
                    <h2>Problem</h2>
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
    )
}
