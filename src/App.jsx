/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import { Header } from './components/Header'
// eslint-disable-next-line import/no-unresolved
import { Home } from './components/Home'
import { GlobalStyles } from './global.styles'
import { Dock } from './styles'




import HomeIcon from './assets/icons/home-icon.svg'
import PortfolioIcon from './assets/icons/portfolio-icon.svg'
import UserIcon from './assets/icons/user-icon.svg'
import Return from './assets/icons/return.svg'
import Message from './assets/icons/message.svg'


// eslint-disable-next-line import/no-unresolved
import {Me} from './components/Me'
// eslint-disable-next-line import/no-unresolved
import {Portfolio} from './components/Portfolio'
// eslint-disable-next-line import/no-unresolved
import { Contact } from './components/Contact'


export function App() {



  const[showHome, setShowHome] = useState(false)
  const[showPortfolio, setShowPortfolio] = useState(false)
  const[showAbout, setShowAbout] = useState(false)
  const[contact, setContact] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const[showDesktop, setShowDesktop] = useState(false)
  

  function handleHomeClick(){
    setShowHome(true)
    setShowPortfolio(false)
    setShowAbout(false)
    setShowDesktop(false)
    setContact(false)
  }
  
  function handlePortClick(){
    setShowHome(false)
    setShowPortfolio(true)
    setShowAbout(false)
    setShowDesktop(false)
    setContact(false)
  }
  
  function handleAboutClick(){
    setShowHome(false)
    setShowPortfolio(false)
    setShowAbout(true)
    setShowDesktop(false)
    setContact(false)
  }
  
  
  function handleDesktopClick(){
    setShowHome(false)
    setShowPortfolio(false)
    setShowAbout(false)
    setShowDesktop(true)
    setContact(false)
  }

  function handleContactClick(){
    setShowHome(false)
    setShowPortfolio(false)
    setShowAbout(false)
    setContact(true)
  }
  

  return (
    <>
    <section>
      <Header/>
        {showHome ? <Home/> : null}
        {showPortfolio ? <Portfolio/> : null}
        {showAbout ? <Me/> : null}
        {contact ? <Contact/> : null}
        
      <Dock>
      <img src={HomeIcon} alt="home" value="home" onClick={handleHomeClick}/>
      <img src={PortfolioIcon} alt="portfolio" value="port" onClick={handlePortClick}/>
      <img src={UserIcon} alt="about-user" value="user" onClick={handleAboutClick}/>
      <img src={Message} alt="message" value="contact" onClick={handleContactClick}/>
      <img src={Return} alt="open-apps" value="home" onClick={handleDesktopClick}/>
    </Dock>
    </section>
    
    <GlobalStyles/>
    </>
  )
}


