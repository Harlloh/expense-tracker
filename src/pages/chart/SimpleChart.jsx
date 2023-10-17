import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const chartData = {
  labels: ["Label1", "Label2", "Label3"],
  datasets: [
    {
      label: "Transaction Amount",
      data: [10, 20, 30],
      fill: false,
      borderColor: "aqua",
      tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true, // Start the Y-axis at zero
    },
  },
};

export default function SimpleChart() {
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}
