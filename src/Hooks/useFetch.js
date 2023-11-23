import  { useState, useEffect } from 'react'
//for searching (using the search box), U update the queryTerm And URL by Adding &query=${queryTerm}
const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([])
  // HIDDEN API KEY IS THE .ENV FILE BELOW
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
  useEffect(()=> {
    async function fetchMovies(){
      const response = await fetch(url)
      const json = await response.json()
      setData(json.results)
      // const data = await response.json()
      // setMovies(data.results)
    }
    fetchMovies()
  }, [url])

  return {data}
  // return (
  //   <div>
      
  //   </div>
  // )
}

export default useFetch
