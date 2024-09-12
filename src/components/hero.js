import React, { useEffect } from 'react'
import { motion, useTransform, useViewportScroll } from "framer-motion"
import resume from '../images/cv.pdf'
import logo from "../images/logo.png";

const transition = { duration: .8, ease: 'easeInOut', delay: .8 }

const Hero = ({ onCursor, setToggleMenu }) => {
    
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 4000], [0, -650]);

    useEffect(() => {

        setTimeout(() => {
            document.body.style.overflow = "visible"
        }, 3000)

    })

    return (
      <>
        <motion.header
          className="header maxwidth"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="container">
            <motion.nav
              id="hero"
              className="nav"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, ...transition },
              }}
            >
              <img className="me" src={logo} alt="me" style={{ y: y1 }} />
              <ul>
                <li>
                  <a
                    onMouseLeave={onCursor}
                    onMouseEnter={() => onCursor("hovered")}
                    href="#about"
                  >
                    about
                  </a>
                </li>
                <li>
                  <a
                    onMouseLeave={onCursor}
                    onMouseEnter={() => onCursor("hovered")}
                    href="#project"
                  >
                    projects
                  </a>
                </li>
                <li>
                  <a
                    onMouseLeave={onCursor}
                    onMouseEnter={() => onCursor("hovered")}
                    href={resume}
                    download
                  >
                    resume
                  </a>
                </li>
                <li>
                  <a
                    onMouseLeave={onCursor}
                    onMouseEnter={() => onCursor("hovered")}
                    href="#contact"
                  >
                    contact
                  </a>
                </li>
              </ul>

              <a
                href="#menu"
                className="nav-toggle"
                onClick={() => setToggleMenu(true)}
              >
                <span></span>
                <span></span>
              </a>
            </motion.nav>
          </div>

          <motion.div className="banner">
            <div className="banner__upper">
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: transition }}
              >
                 Experienced Front-end developer
              </motion.h1>
              
            </div>

            <motion.div
              className="banner__lower"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.8, ...transition },
              }}
            >
              <div className="IvanHill">
                
              </div>
            </motion.div>
          </motion.div>
        </motion.header>
      </>
    );
}

export default Hero
