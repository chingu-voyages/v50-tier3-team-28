import graphData from "./graphData";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, // y-axis
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { Chart } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph() {
  const hiveData = {
    labels: graphData.map((row) => row.date),
    datasets: [
      {
        data: graphData.map((row) => {
          return { x: row.date, y: row.hives };
        }),
      },
    ],
    datasets: [
      {
        // label: "Bees",
        data: graphData.map((row) => row.hives),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
        tension: 0.4,
        yAxisID: "hives",
        xAxisID: "date",
      },
    ],
  };
  const graphOptions = {
    scales: {
      x: {
        display: false,
      },
      date: {
        ticks: {
          stepSize: 3,
        },
        type: "linear",
        reverse: false,
        title: {
          display: true,
          text: "Years",
        },
      },
      hives: {
        type: "linear",
        title: {
          display: true,
          text: "Millions of hives",
        },
        beginAtZero: false,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.y} million hives in ${context.parsed.x}`;
          },
          title: () => null,
        },
      },
      title: {
        display: true,
        text: "Millions of hives in the U.S.",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 24,
          // style: "italic",
          family: "Helvetica Neue",
        },
      },
      datalabels: {
        anchor: "right",
        align: "end",
      },
      legend: {
        display: false,
        // title: "hives",
        // position: "right",
      },
    },
  };
  return <Line data={hiveData} options={graphOptions} />;
}
