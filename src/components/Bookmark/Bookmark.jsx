import React from 'react';

const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    const {title}= bookmark;
    return (
        <>
            <div>
                <div>
                    <h1 className='text-xl text-gray-400 mb-4'>{title}</h1>
                </div>
                
            </div>
        </>
        
    );
};

export default Bookmark;