import React, { useEffect, useState } from 'react'
import DynamicTitle from '../Hooks/DynamicTitle'
import { useParams } from 'react-router-dom'
import Backup from '../assets/images/backup.jpg'

const MovieDetail = () => {
  // TO CREATE THE MOVIE DETAIL PAGE
  const params = useParams();
  // console.log(params)

  const [movieData, setMovieData] = useState({})
  const image = movieData.poster_path ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : Backup

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=7615474df0a9feb537bdad49b8b2e800`)
      const json = await response.json()
      setMovieData(json)
      // console.log(json)
    }
    fetchMovie()
  }, [])

   // Dynamic Title design
   const pageTitle = DynamicTitle(movieData.title)
  

  return (
    <main>
      <section className='flex flex-wrap justify-around py-5'>
        {/* 2 Divs is needed, one for the image  */}
        <div className='max-w-sm'>
          <img className='rounded' src={image} alt={movieData.title} />
        </div>

        {/* 2 Divs is needed, two for the details  */}
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movieData.title}</h1>
          <p className='my-4'>{movieData.overview}</p>

          {/* to show the genres of the movie */}
          {movieData.genres ? (
            <p className='my-7'>
              {movieData.genres.map((genre) => (
                <span key={genre.id} className='mr-2 rounded border border-gray-600 dark:border-gray-600 p-2'>{genre.name}</span>
              ))}

            </p>
          ) : ""}

          {/* To show the ratings(i used flowbite rating components) */}
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 font-bold text-gray-900 dark:text-white">{movieData.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">{movieData.vote_count} reviews</span>
          </div>

          {/* To show the Run time */}
          <p className='my-3'>
            <span className='font-bold mr-2'>Runtime:</span>
            <span>{movieData.runtime} min.</span>
          </p>

          {/* To show the Budget */}

          <p className='my-3'>
            <span className='font-bold mr-2'>Budget:</span>
            <span>{movieData.budget}</span>
          </p>

          {/* To show the Revenue */}

          <p className='my-3'>
            <span className='font-bold mr-2'>Revenue:</span>
            <span>{movieData.revenue}</span>
          </p>

          {/* To show the Release Date */}
          <p className='my-3'>
            <span className='font-bold mr-2'>Release Date:</span>
            <span>{movieData.release_date}</span>
          </p>

           {/* To show the imdb code with link */}
           <p className='my-3'>
            <span className='font-bold mr-2'>IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movieData.imdb_id}`} target='_blank' rel='noreferrer'>{movieData.imdb_id}</a>
          </p>

        

        </div>
      </section>
    </main>
  )
}

export default MovieDetail
