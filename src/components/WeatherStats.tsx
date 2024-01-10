import React from "react";
import FloatingCloud from "./FloatingCloud";
import SpinningSun from "./SpinningSun";
import { ArrowDownIcon, ArrowLongDownIcon, ArrowLongRightIcon, ArrowUpIcon, ArrowsRightLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon, HomeIcon, MapIcon, MapPinIcon, PaperAirplaneIcon, SunIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function WeatherStats({weatherStats, cityStats}: {weatherStats: any, cityStats: any}) {

    console.log("weather", weatherStats)
    console.log("stats", cityStats)

    function toLocalTime(time: number) {
        const date = new Date(time * 1000); 
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }

      const sunsetTime = toLocalTime(weatherStats.sunset) 
      const sunriseTime = toLocalTime(weatherStats.sunrise)

      
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, y: 500 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
            className=" bg-inherit max-w-m w-full md:max-w-5xl md:rounded-xl z-10 mt-5 mb-20 relative p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 leading-5"> 
                <motion.div
                 className="md:col-span-2 bg-white/10 p-0 py-8 md:rounded-tl-xl md:rounded-bl-xl shadow-xl overflow-hidden"
                 whileHover={{ x: -6, scale: 1.02 }}
                 transition={{ duration: 2 }}
                 drag={true} 
                 dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                 dragElastic={0.2}
                 initial={{ x: 0, y: 0 }}
                >
                    <div className="pb-10 pl-10">
                        <div>
                            <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                                Weather weatherStats
                            </p>
                        </div>
                    </div>
                   {weatherStats.temp < 15? 
                        <div className="flex flex-row gap-0">
                            <FloatingCloud initialX={-20} finalX={50} initialY={-10} finalY={40} duration={12}/>
                            <FloatingCloud initialX={-40} finalX={20} initialY={-23} finalY={10} duration={18}/>
                            <FloatingCloud initialX={-10} finalX={24} initialY={5} finalY={-10} duration={10}/>
                            <FloatingCloud initialX={30} finalX={100} initialY={-10} finalY={-5} duration={11}/>
                            <FloatingCloud className="hidden sm:block" initialX={20} finalX={110} initialY={4} finalY={5} duration={14}/>
                        </div>:
                        <div className="flex justify-center"> 
                            <SpinningSun/>
                        </div>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                        <div className="flex mx-auto mb-4">
                            <ChevronRightIcon className=" mr-1 w-6 text-white" />
                            <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                                Temp : <span className="text-xl font-semibold tracking-tight text-white md:text-4xl ml-5"> {weatherStats.temp}&deg;C </span>
                            </p>
                        </div>
                        <div className="flex mx-auto my-auto mb-4">
                            <ChevronDoubleRightIcon className=" mr-1 w-6 text-white" />
                            <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                                Feels like  <span className="text-xl font-semibold tracking-tight text-white md:text-4xl ml-5">{weatherStats.feels_like}&deg;C </span>
                            </p>
                        </div>

                        <div className="flex mx-auto my-auto mb-4">
                            <ArrowsRightLeftIcon className=" mr-1 w-6 text-white" />
                            <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                                Max temp <span className="text-xl font-semibold tracking-tight text-white md:text-4xl ml-6">{weatherStats.max_temp}&deg;C </span>
                            </p>
                        </div>
                        <div className="flex mx-auto my-auto mb-4">
                            <ArrowsRightLeftIcon className=" mr-1 w-6 text-white" />
                            <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                                Min temp <span className="text-xl font-semibold tracking-tight text-white md:text-4xl ml-6">{weatherStats.min_temp}&deg;C </span>
                            </p>
                        </div>
                        <div className="flex mx-auto my-auto mb-4">
                            <ArrowsRightLeftIcon className=" mr-1 w-6 text-white" />
                            <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                                Wind speed<span className="text-xl font-semibold tracking-tight text-white md:text-4xl ml-6">{weatherStats.wind_speed} </span>
                            </p>
                        </div>
                        <div className="flex mx-auto my-auto mb-4">
                            <ArrowUpIcon className="w-6 text-white" />
                            <SunIcon className=" mr-1 w-6 text-white" />
                            <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                                Sunrise<span className="text-xl font-semibold tracking-tight text-white md:text-4xl ml-6">{sunriseTime} </span>
                            </p>
                        </div>
                        <div className="flex mx-auto my-auto mb-4">
                            <ArrowDownIcon className="w-6 text-white" />
                            <SunIcon className=" mr-1 w-6 text-white" />
                            <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                                Sunset<span className="text-xl font-semibold tracking-tight text-white md:text-4xl ml-6">{sunsetTime} </span>
                            </p>
                        </div>

                    </div>
                </motion.div>
                <div className="grid grid-rows-1 gap-2 bg-gray/20">
                    <motion.div 
                        className="bg-white/5 p-5 md:rounded-tr-xl"
                        whileHover={{ x: 5, y: -5, scale: 1.02 }}
                        transition={{ duration: 2 }}
                        drag={true} 
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        initial={{ x: 0, y: 0 }}
                        >
                            <div>
                                <p className="text-3xl font-bold tracking-tight text-white sm:text-xl">
                                    City : {cityStats.name}
                                </p>
                            </div>
                            <div className="flex flex-row mx-auto mt-2 my-auto">
                                <MapIcon className="w-5 text-white" />
                                <p className="ml-2 font-semibold text-white">
                                    Country : {cityStats.country}
                                </p>
                            </div>
                            <div className="flex flex-row mx-auto my-auto mt-2">
                                <MapPinIcon className="w-5 text-white" />
                                <p className="ml-2 font-semibold text-white">
                                    County : {cityStats.admin_name}
                                </p>
                            </div>
                            <div className="flex flex-row mx-auto my-auto mt-2">
                                <ArrowLongRightIcon className="w-5 text-white" />
                                <p className="ml-2 font-semibold text-white">
                                    Latitude : {cityStats.lat}
                                </p>
                            </div>
                            <div className="flex flex-row mx-auto my-auto mt-2">
                                <ArrowLongDownIcon className="w-5 text-white" />
                                <p className="ml-2 font-semibold text-white">
                                    Longitude : {cityStats.lng}
                                </p>
                            </div>
                    </motion.div>
                    <motion.div
                        className="bg-white/5 p-5 md:md:rounded-br-xl shadow-xl"
                        whileHover={{ x: 5, y: 5, scale: 1.02 }}
                        transition={{ duration: 2 }}
                        drag={true} 
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        initial={{ x: 0, y: 0 }}
                        >
                            <div>
                                <p className="text-3xl font-bold tracking-tight text-white sm:text-xl">
                                    About
                                </p>
                            </div>
                            <div className="flex flex-row mx-auto mt-2 my-auto">
                                <HomeIcon className="w-5 text-white" />
                                <p className="ml-2 font-semibold text-white">
                                County residence : {cityStats.admin_name}
                                </p>
                            </div>
                            <div className="flex flex-row mx-auto my-auto mt-2">
                                <UserGroupIcon className="w-5 text-white" />
                                <p className="ml-2 font-semibold text-white">
                                Population : {cityStats.population}
                                </p>
                            </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
      )
}