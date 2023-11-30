import {useEffect, useState, useCallback} from 'react'

const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  
  const fetchAPI = useCallback( async() => {
    const response = await fetch(url)
    const data = await response.json()
    setLoading(false)
    setData(data)
  }, [url])
  
  useEffect(()=>{
    fetchAPI()
  },[url, fetchAPI])
  
  return {loading, data}
  
}



export default useFetch