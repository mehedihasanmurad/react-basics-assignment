import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css';

const Bookmarks = ({bookmarks,totalCredit,totalPrice}) => {
    // console.log(totalCredit);
    const remainingCreditHour = (totalCredit - bookmarks.length);
    return (
        <div className='md:w-1/3 bg-slate-100 p-5 ml-5 mt-12'>

            <h1 className='text-xl w-full text-blue-400 font-bold mb-4 mt-4'>Credit Hour Remaining : {remainingCreditHour} hr</h1>
            <hr /> <hr /> <hr />

            <h1 className='text-xl font-bold mt-2 mb-4'>Course Name</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

            <hr /> <hr /> <hr />

            <h1 className='text-xl w-full font-bold mb-4 mt-4'>Total Credit Hour : {totalCredit}</h1>

            <hr /> <hr /> <hr />

            <h1 className='text-xl w-full font-bold mb-4 mt-4'>Total Price : {totalPrice}  USD</h1>


        </div>
    );
};

export default Bookmarks;