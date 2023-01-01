import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../Assets/hero.jpg';

const Hero = () => {
    return (
        <div className='min-h-screen flex justify-start items-center bg-cover' style={{ backgroundImage: `url(${hero})` }}>
            <div className='w-11/12 mx-auto font-sans capitalize'>
                <h2 className='text-4xl leading-10 tracking-wider text-white'>Access live travel updates ✈️, <br /> discussion forum 💬, <br />
                    currency converter 💵, <br />
                    and more... all on Travel+.</h2>
                <Link to='/forum' type="button" className="mt-3 px-8 py-3 font-semibold rounded-full bg-blue-300 dark:text-gray-800">Explore Forum</Link>
            </div>
        </div>
    );
};

export default Hero;