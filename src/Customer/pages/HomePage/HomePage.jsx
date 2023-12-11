import React from 'react';
import MainCarousel from '../../Components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage = () => {
    return (
        <div>
            <MainCarousel />

            <div className='spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_kurta}/>
                <HomeSectionCarousel data={mens_kurta}/>
                <HomeSectionCarousel data={mens_kurta}/>
                <HomeSectionCarousel data={mens_kurta}/>
            </div>
        </div>
    )
}

export default HomePage;
