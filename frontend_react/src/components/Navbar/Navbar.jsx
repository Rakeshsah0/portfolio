import React, { useState,useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { easeOut, motion } from "framer-motion";
import { images } from "../../constants";
import { client } from "../../client";
import { BsMoonFill, BsSunFill} from "react-icons/bs";

const Navbar = ({darkmode,setDarkmode}) => {
  const [resumeUrl, setResumeUrl] = useState([])
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const resumeQuery=`*[_type == 'resume'][0]{
      'url': resume.asset->url,
      'name': Name
    }`;
    client.fetch(resumeQuery).then((data) => {
      setResumeUrl(data);
    });
  }, [])
  
  const handleClick=()=>{
    setDarkmode(!darkmode)
  }
  return (
    
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <div className="app__navbar-theme" onClick={handleClick}>
        {!darkmode?(<BsMoonFill/>):(<BsSunFill className="app__navbar-darkmode"/>)}
        </div>
        <div className="app__navbar-logo-img">
        {darkmode?(<img src={images.logodark} alt="logo" />): (<img src={images.logo} alt="logo" />)}
        </div>
      </div>
      
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <div/>
          <a href={resumeUrl.url} download>Resume</a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={{ item }}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="app__flex p-text">
          <a href={resumeUrl.url} download >Resume</a>
        </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
    
  );
};

export default Navbar;
