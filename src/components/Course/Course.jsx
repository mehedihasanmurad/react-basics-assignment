

import React from 'react';
import { FaBookOpen,FaDollarSign } from "react-icons/fa";


const Course = ({course,addHandleSelect}) => {
    // console.log(course);
    const {image,title,description,price,read_time} = course;
    return (
        <div className='p-4 mt-12 bg-slate-100 rounded-xl'>
    
            <div>
                <img className='h-32 w-full rounded-xl' src={image} alt="" />
            
            
                <h1 className='text-2xl w-96 font-semibold mt-4 mb-4'>{title}</h1>
                <p className='h-24 w-full text-slate-500 mb-5'>{description}</p>
            
    
                <div className='flex justify-between'>
                    <p className='text-slate-500 flex items-center mt-2 '><FaDollarSign className='mr-4'></FaDollarSign> Price : {price}</p>
                    <p className='text-slate-500 flex items-center mt-2'><FaBookOpen className='mr-4'></FaBookOpen> Credit : {read_time}hr</p>
                </div>
            
            <button onClick={() => addHandleSelect(course,read_time,price)}  className='bg-blue-400 w-full p-3 mt-7 rounded-lg mt-2 font-bold text-white text-2xl'>Select</button>
            </div>
        </div>
    );
};

export default Course;


