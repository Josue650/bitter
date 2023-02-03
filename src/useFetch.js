
import { useEffect, useState } from 'react'


export const useFetch = (url) => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchData = async ()  => {
            setLoading(true)
            try{
            const response = await fetch(url)
            const data = await response.json()
            setApiData(data)
        }catch(err){
            setError(err)
        }
        setLoading(false)
        }
        fetchData()
    }, [url])


const reFetchData = async ()  => {
    setLoading(true)
    try{
    const response = await fetch(url)
    const data = await response.json() 
    setApiData(data)
}catch(err){
    setError(err)
}
setLoading(false)
}

return {apiData,loading,error, reFetchData}
}

