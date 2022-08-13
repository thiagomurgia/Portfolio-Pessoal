/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Spring, animated } from 'react-spring'

import Copy from '../../assets/icons/copy.svg'
import { Copy as CopyAnim } from '../../animations/Copy'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";

import { Container} from './styles'

import { ApiLoading } from '../../animations/ApiLoading'

import {CopyToClipboard} from 'react-copy-to-clipboard'


export function Portfolio(){

  const url = import.meta.env.VITE_API_URL


  const[repos, setRepos] = useState([])
  const[loading, setLoading] = useState(false)
  const[copy, setCopy]= useState(false)

  function clipboardCopy(){
    setCopy(true)
    setTimeout(()=>{
      setCopy(false)
    }, 3000)
  }



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
                    <SwiperSlide key={repo.id}>
                    <div className="card-wrapper">
                      <div className="card">

                      <div className="header"><h1>Repositório: </h1> <h3>{repo.name}</h3></div>
                      <div className="content">
                        <div>
                        <div>
                          <p>{repo.description}</p>
                          <div className='repo-url'>
                          <input value={repo.clone_url} disabled/>
                          <CopyToClipboard
                          text={repo.clone_url}
                          onCopy={() => clipboardCopy()}>
                            {copy ? <span><CopyAnim/> <small>Copiado!</small></span> : <span><img src={Copy}/></span>}
                          </CopyToClipboard>
                          </div>
                            
                            </div>
                        </div>
                        
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