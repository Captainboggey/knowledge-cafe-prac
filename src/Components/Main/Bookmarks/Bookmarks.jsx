import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
   
    return (
        <div className="bg-slate-500 p-5 m-4 rounded-md md:w-full " >
            <h1 className="font-bold text-3xl mt-5 text-center mb-5">Bookmarks</h1>
            <div className="flex justify-between">
            <h1 >Marked: {bookmarks.length}</h1>
            <h1>Minutes: {readingTime} </h1>
            </div>
            {
                bookmarks.map((bookmark,i) => <Bookmark key={i}  bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;