import React, { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { City } from "../utils/types";

export default function SearchBar({ data, onCityChange }: { data: City[], onCityChange: (City: City) => void }) {

    const [selectedCity, setSelectedCity] = useState({});

    const updateSelectedCity = (city: City) => {
        setSelectedCity(city);
        onCityChange(city);
    };


    function classNames(...classes: (string | boolean)[]) {
        return classes.filter(Boolean).join(' ')
      }
      
      const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          sendMessage();
          if (event.currentTarget instanceof HTMLInputElement) {
            event.currentTarget.blur();
          }
        }
      };
    
      const sendMessage = () => {

      };
    const cities: City[] = data;
      
    const [query, setQuery] = useState('')
    const filteredCities = 
        cities.filter((city: City) => {
            return city.name.toLowerCase().startsWith(query.toLowerCase())
    })


    return (
    <div className="flex mx-auto w-96 min-w-full justify-center">
        <Combobox as="div" value={selectedCity} onChange={updateSelectedCity}>
            <div className="relative mt-2">
                <Combobox.Input
                    className=" rounded-md bg-white py-1.5 pl-3 pr-10 text-gray-900 md:w-96 min-w-full outline-none focus:shadow-gray-900 focus:shadow-lg focus:rounded-md sm:text-sm sm:leading-6 placeholder-white"
                    placeholder="Type city name here and press enter"
                    onChange={(event) => {query !== event.target.value? setQuery(event.target.value): console.log(null)}}
                    displayValue={(city: City) => city.name}
                    onKeyPress={handleKeyPress}

                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                </Combobox.Button>

                {filteredCities.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-inherit text-base shadow-lg shadow-black ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredCities.map((city) => (
                    <Combobox.Option
                        key={filteredCities.indexOf(city)}
                        value={city}
                        className={({ active }) =>
                        classNames(
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                            active ? 'bg-gray-400 text-white' : 'text-gray-900'
                        )
                        }
                    >
                                        
                        {({ active, selected }) => (
                        <>
                            <span className={classNames('block truncate', selected && 'font-semibold')}>{city.name}</span>

                            {selected && (
                            <span
                                className={classNames(
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                active ? 'text-white' : 'text-black'
                                )}
                            >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            )}
                        </>
                        )}
                    </Combobox.Option>
                    ))
                    }
                </Combobox.Options>
                )}
            </div>
        </Combobox>
    </div>
  )
}