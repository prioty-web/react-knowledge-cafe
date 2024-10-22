
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookmarks, setBookmarks] =useState([])
  const handleBookmarks = blog =>{
   const newBookmarks =[...bookmarks, blog]
   setBookmarks(newBookmarks)
  }
  // for reading time
  const [totalReadingTime, setReadingTime]=useState(0);
  const handleMarkAsRead = time =>{
    const newReadingTime = totalReadingTime+time
   setReadingTime(newReadingTime)
  }

  return (
    <>      
      <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleBookmarks ={handleBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks totalReadingTime={totalReadingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
