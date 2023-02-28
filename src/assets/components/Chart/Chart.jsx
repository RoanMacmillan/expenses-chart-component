import React, { useState } from 'react';
import './Chart.css';
import { BarChart, Bar, XAxis, Cell, Tooltip } from 'recharts';

const Chart = () => {
  const [active, setActive] = useState(false);

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
        width={303}
        height={201.9}
        data={data}
        margin={{ top: 0, left: -6.0, right: -6.0, bottom: 0 }}
        // style={{ outline: '2px solid red' }}
        onBlur={() => setActive(false)}
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
          trigger="click"
          cursor={{ fill: '#f8e9dd' }}
          position={{ y: -30 }}
          active={active}
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

        <Bar dataKey="amount" radius={3} barSize={33} cursor="pointer">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              // styles the bar with the highest amount spent to the color cyan
              fill={entry.amount === maxAmount ? highestValueColor : '#EC755D'}
              className="cell"
              onClick={() => setActive(true)}
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
