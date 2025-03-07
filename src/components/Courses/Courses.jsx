import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';



const Courses = ({addHandleSelect}) => {
    const [courses,setCourses] = useState([])
    useEffect(() =>{
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='md:w-4/5 md:grid grid-cols-3 gap-2'>

           {
             courses.map(course => <Course 
                key={course.id} 
                course={course}
                addHandleSelect={addHandleSelect}
                ></Course>)
           }
        </div>
    );
};

export default Courses;