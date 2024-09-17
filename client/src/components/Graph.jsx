import { useRef } from "react";
import graphData from "./graphData";
import GraphInteract from "./GraphInteract";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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
  const chartRef = useRef(null);

  GraphInteract(chartRef, () => {
    toast.info('You are about to visit an external website.', {
      onClose: () => window.open(
        "https://muse.union.edu/mth-063-01-f18/2018/10/06/decline-of-honeybees/",
        "_blank"
      ),
    })
  })
  const hiveData = {
    labels: graphData.map((row) => row.date),
    datasets: [
      {
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
          stepSize: 1,
        },
        type: "linear",
        reverse: false,
        title: {
          display: true,
          text: "Years",
          font: {
            size: 24
          }
        },
      },
      hives: {
        type: "linear",
        title: {
          display: true,
          text: "Millions of hives",
          font: { 
          size: 24
          }
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
        color: 'black',
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 24,
          // style: "italic",
          family: "font-mono",
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
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 h-96">
      <Line ref={chartRef} data={hiveData} options={graphOptions} />
      <ToastContainer 
      position="top-left"
      />
    </div>
  );
}
