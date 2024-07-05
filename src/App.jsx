import React, { useState } from 'react';
import logo from '../public/Aven Logo 1.png';
import myPicture from '../public/Grad Pic.JPG';
import animatedProgrammer from '../public/Animated Programmer.gif';

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
            <p className='main-smaller-words'>I like to craft solid and scalable frontend products with great user experiences.</p>
          </div>
          <div className='main-low-words'>
            <p className='low-words'>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <p className='low-words'>Proven experience building successful products for clients across several countries.</p>
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
            <p className='third-title-words'>Over the years,</p>
            <p className='third-small-words'>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>
            <br></br>
            <p className='third-small-words'>Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for over 3 million merchants across the world.</p>
            <br></br>
            <p className='third-small-words'>Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored towards automated VAT compliance for multi-channel sellers in Europe.</p>
            <br></br>
            <p className='third-small-words'>Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.</p>
            <br></br>
            <p className='third-small-words'>I once also led the frontend team at Conectar, an e-learning startup through building multiple React applications into a single robust learning platform.</p>
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
          <button className='fourth-button'>See my work</button>
        </div>
      </div>
      <div className='fifth-main-div'>
        <p className='fifth-main-send'> Send me a message!</p>
        <p className='fifth-smaller-words'>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form className='fifth-user-div'>
          <div className='fifth-main-input-div'>
            <div className='fifth-input-div'>
              <label className="fifth-label" for="name">Your Name</label>
              <input className="fifth-input-margin" type="text" id='name' name="name" placeholder='Enter your name'></input>
            </div>

            <div className='fifth-input-div'>
              <label className="fifth-label" for="email">Email Address</label>
              <input className="fifth-input-margin" type="email" id='email' name="email" placeholder='Enter your email address'></input>
            </div>
          </div>

          <div className='fifth-message-div'>
            <label className="fifth-label" for="message">Your Message</label>
            <input className="fifth-input-margin" type="text" id='message' name="message" placeholder='Hi! I think we need a website for our products at Company X. How soon can you hop on to discuss?'></input>
          </div>

          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
