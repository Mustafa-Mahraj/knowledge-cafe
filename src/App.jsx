import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadTime = (time) => {
    setReadTime(readTime + time)
  }

  return (
    <>
      <Header></Header>
      <hr className='mt-10 max-w-screen-xl mx-auto' />
      <main className='max-w-screen-xl mx-auto md:flex mt-8 mb-10 gap-5'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadTime={handleReadTime}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readTime={readTime}
        ></Bookmarks>
      </main>
    </>
  )
}

export default App
