import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './BarChart.css';

function BarChart({ data }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // destroy existing chart before creating a new one
    }
    const ctx = canvasRef.current.getContext('2d');

    const maxAmountIndex = data.reduce((maxIndex, item, index, arr) => {
      return item.amount > arr[maxIndex].amount ? index : maxIndex;
    }, 0);

    const defaultColor = '#EC755D';
    const blueColor = '#76B5BC';
    const backgroundColors = data.map((item, index) => {
      return index === maxAmountIndex ? blueColor : defaultColor;
    });

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.day),
        datasets: [
          {
            label: '',
            data: data.map((item) => item.amount),
            backgroundColor: backgroundColors,
            hoverBackgroundColor: [
              '#FF9B86',
              '#FF9B86',
              '#B4E0E5',
              '#FF9B86',
              '#FF9B86',
              '#FF9B86',
              '#FF9B86',
            ],

            borderRadius: 5,
            borderSkipped: false,

            barPercentage: 0.9,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },

          tooltip: {},
        },
      },
    });
  }, [data]);

  return (
    <div className="chartCont">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default BarChart;
