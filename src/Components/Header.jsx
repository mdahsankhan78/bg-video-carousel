import { useState, useEffect } from "react";

import Nav from "./Header/Nav";
import MobileNav from "./Header/MobileNav";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        // remove event
        return () => window.removeEventListener("scroll", scrollYPos);
    }, []);

    return (
        <header
            className={`${header
                    ? "py-2 bg-white shadow-lg dark:bg-accent"
                    : "py-4 bg-white lg:bg-transparent dark:bg-accent"
                } sticky top-0 z-30 transition-all duration-300 
            `}
        >
            <div className={`${header
                    ? "mx-24 text-black"
                    : "mx-24 text-white"}`}>
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img
                            src="http://innovador.solutions/wp-content/uploads/2024/06/logo.svg"
                            className={`h-16 lg:hidden`}
                            alt="Logo"
                        />
                         <img
                            src={header ? ('http://innovador.solutions/wp-content/uploads/2024/06/logo.svg'):('/images/logo-white.png')}
                            className={`h-16 hidden lg:block`} // Visible only on large screens (lg and above)
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center gap-x-6">
                        {/* nav */}
                        <Nav
                            containerStyles="hidden lg:flex gap-x-8 items-center transition-all"
                            linkStyles="relative font-bold text-lg hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-[3.2rem] h-[3px] bg-primary w-full"
                        />
                        {/* <ThemeToggler /> */}
                        {/* mobile nav */}
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
