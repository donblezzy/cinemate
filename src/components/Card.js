import React from 'react'
import { Link } from 'react-router-dom'
import Backup from "../assets/images/backup.jpg"

const Card = ({movie}) => {

  const {id, original_title, overview, poster_path} = movie
  // INCASE THE API DIDNT BRING IMAGE, MY Backup IMAGE WILL BE DISPLAYED
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup
  return (
    <div>
        <div className="m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/movie/${id}`}>
            <img className="rounded-t-lg" src={image} alt="" />
          </Link>
          <div className="p-5">
            <Link to={`/movie/${id}`}>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            </Link>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">`${overview.substring(0, 70)}`</p>
          </div>
        </div>
    </div>
  )
}

export default Card





