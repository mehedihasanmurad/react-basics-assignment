import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Swal from 'sweetalert2'


function App() {

  const [bookmarks,setBookmarks] = useState([])
  const [totalCredit,setTotalCredit] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);

  const addHandleSelect = (course,hour,value) => {
    // console.log("Click the button",course);

    if(totalCredit >= 20) {
       Swal.fire({
        title: 'Error!',
        text: 'This title is already exits',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }

    const exitCourse = bookmarks.find(book => book.id === course.id);
    // console.log(exitCourse);
    
    if(exitCourse) {
        Swal.fire({
        title: 'Error!',
        text: 'This title is already exits',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }

    const newAddBookmarks = [...bookmarks,course];
    setBookmarks(newAddBookmarks);

    const newTotalHour = (totalCredit + hour);
    setTotalCredit(newTotalHour);

    const newTotalValue = (totalPrice + value);
    setTotalPrice(newTotalValue);
  }

  return (

    
    <>
      <h1 className='text-4xl text-center mt-12'>Courses Registration</h1>

      <div className='md:flex max-w-7xl mx-auto'>
        
        <Courses addHandleSelect={addHandleSelect}></Courses>

      <Bookmarks bookmarks={bookmarks} totalCredit={totalCredit} totalPrice={totalPrice}></Bookmarks>
        
      </div>
    </>
  )
}

export default App
