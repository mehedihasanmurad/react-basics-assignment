import React from 'react';

const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    const {title,read_time,price}= bookmark;
    return (
        <>
            <div>
                <div>
                    <h1 className='text-xl text-gray-400 mb-4'>{title}</h1>
                </div>
                
                
                {/* <div>
                    <h2 className='text-xl mt-3 mb-3'><span>Total Credit Hour :</span>{read_time}</h2>
                </div>
                
                <hr className='font-bold' />
                <h3 className='text-xl mt-3 mb-3'><span>Total Price : </span>{price} USD</h3> */}
            </div>
        </>
        
    );
};

export default Bookmark;