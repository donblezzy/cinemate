import React, {useEffect} from 'react'

const DynamicTitle = (title) => {
    // Dynamic Title design
   useEffect(() => {
    document.title = `${title} / Cinemate`
  })
  return null
}

export default DynamicTitle
