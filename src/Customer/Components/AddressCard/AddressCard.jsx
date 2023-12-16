import React from 'react';

const AddressCard = () => {
    return (
        <div>
            <div className='space-y-3'>
                <p className='font-semibold'>First Last</p>
                <p>Kolkata, West Bengal - 700002</p>
                <div className='space-y-1'>
                    <p className='font-semibold'>Phone Number</p>
                    <p>6291653332</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard;