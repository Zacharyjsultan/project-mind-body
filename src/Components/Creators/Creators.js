import React from 'react';
import './Creators.css';

export default function Creators() {
  return (
    <div>
      <div className="creators-container">
        <div className="creators">
          <p className="andrew">
            Andrew
            <img className="image" src={require('./andrew.jpg')} />
            https://www.linkedin.com/in/andrewjamesboyle/ https://github.com/andrewjamesboyle
          </p>
          <p className="zach">
            <img className="image" src={require('./zatchery.JPG')} />
            Zach https://www.linkedin.com/in/zachary-sultan/ https://github.com/Zacharyjsultan
          </p>
          <p className="charlie">
            <img className="image" src={require('./charlie.png')} />
            Charlie
          </p>
          <p className="kyle">
            <img className="image" src={require('./me.jpeg')} />
            Kyle
            https://www.linkedin.com/in/kyle-mccall/ https://github.com/kyle-j-mccall
          </p>
        </div>
      </div>
    </div>
  );
}
