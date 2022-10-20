import React from 'react';
import { Link } from 'react-router-dom';
import './Creators.css';

export default function Creators() {
  return (
    <div>
      <div className="creators-container">
        <div className="creators">
          <div className="andrew">
            <img className="image" src={require('./andrew.jpg')} />
            <div className="names">Andrew</div>
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://github.com/andrewjamesboyle' }}
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
              Github
            </Link>
            &
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://www.linkedin.com/in/andrewjamesboyle/' }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-github" />
              LinkedIn
            </Link>
          </div>
          <div className="zach">
            <img className="image" src={require('./zatchery.JPG')} />
            <div className="names">Zach</div>
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://github.com/Zacharyjsultan' }}
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
              Github
            </Link>
            &
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://www.linkedin.com/in/zachary-sultan/' }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-github" />
              LinkedIn
            </Link>
          </div>
          <div className="charlie">
            <img className="image" src={require('./charlie.png')} />
            <div className="names">Charlie</div>
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://github.com/charlescrabtree' }}
              target="_blank"
              aria-label="Github"
            >
              <i className="fa fa-github"></i>
              Github
            </Link>
            &
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://www.linkedin.com/in/charles-crabtree/' }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-github" />
              LinkedIn
            </Link>
          </div>
          <div className="kyle">
            <img className="image" src={require('./me.jpeg')} />
            <div className="names"> Kyle</div>
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://github.com/kyle-j-mccall' }}
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
              Github
            </Link>
            &
            <Link
              className="social-icon-link github"
              to={{ pathname: 'https://www.linkedin.com/in/kyle-mccall/' }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-github" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
