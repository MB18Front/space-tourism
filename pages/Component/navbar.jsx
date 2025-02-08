import Image from "next/image";
import logo from "@/public/logo.svg";
import menuCloseIco from "@/public/navbar/menu-close.svg";
import menuOpenIco from "@/public/navbar/menu-open.svg"
import { useEffect } from "react";
import Link from "next/link";

const Navbar = ({page}) => {
    const menuOpen = () => {
        const menu = document.getElementById("menu-nav");
        menu.classList.toggle("right-[-200%]")
        menu.classList.toggle("right-0")
    }
    const menuClose = () => {
        const menu = document.getElementById("menu-nav");
        menu.classList.toggle("right-0")
        menu.classList.toggle("right-[-200%]")
    }

    // HOME page code: 0
    //DESTINATION page code: 1
    //CREW page code: 2
    //TECHNOLOGY page code: 3

    useEffect(()=> {
        if (page == 0) {
            document.getElementById('home').className += "sm:border-b-4 sm:border-r-0 border-r-4"
        } else if (page === 1) {
            document.getElementById('destination').className += "sm:border-b-4 sm:border-r-0 border-r-4"
        } else if (page === 2) {
            document.getElementById('crew').className += "sm:border-b-4 sm:border-r-0 border-r-4"
        } else if (page === 3) {
            document.getElementById('technology').className += "sm:border-b-4 sm:border-r-0 border-r-4"
        }
    })
    

    return (
        <>  
            <div className="flex lg:justify-between justify-normal lg:py-16 sm:py-0 items-center barlow-condensed-regular">
                <div className="px-16 sm:py-0 py-16 sm:w-[auto] w-[100%]">
                    <Image src={logo} />
                </div>

                {/* menu opener */}
                <button className="absolute right-0 px-16 sm:hidden" onClick={menuOpen}>
                    <Image src={ menuOpenIco } />
                </button>


                <ul id="menu-nav" className="sm:flex bg-[#fff2] gap-8 lg:backdrop-blur-md lg:px-64 lg:pr-16 lg:w-[auto] sm:w-[100%] lg:justify-normal justify-center sm:relative fixed top-0 sm:h-[auto] h-screen sm:backdrop-blur-[0] backdrop-blur-md w-[70%] transition-all sm:right-0 right-[-200%]  sm:p-0 py-32" >
                    {/* menu closet */}
                    <button className="sm:hidden absolute right-0 top-0 p-16" onClick={menuClose}>
                        <Image src={menuCloseIco} />
                    </button>

                    {/* menu items */}
                    <li id="home" className="py-4 p-4 ">
                        <Link href={"/"} replace={true}>
                            <button className="text-left sm:p-4 p-2">
                                00 HOME
                            </button>
                        </Link>
                    </li>
                    <li id="destination" className="py-4 p-4 ">
                        <Link href={"/destinations/destinations"} replace={true}>
                            <button className="text-left sm:p-4 p-2">
                                01 DESTINATION
                            </button>
                        </Link>
                    </li>
                    <li id="crew" className="py-4 p-4 ">
                        <button className="text-left sm:p-4 p-2">
                            02 CREW
                        </button>
                    </li>
                    <li id="technology" className="py-4 p-4 ">
                        <button className="text-left sm:p-4 p-2">
                            03 TECHNOLOGY
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;