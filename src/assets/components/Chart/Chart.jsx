import React, { useState, useEffect } from 'react';
import './Chart.css';
import { BarChart, Bar, XAxis, Cell, Tooltip } from 'recharts';

const Chart = () => {
  const [barSize, setBarSize] = useState(50.36);
  const [chartSize, setChartSize] = useState(478.5);
  const [borderRadius, setBorderRadius] = useState(5);
  // const [fontSize, setFontSize] = useState(15);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 575px)');

    const handleResize = (mq) => {
      if (mq.matches) {
        setBarSize(33);
        setChartSize(303);
        setBorderRadius(3);
        // setFontSize(12)
      } else {
        setBarSize(50.36);
        setChartSize(478.5);
        setBorderRadius(5);
        // setFontSize(15);
      }
    };

    handleResize(mediaQuery);
    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

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

  // iterates over data array and creates a cell component for each entry
  const maxAmount = Math.max(...data.map((item) => item.amount));
  // color for the bar with highest spend amount
  const highestValueColor = '#76B5BC';


  

  return (
    <div className="chart">
      <h2>Spending - Last 7 days</h2>
      <BarChart
        className="barChart"
        width={chartSize}
        height={201.9}
        data={data}
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="day"
          style={{
            fontSize: 12,
            fill: '#92857A',
            fontWeight: '400',
            strokeWidth: 0,
          }}
        />

        <Tooltip
          cursor={{ fill: '#f8e9dd' }}
          position={{ y: -30 }}
          content={({ payload }) => {
            if (payload && payload.length) {
              return (
                <div className="custom-tooltip">
                  <p className="label">{`$${payload[0].value}`}</p>
                </div>
              );
            }
            return null;
          }}
        />

        <Bar
          dataKey="amount"
          radius={borderRadius}
          barSize={barSize}
          cursor="pointer"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              // styles the bar with the highest amount spent to the color cyan
              fill={entry.amount === maxAmount ? highestValueColor : '#EC755D'}
              className="cell"
            />
          ))}
        </Bar>
      </BarChart>
      <div className="line"></div>

      <div className="totalContainer">
        <div className="totalChild">
          <span className="totalText">Total this month</span>
          <span className="totalAmt">$478.33</span>
        </div>

        <div className="totalChild">
          <span className="increaseAmt">+2.4%</span>
          <span className="totalText">from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
