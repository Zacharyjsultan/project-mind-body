import React from 'react';

export default function Creators() {
  return (
    <div>
      <div className="creators-container">
        <div className="creators">
          <p className="andrew">
            Andrew
            <img src={require('./andrew.jpg')} />
            https://www.linkedin.com/in/andrewjamesboyle/ https://github.com/andrewjamesboyle
          </p>
          <p className="zach">
            <img src={require('./zatchery.jpg')} />
            Zach https://www.linkedin.com/in/zachary-sultan/ https://github.com/Zacharyjsultan
          </p>
          <p className="charlie">
            Charlie
            <img src={require('./charlie.png')} />
          </p>
          <p className="kyle">
            Kyle
            <img src={require('./me.jpeg')} />
            https://www.linkedin.com/in/kyle-mccall/ https://github.com/kyle-j-mccall
          </p>
        </div>
      </div>
    </div>
  );
}
