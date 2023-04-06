import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {

    const countries = useLoaderData();

    return (
        <div className='grid grid-cols-4 gap-8 container mx-auto'>

            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;