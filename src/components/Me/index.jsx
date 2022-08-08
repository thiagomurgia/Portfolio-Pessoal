import{ useState, useEffect} from 'react'
import axios from 'axios'
import { Container } from './styles'

import Twitter from '../../assets/icons/twitter-svgrepo-com.svg'
import Linkedin from '../../assets/icons/linkedin.svg'

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
            <div className="content">
            <h1>{data.name}</h1>
              <h3>Formação {data.bio}</h3>
              <h3>De: {data.location}</h3>
              <div className="social-media">
                <a href='https://twitter.com/Murgiadev' target="_blank">
                  <img src={Twitter} alt="twitter"/>;
                </a>
                <a href='https://linkedin.com/in/thiagomurgia' target="_blank">
                  <img src={Linkedin} alt="linkedin"/>;
                </a>
              </div>
            </div>
            </div>
          </div>
        )
      })}
    
    </Container>
  )
}