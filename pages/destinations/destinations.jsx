import Navbar from "../Component/navbar";
import ChangeDestination from "./Components/change-dest";
import Image from "next/image";
import desktopBg from "@/public/destination/background-destination-desktop.jpg";
import tabletBg from "@/public/destination/background-destination-tablet.jpg";
import mobileBg from "@/public/destination/background-destination-mobile.jpg";
import moonImg from "@/public/destination/image-moon.webp"


const Destinations = () => {

    fetch("/api").then(res => { console.log(res)})

    return (
        <>
            <div id="destinations" className=" barlow-condensed-regular relative">
                <Image src={desktopBg} className="h-[100%] w-[100%] absolute z-[-1000]"/>
                <Image src={tabletBg} className="h-[100%] w-[100%] absolute z-[-1000] lg:block sm:hidden hidden"/>
                <Image src={mobileBg} className="h-[100%] w-[100%] absolute z-[-1000] lg:hidden sm:block hidden"/>
                <Navbar page={1} />
                <div className="lg:p-16 lg:px-32">
                    <p className="text-lg"> <span className="opacity-50">01</span> PICK YOUR DESTINATION </p>
                </div>

                <div className="lg:flex lg:justify-between lg:p-32 lg:items-center container w-full">
                    <div> <Image src={moonImg} /> </div>
                    <div className="lg:w-[50%]">
                        <ChangeDestination />
                        <h3 className="bellefair-regular text-8xl py-8"> MOON </h3>
                        <p className="py-8">
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <hr />
                        
                        <div className="sm:flex gap-8 py-4">
                            <div>
                                <p>AVG. DISTANCE</p>
                                <p className="bellefair-regular text-2xl">384,400KM</p>
                            </div>
                            <div>
                                <p>EST. TRAVEL TIME</p>
                                <p className="bellefair-regular text-2xl">3 DAYS</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Destinations;