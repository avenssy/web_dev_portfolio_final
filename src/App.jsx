import React, { useState } from 'react';
import logo from '../public/Aven Logo 1.png';
import myPicture from '../public/Grad Pic.JPG';

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

        </div>
      </div>
    </div>
  );
}

export default App;
