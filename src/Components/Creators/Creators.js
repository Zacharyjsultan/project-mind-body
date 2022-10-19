import React from 'react';
import { Link } from 'react-router-dom';
import './Creators.css';

export default function Creators() {
  return (
    <div>
      <div className="creators-container">
        <div className="creators">
          <p className="andrew">
            <img className="image" src={require('./andrew.jpg')} />
            Andrew
            <Link
              class='social-icon-link github'
              to={{ pathname: 'https://github.com/andrewjamesboyle' }}
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />Github
            </Link>
            <Link
              class='social-icon-link github'
              to={{ pathname: 'https://www.linkedin.com/in/andrewjamesboyle/' }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-github' />LinkedIn
            </Link>

          </p>
          <p className="zach">
            <img className="image" src={require('./zatchery.JPG')} />
            Zach
            <Link
              class='social-icon-link github'
              to={{ pathname: 'https://github.com/Zacharyjsultan' }}
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />Github
            </Link>
            <Link
              class='social-icon-link github'
              to={{ pathname: 'https://www.linkedin.com/in/zachary-sultan/' }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-github' />LinkedIn
            </Link>
          </p>
          <p className="charlie">
            <img className="image" src={require('./charlie.png')} />
            Charlie
          </p>
          <Link
            class='social-icon-link github'
            to={{ pathname: 'https://github.com/charlescrabtree' }}
            target='_blank'
            aria-label='Github'
          >
            <i className='fab fa-github' />Github
          </Link>
          <Link
            class='social-icon-link github'
            to={{ pathname: 'https://www.linkedin.com/in/charles-crabtree/' }}
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-github' />LinkedIn
          </Link>
          <p className="kyle">
            <img className="image" src={require('./me.jpeg')} />
            Kyle
          </p>
          <Link
            class='social-icon-link github'
            to={{ pathname: 'https://github.com/kyle-j-mccall' }}
            target='_blank'
            aria-label='Github'
          >
            <i className='fab fa-github' />Github
          </Link>
          <Link
            class='social-icon-link github'
            to={{ pathname: 'https://www.linkedin.com/in/kyle-mccall/' }}
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-github' />LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
