/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable import/no-unresolved */
import{ useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Content } from './styles'

import Twitter from '../../assets/icons/twitter-svgrepo-com.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Github from '../../assets/icons/github.svg'
import { ApiLoading } from '../../animations/ApiLoading'

export function Me(){

  const url = import.meta.env.VITE_API_URL

  const[user,setUser] = useState([])
  const[loading, setLoading] = useState(false)

  const createdData = user.created_at;

  console.log(createdData)

  

  useEffect(()=>{
    getData()
   },[])
  
   const getData = async()=>{
    try {
      await axios.get(url)
      .then(response => {
        const data = response.data
        setUser([data])
        setLoading(true)
      })
  
      
    } catch (error) {
      console.log(error)
    }
   }

  return(
    <Container>
      {!loading ? <div className='loading'><ApiLoading/></div>:
        <Content>
          {user.map((item)=>{
            return(
              <div className="card">
                <div className="header"><img src={item.avatar_url} /></div>
                <div className="card-body">
                  <h1>{item.name}</h1>
                  <h4>Residente: <span>{item.location}</span></h4>
                  <h4>Formado em: <span>{item.bio}</span></h4>
                  <div className="techs">
                    <h1>Techs</h1>
                    <div className="grid">
                      <p>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <span>Javascript</span>
                      </p>
                      <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <span>React</span>
                      </p>
                      <p>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <span>NodeJS</span>
                      </p>
                      <p>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" />
                        <span>Yarn</span>
                      </p>
                      <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                        <span>MySql</span>
                      </p>
                      <p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                        <span>Mongodb</span>
                      </p>
                      <p>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                        <span>Firebase</span>
                      </p>
                      <p>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                        <span>Linux</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="https://linkedin/in/thiagomurgia" target="_blank"><img src={Linkedin}/></a>
                  <a href="https://github.com/thiagomurgia" target="_blank"><img src={Github}/></a>
                  <a href="https://twitter.com/Murgiadev" target="_blank"><img src={Twitter}/></a>
                </div>
                
              </div>
            )
          })}
        </Content>
      }

    
    </Container>
  )
}