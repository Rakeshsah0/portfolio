import React,{useState,useEffect} from 'react'
import {About, Footer, Header, Skills, Testimonial, Work} from './container';
import { Navbar,Preloader } from './components'
import './App.scss'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkmode, setDarkmode] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1800);
  }, []);
  return (
    <>
    {isLoading?(<Preloader/>):(<div className={`app ${darkmode?'dark-mode':''}`}>
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode}/>
      <Header darkmode={darkmode}/>
      <About/>
      <Work/>
      <Skills darkmode={darkmode}/>
      <Testimonial/>
      <Footer/>
    </div>)}
    </>
  )
}

export default App