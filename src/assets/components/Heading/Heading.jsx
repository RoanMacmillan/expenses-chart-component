import React from 'react';
import './Heading.css';
import Logo from '../Logo/Logo';

const Heading = () => {
  return (
    <header>
    <div className="headingContainer">
      <div className="myBalance">
        <h1>My Balance</h1>
        <span>$921.48</span>
      </div>
      <Logo />
    </div>
    </header>
  );
};

export default Heading;
