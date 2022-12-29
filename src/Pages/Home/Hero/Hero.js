import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='min-h-screen flex justify-start items-center' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&w=1000&q=80")` }}>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-3xl tracking-wider text-white'>Access live travel updates ✈️, <br /> discussion forum 💬, <br />
                    currency converter 💵, <br />
                    and more... all on Travel+.</h2>
                <Link to='/forum' type="button" className="mt-3 px-8 py-3 font-semibold rounded-full bg-blue-300 dark:text-gray-800">Explore Forum</Link>
            </div>
        </div>
    );
};

export default Hero;