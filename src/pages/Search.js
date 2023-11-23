// TO MAKE D SEARCH WORK, U IMPORT FROM THE MovieList AND JST ADD QUERY AND SEARCHPARAMS
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import useFetch from '../Hooks/useFetch'
import DynamicTitle from '../Hooks/DynamicTitle'

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")

  const { data: movies } = useFetch(apiPath, queryTerm)

  const pageTitle = DynamicTitle(`Search result for ${queryTerm}`)

   


  return (
    <main>
      {/* TO SHOW SEARCH RESULTS WHEN YOU TYPE IN SEARCH BOX */}
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for "${queryTerm}"` : `Results for "${queryTerm}" `}</p>
      </section>
      <section className=''>
        <div className='flex flex-wrap'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />

          ))}
        </div>
      </section>

    </main>
  )
}

export default Search
