
import Image from "next/image";
import earthImageDesktop from "@/public/home/background-home-desktop.jpg"
import earthImageMobile from "@/public/home/background-home-mobile.jpg"
import earthImageTablet from "@/public/home/background-home-tablet.jpg"
import Navbar from "@/pages/Component/navbar";
import Link from "next/link";


const Header = () => {


    return (
        <>
            <header className="relative h-screen">
                <Image src={earthImageDesktop} className="w-[100%] absolute top-0 z-[-1] lg:block hidden h-[100%]"/>
                <Image src={earthImageMobile} className="w-[100%] absolute top-0 z-[-1] sm:hidden h-[100%]"/>
                <Image src={earthImageTablet} className="w-[100%] absolute top-0 z-[-1] lg:hidden sm:block hidden h-[100%]"/>

                <Navbar page={0}/>

                <div className="flex gap-16 lg:justify-between lg:items-center lg:flex-row lg:text-left text-center sm:p-32 justify-center flex-col ">
                    {/* header text */}
                    <div className="barlow-condensed-regular sm:p-8 p-4 lg:max-w-[50%] w-[100%]">
                        <h5 className="text-xl">
                            SO, YOU WANT TO TRAVEL TO
                        </h5>
                        <h1 className="text-8xl bellefair-regular">
                            SPACE
                        </h1>
                        <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>

                    <div className="">

                        <Link href={"/destinations/destinations"} replace={true}>
                            <button className="bg-white text-4xl text-blue-900 sm:p-16 p-8 aspect-square rounded-full bellefair-regular transition-all hover:text-[#0B0D1777] hover:shadow-[0_0_0_60px_rgba(255,255,255,0.5)] hover:scale-75">
                                EXPLORE
                            </button>
                        </Link>

                    </div>

                </div>

            </header>   
        </>
    )
}

export default Header;
