import React from 'react';
import linkedinLogo from '../svg/linkedin.svg';
import githubLogo from '../svg/github.svg';
import './Author.css';

const Author = () => (
  <div className="author">
    <div className="author__name">
      <h4 className="text-center"><small>Developed by</small> <strong>Ivan Špoljarić</strong></h4>
    </div>
    <div className="author__social">
      <div className="social__linkedin">
        <a href="https://www.linkedin.com/in/ivan-špoljarić-2206a184" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo small icon" />
        </a>
      </div>
      <div className="social__github">
        <a href="https://github.com/ispoljari" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github logo small icon" />
        </a>
      </div>
    </div>
  </div>
)

export default Author;