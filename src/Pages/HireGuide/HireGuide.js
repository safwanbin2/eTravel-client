import React from 'react';
import guide from '../../Assets/guide.jpeg';

const HireGuide = () => {
    return (
        <div className='min-h-screen'>
            <div className='bg-[#41789F]'>
                <div className='w-11/12 mx-auto flex justify-between items-center'>
                    <div className='text-white'>
                        <h2 className='text-3xl font-semibold tracking-widest'>Hire a Guide</h2>
                        <h4 className='text-xl tracking-wider'>We have experienced guides who knows every bit of the assigned place</h4>
                    </div>
                    <img className='h-[300px] py-[25px]' style={{borderRadius: "50%"}} src={guide} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HireGuide;