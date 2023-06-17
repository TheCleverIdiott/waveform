import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const WaveformChart = ({ waveformData }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (waveformData && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      // Prepare data for the chart
      const data = {
        labels: Array.from({ length: waveformData.readouts.length }, (_, i) => i),
        datasets: [
          {
            label: 'Waveform Data',
            data: waveformData.readouts,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };

      // Configure chart options
      const options = {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Sample',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Amplitude',
            },
          },
        },
      };

      // Create the chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
      });
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [waveformData]);

  return <canvas ref={chartContainer} />;
};

export default WaveformChart;
