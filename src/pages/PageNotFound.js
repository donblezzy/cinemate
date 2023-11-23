import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pageNot from "../assets/images/404.jpg"
import Button from '../components/Button'

const PageNotFound = () => {

  // Dynamic Title design
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`
  })


  return (
    <main>
      <section>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
         {/* To make a bigger image a smaller one */}
         
          {/* <div className='max-w-lg'>
            <img className='rounded' src={pageNot} alt="" />
          </div> */}
          <img className='rounded' src={pageNot} alt="" />
        </div>


        <div className='flex justify-center bg my-7'>
          <Link to="/">
          {/* to create a button directly */}
            {/* <button className='w-64 text-white rounded-lg px-5 py-2.5 text-xl font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>Back to Cinemate</button> */}
           {/* When you turn the button into a components  */}
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
