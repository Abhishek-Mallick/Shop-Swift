import React from 'react';
import "./ProductCard.css";
const ProductCard = () => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/dress/z/u/9/m-mcaw19d08-57-217-miss-chase-original-imags5asgrcnfztc.jpeg?q=70" alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>Brand Name</p>
                    <p>Women Dress</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>₹2000</p>
                    <p className='line-through opacity-50'>₹8000</p>
                    <p className='text-green-600 font-semibold'>60% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;