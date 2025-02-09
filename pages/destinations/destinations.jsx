'use client';

import Navbar from "../Component/navbar";
import Image from "next/image";
import desktopBg from "@/public/destination/background-destination-desktop.jpg";
import tabletBg from "@/public/destination/background-destination-tablet.jpg";
import mobileBg from "@/public/destination/background-destination-mobile.jpg";
import moonImg from "@/public/destination/image-moon.webp";
import marsImg from "@/public/destination/image-mars.webp";
import europaImg from "@/public/destination/image-europa.webp";
import titanpaImg from "@/public/destination/image-titan.webp";
import axios from "axios";


const Destinations = () => {

    const ImageArr = [moonImg, marsImg, europaImg, titanpaImg]; {/* This array is written for easy selection of images according to the API information.
The index of the images is the same as its information in the API. */}

    axios({
        url: "/api/data"
    }).then(res => console.log(res.data))

    const selectMoon = () => {
        document.getElementById("select-moon").classList.toggle("dest-active");
        document.getElementById("select-mars").classList.toggle("dest-active");
        document.getElementById("select-europa").classList.toggle("dest-active");
        document.getElementById("select-titan").classList.toggle("dest-active");
    }


    return (
        <>
            <div id="destinations" className=" barlow-condensed-regular relative">

                {/* background images */}
                <Image src={desktopBg} className="h-[100%] w-[100%] absolute z-[-1000] lg:block hidden"/>
                <Image src={tabletBg} className="h-[100%] w-[100%] absolute z-[-1000] lg:hidden sm:block hidden"/>
                <Image src={mobileBg} className="h-[100%] w-[100%] absolute z-[-1000] lg:hidden sm:hidden block"/>

                {/* navbar menu component */}
                <Navbar page={1} />

                {/* page title */}
                <div className="lg:p-16 lg:px-32">
                    <p className="text-lg"> <span className="opacity-50">01</span> PICK YOUR DESTINATION </p>
                </div>

                <div className="lg:flex lg:justify-between lg:p-32 lg:items-center container w-full">
                    <div>
                        <Image id="image-moon" className="" src={ImageArr[0]} /> 
                        <Image id="image-mars" className="hidden opacity-0 transition-all" src={ImageArr[1]} /> 
                        <Image id="image-europa" className="hidden opacity-0 transition-all" src={ImageArr[2]} /> 
                        <Image id="image-titan" className="hidden opacity-0 transition-all" src={ImageArr[3]} /> 
                    </div>
                    <div className="lg:w-[40%]">
                        
                        <div className="flex gap-8 my-8">
                            <button id="select-moon" onClick={selectMoon} > MOON </button>
                            <button id="select-mars" className="" > MARS </button>
                            <button id="select-europa" className="" > EUROPA </button>
                            <button id="select-titan" className="" > TITAN </button>
                        </div>


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