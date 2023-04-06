import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {flags, name} = country;
    return (
        <Link to={`/countries/${name.common}`}>
        
            <div className='border-4 border-slate-900 rounded-2xl flex flex-col justify-center items-center gap-5 p-6 hover:scale-110 duration-300'>
                <img style={{width: '400px', height: '230px', borderRadius: '20px'}} src={flags.png} alt="" />
                <h1 className='text-3xl font-medium text-slate-900'>{name.common}</h1>
            </div>

        </Link>
    );
};

export default Country;