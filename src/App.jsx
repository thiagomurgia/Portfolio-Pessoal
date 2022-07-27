import { useState } from 'react' 
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { GlobalStyles } from "./global.styles"
import { Dock } from "./styles"




import HomeIcon from './assets/icons/home-icon.svg';
import PortfolioIcon from './assets/icons/portfolio-icon.svg';
import UserIcon from './assets/icons/user-icon.svg';
import TechnologyIcon from './assets/icons/technology-icon.svg';
import MoonIcon from './assets/icons/moon-icon.svg';
import DotsIcon from './assets/icons/dots-icon.svg';
import SunIcon from './assets/icons/sun-icon.svg';
import Message from './assets/icons/message.svg'


import {Me} from "./components/Me"
import {Techs} from "./components/Techs"
import {Portfolio} from './components/Portfolio'
import { Contact } from './components/Contact'


export function App() {



  const[showHome, setShowHome] = useState(false)
  const[showPortfolio, setShowPortfolio] = useState(false)
  const[showAbout, setShowAbout] = useState(false)
  const[showTech, setShowTech] = useState(false)
  const[contact, setContact] = useState(false)
  const[theme, setTheme] = useState(false)
  const[showDesktop, setShowDesktop] = useState(false)
  

  console.log(showHome)

  function handleHomeClick(){
    setShowHome(true)
    setShowPortfolio(false)
    setShowAbout(false)
    setShowTech(false)
    setShowDesktop(false)
    setContact(false)
  }
  
  function handlePortClick(){
    setShowHome(false)
    setShowPortfolio(true)
    setShowAbout(false)
    setShowTech(false)
    setShowDesktop(false)
    setContact(false)
  }
  
  function handleAboutClick(){
    setShowHome(false)
    setShowPortfolio(false)
    setShowAbout(true)
    setShowTech(false)
    setShowDesktop(false)
    setContact(false)
  }
  
  function handleTechClick(){
    setShowHome(false)
    setShowPortfolio(false)
    setShowAbout(false)
    setShowTech(true)
    setShowDesktop(false)
    setContact(false)
  }
  
  function handleDesktopClick(){
    setShowHome(false)
    setShowPortfolio(false)
    setShowAbout(false)
    setShowTech(false)
    setShowDesktop(true)
    setContact(false)
  }

  function handleContactClick(){
    setShowHome(false)
    setShowPortfolio(false)
    setShowAbout(false)
    setShowTech(false)
    setShowDesktop(false)
    setContact(true)
  }
  
  
    function changeThemeColor(){
      setTheme(!theme)
    }
  

  return (
    <>
    <section>
      <Header/>
        {showHome ? <Home/> : null}
        {showPortfolio ? <Portfolio/> : null}
        {showAbout ? <Me/> : null}
        {contact ? <Contact/> : null}
        {showTech ? <Techs/> : null}
        
      <Dock>
      <img src={HomeIcon} alt="home" value="home" onClick={handleHomeClick}/>
      <img src={PortfolioIcon} alt="portfolio" value="port" onClick={handlePortClick}/>
      <img src={UserIcon} alt="about-user" value="user" onClick={handleAboutClick}/>
      <img src={TechnologyIcon} alt="technologies" value="tech" onClick={handleTechClick}/>
      <img src={Message} alt="message" value="contact" onClick={handleContactClick}/>
      {theme ? <img src={MoonIcon} alt="change-theme" type="lightTheme" onClick={changeThemeColor} /> : <img src={SunIcon} alt="change-theme" type="lightTheme" onClick={changeThemeColor}/>}
      <img src={DotsIcon} alt="open-apps" value="home" onClick={handleDesktopClick}/>
    </Dock>
    </section>
    
    <GlobalStyles/>
    </>
  )
}


