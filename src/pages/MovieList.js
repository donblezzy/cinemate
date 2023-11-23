import React from 'react'
import Card from '../components/Card'
import useFetch from '../Hooks/useFetch'
import DynamicTitle from '../Hooks/DynamicTitle'


const MovieList = ({ apiPath, title }) => {
  // TO IMPORT THE MOVIES
  // const [movies, setMovies] = useState([])

  // custom hook to show the pages individually
  const { data: movies } = useFetch(apiPath)

   // Dynamic Title design
   const pageTitle = DynamicTitle(title)



  return (
    <main>
      <section className=''>
      {/* to make it justify evenly on every device with the setting from tailwind.config and then add it below */}
        <div className='flex flex-wrap other:justify-evenly'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />

          ))}
        </div>
      </section>

    </main>
  )
}

export default MovieList


