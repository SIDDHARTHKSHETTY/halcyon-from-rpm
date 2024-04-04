import React from 'react';
import Home from './Home';
import { BackgroundBlogCard } from '../components/EventsComponentAll';
import Data from '../assets/Data.js';

function EventsPage() {
  return (
    <div>
      <div className="relative">
        {/* <Home /> */}

        <div className='flex flex-col items-center justify-center sm:flex-row flex-wrap'>
          {Data.map((category, index) => (
            <div className='m-5 mt-16 hover:scale-105 duration-500'>

            <BackgroundBlogCard key={index} category = {category} ></BackgroundBlogCard>
            </div>
          ))}
        </div>
        {/* <BackgroundBlogCard /> */}
      </div>
    </div>
  );
}

export default EventsPage;
