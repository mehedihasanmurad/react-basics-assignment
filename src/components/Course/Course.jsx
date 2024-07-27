

import React from 'react';

const Course = ({course}) => {
    // console.log(course);
    const {image,title,description,price,read_time} = course;
    return (
        <div className='p-3 mt-12 bg-slate-100 rounded'>
    
            <div>
                <img className='h-48 w-full rounded-xl' src={image} alt="" />
            
            
                <h1 className='text-2xl font-semibold mt-4 mb-4'>{title}</h1>
                <p className='h-20 w-80 text-slate-500 mb-4'>{description}</p>
            
    
                <span>Price : {price}</span>
                <span className='ml-4'>Credit : {read_time}hr</span>
            
            <button className='bg-blue-400 w-full p-3 mt-7 rounded-lg mt-2 font-bold text-white text-2xl'>Select</button>
            </div>
        </div>
    );
};

export default Course;


