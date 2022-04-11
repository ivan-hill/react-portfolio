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
                  Hi, my name is Ivan Hill and I am a Junior Front-End Developer
                  located in Lausanne,Switzerland. My goal is to use my skills
                  to create Landing pages, HTML Emails, and Front-End
                  applications, at a creative agency or marketing department.
                  I'm authorizied to work in the United States and Switzerland.
                </p>

                <p className="interest">
                  Willing to relocate for the right opportunity.
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
                y: 72,
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
             </ul>
          </motion.div>
        </section>
      </>
    );
}

export default About
