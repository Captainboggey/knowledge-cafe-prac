


import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Main/Blogs/Blogs'
import Bookmarks from './Components/Main/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleBookmarkBtn=(blog)=>{
    console.log('added')
     const newBookmark = [...bookmarks,blog];
     setBookmarks(newBookmark);
  }
  const handleReadingTime =(id,time)=>{
    
    const newReadingTime = (time+readingTime);
    setReadingTime(newReadingTime);
    // console.log('remove id',id)
    const removeBookmark=bookmarks.filter(bookmarks=> bookmarks.id!==id);
    setBookmarks(removeBookmark)

  }
 

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-10 max-w-7xl mx-auto mt-20'>
      <Blogs handleReadingTime={handleReadingTime} handleBookmarkBtn={handleBookmarkBtn}></Blogs>
      <Bookmarks readingTime={readingTime}  bookmarks={bookmarks} ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
