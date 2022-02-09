import React from 'react'
import { ReactComponent as Up } from '../images/up.svg'

const Contact = ({ onCursor }) => {
    return (
      <>
        <footer className="footer container maxwidth">
          <h2 id="contact">Get in touch</h2>
          <div className="footer__inner">
            <a
              className="top"
              href="#hero"
              onMouseLeave={onCursor}
              onMouseEnter={() => onCursor("hovered")}
            >
              BACK TO TOP
              <Up />
            </a>
            <div className="social">
              <a
                onMouseLeave={onCursor}
                onMouseEnter={() => onCursor("hovered")}
                className="email"
                href="mailto:ivan.hill81@gmail.com"
              >
                ivan.hill81@gmail.com
              </a>
              <div className="social__icons">
                <a
                  onMouseLeave={onCursor}
                  onMouseEnter={() => onCursor("hovered")}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="linkedin.com/in/ivan-hill-21244ba6"
                >
                  linkedin
                </a>
                <a
                  onMouseLeave={onCursor}
                  onMouseEnter={() => onCursor("hovered")}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ivan-hill"
                >
                  github
                </a>
              </div>
            </div>
          </div>
          <p>Ivan Hill | Front-End Developer </p>
        </footer>
      </>
    );
}

export default Contact
