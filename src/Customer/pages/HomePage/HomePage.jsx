import React from 'react';
import MainCarousel from '../../Components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';
import { mens_shirt } from '../../../Data/mens_shirt';
import { mens_shoes } from '../../../Data/mens_shoes';

const HomePage = () => {
    return (
        <div>
            <MainCarousel />

            <div className='spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shoe's"}/>
                <HomeSectionCarousel data={mens_shirt} sectionName={"Mens Shirt's"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dresses"}/>
            </div>
        </div>
    )
}

export default HomePage;
