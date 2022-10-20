import React from 'react';

import './Creators.css';

export default function Creators() {
  return (
    <div>
      <div className="creators-container">
        <div className="creators">
          <div className="andrew">
            <img className="image" src={require('./andrew.jpg')} />
            <div className="names">Andrew</div>
            <a href="https://www.linkedin.com/in/andrewjamesboyle/">
              <img className="linkedin" alt="linkedin" src={require('./linkedin.png')} />
            </a>
            <a href="https://github.com/andrewjamesboyle">
              <img className="github" alt="github" src={require('./github.png')} />
            </a>
          </div>
          <div className="zach">
            <img className="image" src={require('./zatchery.JPG')} />
            <div className="names">Zach</div>
            <a href="https://www.linkedin.com/in/zachary-sultan/">
              <img className="linkedin" alt="linkedin" src={require('./linkedin.png')} />
            </a>
            <a href="https://github.com/Zacharyjsultan">
              <img className="github" alt="github" src={require('./github.png')} />
            </a>
          </div>
          <div className="charlie">
            <img className="image" src={require('./charlie.png')} />
            <div className="names">Charlie</div>
            <a href="https://www.linkedin.com/in/charles-crabtree/">
              <img className="linkedin" alt="linkedin" src={require('./linkedin.png')} />
            </a>
            <a href="https://www.linkedin.com/in/charles-crabtree/">
              <img className="github" alt="github" src={require('./github.png')} />
            </a>
          </div>
          <div className="kyle">
            <img className="image" src={require('./me.jpeg')} />
            <div className="names"> Kyle</div>
            <a href="https://www.linkedin.com/in/kyle-mccall/">
              <img className="linkedin" alt="linkedin" src={require('./linkedin.png')} />
            </a>
            <a href="https://github.com/kyle-j-mccall">
              <img className="github" alt="github" src={require('./github.png')} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
