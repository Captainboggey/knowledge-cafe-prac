


import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Main/Blogs/Blogs'
import Bookmarks from './Components/Main/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([]);

  const handleBookmarkBtn=(blog)=>{
    console.log('added')
     const newBookmark = [...bookmarks,blog];
     setBookmarks(newBookmark);
  }
 

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-10 max-w-7xl mx-auto mt-20'>
      <Blogs handleBookmarkBtn={handleBookmarkBtn}></Blogs>
      <Bookmarks  bookmarks={bookmarks} ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
