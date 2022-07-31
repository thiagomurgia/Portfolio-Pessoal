import axios from 'axios'
import { useEffect, useState } from 'react'
import { Spring, animated } from 'react-spring'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Container} from './styles'

import { ApiLoading } from '../../animations/ApiLoading'


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

    <Spring
      from={{opacity: 0}}
      to={[
        {opacity:1},
      ]}
    >
      {styles =>(
        <animated.div style={styles}>
          
          <Container>

          {!loading ? 
          <div className='api-loading'>
            <ApiLoading/>
          </div> : 
            <div className="carousel-wrapper">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              
                {repos.map((repo) => {
                  return(
                    <SwiperSlide>
                    <div className="card-wrapper" key={repo.id}>
                      <div className="card">

                      <div className="header"><h1>{repo.name}</h1></div>
                      <div className="content">
                        <p>{repo.description}</p>
                            <input value={repo.clone_url} style={{height: "2.75rem", width: "80%"}}/>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                  )
                })}
              
              
            </Swiper>
            </div>
          }

            
            

          </Container>
        </animated.div>
      )}
    </Spring>

    // <>
    // {!setLoading ? <ApiLoading/> : 
    // <>
    // <h1>Portfolio </h1>
    // <h2>User Data</h2>
    // <ul>
    //   {!loading ? <ApiLoading/> : <>
    //   {repos.map( (repo) => {
    //     return (
    //     <li key={repo.id}>
    //       <p><strong>{repo.name}</strong></p>
    //       {repo.description}

    //       </li>)
    //   })}
    //   </>}
      
    // </ul>
    // </>
    // }
    
    // </>
    
  )
}