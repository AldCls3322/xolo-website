import './App.css';
import { useState, useEffect, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Routes, Route, Switch, useLocation } from 'react-router-dom';
import { useAnimate, stagger, useScroll } from "framer-motion";
// import { ThemeProvider }  from 'styled-components';
// import { darkTheme, lightTheme, GlobalStyles } from './themes';

/* COMPONENTS */
import { MenuToggle } from "./components/Navbar/MenuToggle.tsx";
import Menu from "./components/Navbar/Menu";

import Header from './components/Header';
import Navbar from "./components/Navbar/Navbar2";
import Footer from './components/Footer';
// import Test from "./components/HomePage/Test";
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';
import NoiseOverlay from './components/NoiseOverlay';

const HomeTitle = lazy(() => import('./components/HomePage/HomeTitle'))
const MessagesSection = lazy(() => import("./components/HomePage/MessagesSection"))
const Section1 = lazy(() => import('./components/HomePage/Section1'))
const HomeGrid = lazy(() => import('./components/HomePage/HomeGrid'))
const Section4 = lazy(() => import("./components/HomePage/Section4"))
const Section5 = lazy(() => import("./components/HomePage/Section5"))
// const VideoPlayerSection = lazy(() => import("./components/HomePage/VideoPlayerSection"))

const Section2 = lazy(() => import('./components/AboutPage/Section2'))
const Section3 = lazy(() => import('./components/AboutPage/Section3'))
const Section6 = lazy(() => import('./components/AboutPage/Section6'))
const Section7 = lazy(() => import('./components/AboutPage/Section7'))
const Section8 = lazy(() => import('./components/AboutPage/Section8'))
const AboutTitle = lazy(() => import('./components/AboutPage/AboutTitle'))

const ContactSection = lazy(() => import("./components/ContactPage/ContactSection"))

function useMenuAnimation(isOpen) {
  //NAVBAR1
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.28, 0.65, 0.53, 0.96], duration: 0.5 },
          ],
          [
            ".menu-option",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            ".menu-option",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

  function App() {
    //Get values
    // useEffect(() => {
    //   const color = getComputedStyle(document.documentElement).getPropertyValue('--color-body')
    //   console.log(color);
    // }, []);

    //NAVBAR
    // const [isopen,setIsopen] = useState(false)
    // const navToggle = () => {
    //   setIsopen(!isopen)
    //   //console.log(isopen)
    // }
    // const navOff = () => {
    //   setIsopen(false)
    // }

    //NavBar
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);

    const backToTop = () => window.scrollTo({ top: 0 });

  return (
    <Router>
      <div className="App" ref={scope}>
        <NoiseOverlay />
        <Header isOpen={isOpen} />
        <Menu toggle={() => setIsOpen(!isOpen)} backToTop={backToTop} />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />

        <Background />
        <Routes>
          <Route
            path="/contact"
            element={[
              <Suspense fallback={<LoadingScreen />}>
                <ContactSection />
              </Suspense>,
            ]}
          />
          <Route
            path="/about"
            element={[
              <Suspense fallback={<LoadingScreen />}>
                <AboutTitle />
                <Section3 />
                <Section8 />
                <Section6 />
                <Section2 />
                {/* <Section7 /> */}
              </Suspense>,
            ]}
          />
          <Route path="/how-to-use" element={[<LoadingScreen />]} />
          <Route
            path="/"
            element={[
              <Suspense fallback={<LoadingScreen />}>
                <HomeTitle />
                <MessagesSection />
                <Section4 />
                <HomeGrid />
                <Section5 />
                <Section1 />
              </Suspense>,
            ]}
          />
        </Routes>
        <Footer backToTop={backToTop} />
      </div>
    </Router>
  );
}

export default App;
