import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {

    const countryDetails = useLoaderData();

    const {area, capital, continents, flags, independent, languages, name, population, region, startOfWeek, } = countryDetails[0];

    const navigate = useNavigate()

    const handlenevigation = ()=> {
        navigate(-1)
    }

    return (
        <div className='container mx-auto flex flex-col justify-center items-center'>
            <img style={{width: '600px', height: '353px', borderRadius: '30px', border: '10px solid #6C4AB6', padding: '5px'}} src={flags.png} alt="" />
            <div className='my-6 flex flex-col gap-3'>
                <h1 className='text-4xl font-light'>Country Name: <span className='text-4xl font-bold text-fuchsia-700'>{name.common}</span></h1>
                <h2 className='text-xl'>Capital: <span className='text-xl font-bold text-fuchsia-700'>{capital}</span></h2>
                <h2 className='text-xl'>Language: <span className='text-xl font-bold text-fuchsia-700'>{languages.nld? languages.nld : 'No Language Found'}</span></h2>
                <h2 className='text-xl'>Week Start: <span className='text-xl font-bold text-fuchsia-700'>{startOfWeek}</span></h2>
                <h3 className='text-xl'>Ragion: <span className='text-xl font-bold text-fuchsia-700'>{region}</span></h3>
                <h3 className='text-xl'>Population: <span className='text-xl font-bold text-fuchsia-700'>{population}</span></h3>
                <h3 className='text-xl'>Area: <span className='text-xl font-bold text-fuchsia-700'>{area}</span></h3>
                <h3 className='text-xl'>Independent: <span className='text-xl font-bold text-fuchsia-700'>{independent == true? "Yes" : "No"}</span></h3>
                <h3 className='text-xl'>Continents: <span className='text-xl font-bold text-fuchsia-700'>{continents}</span></h3>
            </div>
            <button onClick={()=> handlenevigation()} className='p-3 rounded-lg bg-fuchsia-700 text-xl text-white font-semibold hover:bg-fuchsia-800 hover:scale-110 duration-300 mb-4'>Go Back</button>



        </div>
    );
};

export default CountryDetails;