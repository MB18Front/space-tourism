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
import { useState } from "react";


const Destinations = () => {

    const [apiData, setApiData] = useState()
    
    const ImageArr = [moonImg, marsImg, europaImg, titanpaImg]; {/* This array is written for easy selection of images according to the API information.
The index of the images is the same as its information in the API. */}

    axios({
        url: "/api/data"
    }).then(res => setApiData(res))

    const selectMoon = () => {
        document.getElementById("select-moon").classList.add("dest-active");
        document.getElementById("image-moon").className = "";
        document.getElementById("select-mars").classList.remove("dest-active");
        document.getElementById("image-mars").className = "hidden";
        document.getElementById("select-europa").classList.remove("dest-active");
        document.getElementById("image-europa").className = "hidden";
        document.getElementById("select-titan").classList.remove("dest-active");
        document.getElementById("image-titan").className = "hidden";
        setMoonData();

    }

    const setMoonData = () => {
        const moonData = apiData.data.destinations[0];
        document.getElementById("planet-name").innerHTML = ` ${moonData.name} `;
        document.getElementById("planet-description").innerHTML = ` ${moonData.description} `;
        document.getElementById("planet-distance").innerHTML = ` ${moonData.distance} `;
        document.getElementById("travel-time").innerHTML = ` ${moonData.travel} `;
    }
    const selectMars = () => {
        document.getElementById("select-moon").classList.remove("dest-active");
        document.getElementById("image-moon").className = "hidden";
        document.getElementById("select-mars").classList.add("dest-active");
        document.getElementById("image-mars").className = "";
        document.getElementById("select-europa").classList.remove("dest-active");
        document.getElementById("image-europa").className = "hidden";
        document.getElementById("select-titan").classList.remove("dest-active");
        document.getElementById("image-titan").className = "hidden";
        console.log(apiData)
        setMarsData()
    }

    const setMarsData = () => {
        const marsData = apiData.data.destinations[1];
        document.getElementById("planet-name").innerHTML = ` ${marsData.name} `;
        document.getElementById("planet-description").innerHTML = ` ${marsData.description} `;
        document.getElementById("planet-distance").innerHTML = ` ${marsData.distance} `;
        document.getElementById("travel-time").innerHTML = ` ${marsData.travel} `;
    }

    const selectEuropa = () => {
        document.getElementById("select-moon").classList.remove("dest-active");
        document.getElementById("image-moon").className = "hidden";
        document.getElementById("select-mars").classList.remove("dest-active");
        document.getElementById("image-mars").className = "hidden";
        document.getElementById("select-europa").classList.add("dest-active");
        document.getElementById("image-europa").className = "";
        document.getElementById("select-titan").classList.remove("dest-active");
        document.getElementById("image-titan").className = "hidden";
        setEuropaData()
    }

    const setEuropaData = () => {
        const europaData = apiData.data.destinations[2];
        document.getElementById("planet-name").innerHTML = ` ${europaData.name} `;
        document.getElementById("planet-description").innerHTML = ` ${europaData.description} `;
        document.getElementById("planet-distance").innerHTML = ` ${europaData.distance} `;
        document.getElementById("travel-time").innerHTML = ` ${europaData.travel} `;
    }

    const selectTitan = () => {
        document.getElementById("select-moon").classList.remove("dest-active");
        document.getElementById("image-moon").className = "hidden";
        document.getElementById("select-mars").classList.remove("dest-active");
        document.getElementById("image-mars").className = "hidden";
        document.getElementById("select-europa").classList.remove("dest-active");
        document.getElementById("image-europa").className = "hidden";
        document.getElementById("select-titan").classList.add("dest-active");
        document.getElementById("image-titan").className = "";
        setTitanData()
    }

    const setTitanData = () => {
        const titanData = apiData.data.destinations[3];
        document.getElementById("planet-name").innerHTML = ` ${titanData.name} `;
        document.getElementById("planet-description").innerHTML = ` ${titanData.description} `;
        document.getElementById("planet-distance").innerHTML = ` ${titanData.distance} `;
        document.getElementById("travel-time").innerHTML = ` ${titanData.travel} `;
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
                        <Image id="image-mars" className="hidden" src={ImageArr[1]} /> 
                        <Image id="image-europa" className="hidden" src={ImageArr[2]} /> 
                        <Image id="image-titan" className="hidden" src={ImageArr[3]} /> 
                    </div>
                    <div className="lg:w-[40%]">
                        
                        <div className="flex gap-8 my-8">
                            <button id="select-moon" className="dest-active" onClick={selectMoon} > MOON </button>
                            <button id="select-mars" onClick={ selectMars } className="" > MARS </button>
                            <button id="select-europa" onClick={selectEuropa} className="" > EUROPA </button>
                            <button id="select-titan" onClick={ selectTitan } className="" > TITAN </button>
                        </div>


                        <h3 id="planet-name" className="bellefair-regular text-8xl py-8"> MOON </h3>
                        <p id="planet-description" className="py-8">
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <hr />
                        
                        <div className="flex gap-8 py-4">
                            <div>
                                <p>AVG. DISTANCE</p>
                                <p id="planet-distance" className="bellefair-regular text-2xl">384,400KM</p>
                            </div>
                            <div>
                                <p>EST. TRAVEL TIME</p>
                                <p id="travel-time" className="bellefair-regular text-2xl">3 DAYS</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Destinations;