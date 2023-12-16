import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men White T-shirt</p>
          <p className="opacity-70">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Brand Name</p>
          <div className="flex space-x-5 item-center text-gray-900 pt-6">
            <p className="font-semibold">₹2000</p>
            <p className="line-through opacity-50">₹2200</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>

        

      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">4</span>
                <IconButton sx={{color:"purple"}}>
                    <AddCircleOutlineIcon />
                </IconButton>
                
            </div>

            <Button sx={{color:"purple"}}>
                Remove
            </Button>
            
        </div>
    </div>
  );
};

export default CartItem;
