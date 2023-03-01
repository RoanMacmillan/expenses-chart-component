import React from 'react';
import './ChartContainer.css';
import Heading from '../Heading/Heading';
import Chart from '../Chart/Chart';

const ChartContainer = () => {
  return (
    <main>
    <div className="chartContainer">
      <Heading />
      <Chart />
    </div>
    </main>
  );
};

export default ChartContainer;
