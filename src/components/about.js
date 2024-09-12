import React from 'react'
import {
    useViewportScroll,
    motion,
    useTransform,
    useAnimation,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dev from '../images/dev.jpg'
import { ReactComponent as Arrow1 } from '../images/Arrow 1.svg'
import resume from '../images/cv.pdf'


const transition = { duration: 1.5, ease: [.6, -.05, .01, .9] }

const About = ({ onCursor }) => {
    const { scrollY } = useViewportScroll();

    const y1 = useTransform(scrollY, [0, 4000], [0, -650])

    const animation = useAnimation()

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const [ref2, inView2] = useInView({
        triggerOnce: true
    })

    React.useEffect(() => {
        
        inView && animation.start('visible')
        inView2 && animation.start('visible2')

    }, [animation, inView, inView2])


    return (
      <>
        <section className="about maxwidth">
          <div id="about" className="about__main">
            <motion.img
              className="me"
              src={dev}
              alt="logo"
              style={{ y: y1 }}
            />
            <div className="text">
              <h1>about me</h1>
              <motion.div
                className="text__inner"
                ref={ref}
                animate={animation}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: transition,
                  },
                  hidden: {
                    opacity: 0,
                    y: 72,
                  },
                }}
              >
                <p>
                 Experienced Frontend Developer skilled in creating web assets for small to medium-sized businesses. 
                </p>

                <p className="interest">
                  I am passionate about creating web assets that are visually appealing and user-friendly. I am proficient in HTML, CSS, JavaScript, React, Shopify and WordPress. I am always eager to learn new technologies and improve my skills.
                </p>

                <p>
                 My ability to work with little or no supervision, great time management skills, and personable customer service skills. 
                </p>

                <button
                  className="btn"
                  onMouseLeave={onCursor}
                  onMouseEnter={() => onCursor("hovered")}
                >
                  <div className="arrow">
                    <Arrow1 className="a1" />
                  </div>
                  <a href={resume} download>
                    Resume
                  </a>
                </button>
              </motion.div>
            </div>
          </div>

          <motion.div
            ref={ref2}
            animate={animation}
            initial="hidden"
            variants={{
              visible2: {
                opacity: 1,
                y: 0,
                transition: transition,
              },
              hidden: {
                opacity: 0,
                y: 82,
              },
            }}
            className="tech-stack container"
          >
            
            <h3>tech - stack</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React js</li>
              <li>WordPress</li>
              <li>Shopify</li>   
             </ul>
          </motion.div>
        </section>
      </>
    );
}

export default About
