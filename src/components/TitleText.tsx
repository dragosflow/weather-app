import { motion } from "framer-motion";
import React from "react";


  
  export default function TitleText() {

    type Stats = {id: number, name: string, value: string}



    const date: Date = new Date();
    const month: string = date.toLocaleString('default', { month: 'long' });
    const day: number = date.getDate();

    const stats: Stats[] = [
        { id: 1, name: 'Cities', value: '528' },
        { id: 2, name: 'Date', value: `${day} ${month.toUpperCase().slice(0,3)}` },
      ]

    return (
      <div className=" py-10 sm:py-0 mt-24 max-w-3xl flex mx-auto z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ duration: 4 }}
            className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-7xl">Weather App</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Search for any city in Romania.
              </p>
            </motion.div>
            <dl className="mt-5 grid gap-0.5 overflow-hidden rounded-2xl text-center grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-4">
                  <dt className="text-sm font-semibold text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  