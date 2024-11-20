import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
   
    return (
        <div className="bg-slate-500 p-5 m-4 rounded-md " >
            <h1 className="font-bold text-3xl mt-5 ">Bookmarks</h1>
            <h1 className="">Marked:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;