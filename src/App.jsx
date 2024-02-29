import "./App.css";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { useRef, useState } from "react";
import logo from "./logo-3.png";
import { useMediaQuery } from "react-responsive";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const scrollToSection = (ref) => {
    closeMobileMenu();

    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock");
  };
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("lock");
  };

  return (
    <>
      <header>
        <div className="header-container">
          <a className="container" href="#home">
            <img className="logo" src={logo} alt="logo" />
            <span className="logo-name">isage</span>
          </a>
          <nav
            className={`nav-container ${isMenuOpen ? "open" : ""}`}
            // hidden={!isMobile}
          >
            <ul className="menu">
              <li className="menu-item">
                <a
                  onClick={() => {
                    scrollToSection(homeRef);
                    closeMobileMenu();
                  }}
                >
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a
                  onClick={() => {
                    scrollToSection(servicesRef);
                    closeMobileMenu();
                  }}
                >
                  Services
                </a>
              </li>
              <li className="menu-item">
                <a
                  onClick={() => {
                    scrollToSection(featuresRef);
                    closeMobileMenu();
                  }}
                >
                  Pricing
                </a>
              </li>
              <li className="menu-item">
                <a
                  onClick={() => {
                    scrollToSection(aboutRef);
                    closeMobileMenu();
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="button-container">
            <button className="primary-button"> Log In </button>

            <button className="burger" hidden={!isMobile} onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.991 511.991"
                  // style="enable-background:new 0 0 511.991 511.991;"
                  // xml:space="preserve"
                  width="22"
                  height="22"
                >
                  <g>
                    <path d="M286.161,255.867L505.745,36.283c8.185-8.474,7.951-21.98-0.523-30.165c-8.267-7.985-21.375-7.985-29.642,0   L255.995,225.702L36.411,6.118c-8.475-8.185-21.98-7.95-30.165,0.524c-7.985,8.267-7.985,21.374,0,29.641L225.83,255.867   L6.246,475.451c-8.328,8.331-8.328,21.835,0,30.165l0,0c8.331,8.328,21.835,8.328,30.165,0l219.584-219.584l219.584,219.584   c8.331,8.328,21.835,8.328,30.165,0l0,0c8.328-8.331,8.328-21.835,0-30.165L286.161,255.867z" />
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path d="M24,3.5c0,.28-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H23.5c.28,0,.5,.22,.5,.5ZM7.5,21H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H7.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5ZM15.5,12H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H15.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <main>
        <section ref={homeRef} id="home">
          <Home />
        </section>

        <section ref={servicesRef}>
          <Services />
        </section>
        <section ref={featuresRef}>
          <Pricing />
        </section>
        <section ref={aboutRef}>
          <Contact />
        </section>
      </main>
    </>
  );
}
export default App;
