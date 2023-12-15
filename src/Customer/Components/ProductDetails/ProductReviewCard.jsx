import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
    return (
    <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56, height:56,bgcolor:"#a259ff"}} >A</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Rohan</p>
                    <p className='opacity-70'>June 2, 2022</p>
                </div>
            </div>

            <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
            <p>Good product</p>
        </Grid>
    </Grid>
    )
}

export default ProductReviewCard;