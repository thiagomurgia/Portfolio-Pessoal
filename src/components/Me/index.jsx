import{ useState, useEffect} from 'react'
import axios from 'axios'

export function Me(){

  const url = import.meta.env.VITE_API_URL

  const[user,setUser] = useState()

  useEffect(()=>{
    getData()
   },[])
  
   const getData = async()=>{
    try {
      await axios.get(url)
      .then(response => {
        const data = response.data
        setUser([data])
      })
  
      
    } catch (error) {
      console.log(error)
    }
   }

   console.log(user)

  return(
    <>

      {user.map( data => (
        <div>
          <img src={data.avatar_url} />
          <h1>{data.name}</h1>
        </div>
        
      ))}
    
    </>
  )
}