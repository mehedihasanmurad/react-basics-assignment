import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {

    return (
        <div className='md:w-1/3 bg-slate-100 p-5 ml-5 mt-12'>
            {/* <h1 className='text-xl w-full text-blue-500 font-bold mb-2'>Credit Hour Remaining : {bookmarks.length}</h1> */}
            {/* <hr /> */}
            <h1 className='text-xl font-bold mt-2 mb-4'>Course Name</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }


        </div>
    );
};

export default Bookmarks;