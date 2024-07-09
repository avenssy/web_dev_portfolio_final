import React, { useState } from 'react';
import logo from '/Aven Logo 1.png';
import myPicture from '/Grad Pic.JPG';
import linkedIn from '/linkedin-icon.png';
import gitHub from '/github-logo.png';
import resume from '/AvenSy_FullStackDev_MERN_2023.pdf';
import animatedProgrammer from '/Animated Programmer.gif';

function App() {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="main-div">
        <div className="header-div">
          <img src={logo} className='main-logo'/>
          <div className={`container ${active ? 'active' : ''}`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 200 200">
              <g stroke-width="6.5" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#4831d4"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#4831d4"
              />
              <path
                d="M72 125.143h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#4831d4"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#4831d4"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#4831d4"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#4831d4"
              />
              </g>
            </svg>
          </div> 
        </div>
        <div className='inner-content-primary'>
          <p className='full-stack-developer'>Full-Stack Developer.</p>
          <div>
            <p className='main-smaller-words'>I love to craft amazing websites with great user experiences.</p>
          </div>
          <div className='main-low-words'>
            <p className='low-words'>Highly eager to deepen knowledge in web development and progressive enhancement.</p>
            <p className='low-words'>Dedicated individual in his work and output in any given task.</p>
          </div>
        </div>
        <div className='main-picture-div'>
          <img src={myPicture} className='my-picture'/>
        </div>
      </div>
      <div className='second-main-div'>
        <div className='second-sub-div'>
          <div className='second-words-div'>
            <p className='second-title-word'>Design</p>
            <p className='second-small-words'>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
          </div>
        </div>
        <div className='second-sub-div-two'>
          <div className='second-words-div-two'>
            <p className='second-title-word'>Engineering</p>
            <p className='second-small-words'>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
          </div>
        </div>
      </div>
      <div className='third-main-div'>
        <div className='third-sub-div'>
          <div className='third-words-div'>
            <p className='third-title-words'>A little about me,</p>
            <p className='third-small-words'>I have built websites to showcase my knowledge and passion in web development to show to possible employers in the future.</p>
            <br></br>
            <p className='third-small-words'>Currently, I work at Accenture Philippines as an SAP software engineer utilizing ABAP to craft important applications and enhancements for technical users in 5 different countries.</p>
            <br></br>
            <p className='third-small-words'>In this current role. I am exposed to communicate with both technical and nontechnical people in all 5 countries. I have learned how to explain the program with ease, where a nontechnical person can easily comprehend it, which I find very crucial in today's wild technical market.</p>
            <br></br>
            <p className='third-small-words'>On March 2024, I graduated Uplift Code Camp, wherein we were exposed to the MERN stack, assigning us with projects which were reviewed by our mentors, who are professionals in the field.</p>
            <br></br>
            <p className='third-small-words'>Prior to web development, I was a licensed mechanical engineer, exposed to problems that required me to think critically and outside the box.</p>
          </div>
          <div className='third-gif-programmer'>
            <img src={animatedProgrammer}/> 
          </div>
        </div>
      </div>
      <div className='fourth-main-div'>
        <div className='fourth-content-div'>
          <p className='fourth-title-words'>I build & design stuff</p>
          <p className='fourth-small-words'>Open source projects, web apps and experimentals.</p>
          <a href="https://github.com/avenssy" className='no-text-decoration'><button className='fourth-button'>See my work</button></a>
        </div>
      </div>
      <div className='fifth-main-div'>
        <p className='fifth-main-send'> Send me a message!</p>
        <p className='fifth-smaller-words'>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form className='fifth-user-div'>
          <div className='fifth-main-input-div'>

            <div className="col-3">
              <input className="effect-1" type="text" placeholder="Your Name"></input>
                <span className="focus-border"></span>
            </div>

            <div className="col-3">
              <input className="effect-1" type="email" placeholder="Email Address"></input>
                <span className="focus-border"></span>
            </div>

          </div>

          <div className='fifth-message-div'>
            <div className="col-3">
              <input className="effect-1" type="text" placeholder="Your message here"></input>
                <span className="focus-border"></span>
            </div>
          </div>

          <div className='fifth-submit-div'>
            <button className='fifth-button'>SUBMIT</button>
          </div>
        </form>
      </div>
      <div className='sixth-main-div'>
        <div className='sixth-links-div'>
          <a className='sixth-links-words' href="https://www.linkedin.com/in/avenssy/"><p>My Shelf</p></a>
          <a className='sixth-links-words' href="https://github.com/avenssy"><p>My Work</p></a>
          <a className='sixth-links-words' href={resume}><p>My Resume</p></a>
        </div>
        <div className='sixth-footer-div'>
           <p className='sixth-footer-words'>© Aven Sy 2024</p>
           <a href="https://www.linkedin.com/in/avenssy/"><img src={linkedIn} className='sixth-link-images'/></a>
           <a href="https://github.com/avenssy"><img src={gitHub} className='sixth-link-images'/></a>
        </div>
      </div>
    </div>
  );
}

export default App;
