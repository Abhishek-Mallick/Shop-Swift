import React from 'react';

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/q/u/l-ts36-sti-original-imagvqfhurztfs8y.jpeg?q=70" alt="" />
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-grey-900'>Roadster</h3>
                <p className='mt-2 text-sm text-grey-500'>Men Solid Round Neck Polyester Grey T-Shirt</p>
            </div>
        </div>
    )
}

export default HomeSectionCard;