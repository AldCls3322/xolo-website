import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Switch, useLocation } from 'react-router-dom';
// import { ThemeProvider }  from 'styled-components';
// import { darkTheme, lightTheme, GlobalStyles } from './themes';

/* COMPONENTS */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeTitle from './components/HomePage/HomeTitle';
import MessagesSection from "./components/HomePage/MessagesSection";
import Section1 from './components/HomePage/Section1';
import HomeGrid from './components/HomePage/HomeGrid';
import Section4 from "./components/HomePage/Section4";
import Section5 from "./components/HomePage/Section5";
import VideoPlayerSection from "./components/HomePage/VideoPlayerSection";

import Section2 from './components/AboutPage/Section2';
import Section3 from './components/AboutPage/Section3';
import Section6 from './components/AboutPage/Section6';
import Section7 from './components/AboutPage/Section7';
import Section8 from './components/AboutPage/Section8';
import AboutTitle from './components/AboutPage/AboutTitle';

import ContactSection from "./components/ContactPage/ContactSection";

// import Test from "./components/HomePage/Test";
import Background from './components/Background';

function App() {
  
  //Get values
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--color-body')
    console.log(color);
  }, []);

  const [isopen,setIsopen] = useState(false)
  const navToggle = () => {
    setIsopen(!isopen)
    //console.log(isopen)
  }
  const navOff = () => {
    setIsopen(false)
  }

  return (
    <Router>
      <div className="App">
        <Header navToggle={navToggle} isOpen={isopen} />
        <Navbar navToggle={navToggle} isOpen={isopen} />
        <Background />
        <Routes>
          <Route path="/contact" element={[<ContactSection />]} />
          <Route
            path="/about"
            element={[
              <AboutTitle />,
              <Section3 />,
              <Section8 />,
              <Section6 />,
              <Section2 />,
              // <Section7 />,
            ]}
          />
          <Route path="/how-to-use" element={[
            
          ]} />
          <Route
            path="/"
            element={[
              <HomeTitle />,
              <MessagesSection />,
              <Section4 />,
              <HomeGrid />,
              <Section5 />,
              <Section1 />,
              <VideoPlayerSection />,
            ]}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
