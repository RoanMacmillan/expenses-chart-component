import { useState, useEffect } from 'react';
import './ChartContainer.css';
import Heading from '../Heading/Heading';
// import Chart from '../Chart/Chart';
import BarChart from '../ChartJs/BarChart';
import { useSpring, animated } from 'react-spring';

const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const ChartContainer = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const props = useSpring({
    value: animatedValue,
    from: { value: 0 },
    config: { duration: 700 },
  });

  useEffect(() => {
    setAnimatedValue(478.33);
  }, []);

  return (
    <main>
      <div className="chartContainer">
        <Heading />
        {/* <Chart /> */}

        <div className="chart">
          <h2>Spending - Last 7 days</h2>

          <BarChart data={data} />
          <div className="line"></div>

          <div className="totalContainer">
            <div className="totalChild">
              <span className="totalText">Total this month</span>
              <animated.span className="totalAmt">
                {props.value.interpolate((value) => `$${value.toFixed(2)}`)}
              </animated.span>
            </div>

            <div className="totalChild">
              <span className="increaseAmt">+2.4%</span>
              <span className="totalText">from last month</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChartContainer;
