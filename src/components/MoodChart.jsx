import Chart from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';
import { getEmotionEmoji } from '../util/emotion';

const lineOptions = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 18,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `${getEmotionEmoji(context.parsed.y)}`;
        },
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
};

const barOptions = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 24,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const WeeklyMoodChart = ({ data }) => {
  return <Line data={data} options={lineOptions} />;
};

export const WeeklyFrequencyChart = ({ data }) => {
  return <Bar data={data} options={barOptions} />;
};
