import React from 'react';
import earth from '../../Assets/earth.png';

const ForumHero = () => {
    return (
        <div className='bg-[#41789F]'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div className='text-white'>
                    <h2 className='text-3xl font-semibold tracking-widest'>Forum</h2>
                    <h4 className='text-xl tracking-wider'>Share your travel experiences and advices with others.</h4>
                </div>
                <img className='h-[300px]' src={earth} alt="" />
            </div>
        </div>
    );
};

export default ForumHero;