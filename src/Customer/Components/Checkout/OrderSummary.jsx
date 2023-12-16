import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { Button, Divider } from '@mui/material';
import CartItem from '../Cart/CartItem';

const OrderSummary = () => {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border mb-5'>
                <AddressCard />
            </div>

            <div>
            <div className='lg:grid grid-cols-3 relative'>
                <div className='col-span-2'>
                    {[1,1,1,1].map((item)=><CartItem />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className=''>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                    <Divider />
                    <div className='space-y-3 font-semibold mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>₹8000</span>
                        </div>

                        <div className='flex justify-between pt-'>
                            <span>Discount</span>
                            <span className='text-green-600'>₹2000</span>
                        </div>

                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <Divider />
                        <div className='flex justify-between pt-3 text-black'>
                            <span className='text-blue-600'>Total Amount</span>
                            <span className='text-blue-600'>₹6000</span>
                        </div>
                    </div>
                    <Button className='w-full mt-5' color='secondary' variant='contained' sx={{px:"0.7rem",py:"0.5rem"}}>
                        Checkout
                    </Button>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default OrderSummary;