

import React from 'react';

const Course = ({course}) => {
    // console.log(course);
    const {image,title,description,price,read_time} = course;
    return (
        <div className='shadow-2xl p-2 '>
            <img className='h-1/2 w-full ' src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <span>$ Price : {price}</span>
            <span className='ml-4'>Credit : {read_time}hr</span>
            <button>Select</button>
        </div>
    );
};

export default Course;


