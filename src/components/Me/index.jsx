import{ useState, useEffect} from 'react'
import axios from 'axios'
import { Container } from './styles'

export function Me(){

  const url = import.meta.env.VITE_API_URL

  const[user,setUser] = useState([])

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

  return(
    <Container>

      {user.map((data)=>{
        return(
          <div className="card-profile" key={data.id}>
            <div className="pic-profile">
              <img src={data.avatar_url} alt="" srcset="" />
              <h1>{data.name}</h1>
            </div>
          </div>
        )
      })}
    
    </Container>
  )
}