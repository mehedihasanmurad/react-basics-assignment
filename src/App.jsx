import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'

function App() {

  const [bookmarks,setBookmarks] = useState([])
  const [totalCredit,setTotalCredit] = useState(0);

  const addHandleSelect = (course,hour) => {
    // console.log("Click the button",course);
    const newAddBookmarks = [...bookmarks,course];
    setBookmarks(newAddBookmarks);

    const newTotalHour = (totalCredit + hour);
      setTotalCredit(newTotalHour)
  }

  return (

    
    <>
      <h1 className='text-4xl text-center mt-12'>Courses Registration</h1>

      <div className='md:flex max-w-7xl mx-auto'>
        
        <Courses addHandleSelect={addHandleSelect}></Courses>

      <Bookmarks bookmarks={bookmarks} totalCredit={totalCredit}></Bookmarks>
      
      </div>
    </>
  )
}

export default App
