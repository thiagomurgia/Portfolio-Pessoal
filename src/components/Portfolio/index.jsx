import axios from 'axios'
import { useEffect, useState } from 'react'


export function Portfolio(){

  const url = import.meta.env.VITE_API_URL


  const[repos, setRepos] = useState([])
  const[loading, setLoading] = useState(false)

 useEffect(()=>{
  getData()
 },[])

 const getData = async()=>{
  try {
    await axios.get(url+'/repos')
    .then(response => {
      const data = response.data
      setRepos(data)
      setLoading(true)
    })

    
  } catch (error) {
    console.log(error)
  }
 }

  return(
    <>
    {!setLoading ? <p>Carregando</p> : 
    <>
    <h1>Portfolio </h1>
    <h2>User Data</h2>
    <ul>
      {repos.map( (repo) => {
        return <li key={repo.id}>{repo.id}</li>
      })}
    </ul>
    </>
    }
    
    </>
    
  )
}