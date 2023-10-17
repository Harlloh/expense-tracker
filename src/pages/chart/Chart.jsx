// // UPDATE CHARTDATA
// import React from "react";
// import { Line } from "react-chartjs-2";

// const chartData = {
//   labels: ["Label1", "Label2", "Label3"],
//   datasets: [
//     {
//       label: "Transaction Amount",
//       data: [10, 20, 30],
//       fill: false,
//       borderColor: "aqua",
//       tension: 0.4,
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true, // Start the Y-axis at zero
//     },
//   },
// };

// export default function SimpleChart() {
//   return (
//     <div>
//       <Line />
//     </div>
//   );
// }

// // FINAL ACT
// //CHARTDATA NOW HAS THE LABEL AND DATA VALUES REMAIN RENDERING LIKE THIS

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

export default function Chart({ selectedButton, sortedTransactions }) {
  // Create arrays to store labels and data
  const labels = sortedTransactions.map((transaction) => {
    // Use selectedButton to determine the x-axis label format
    if (selectedButton === "day") {
      // Format as desired for daily data
      return formatDateForDayChart(transaction.createAt.seconds);
    } else if (selectedButton === "week") {
      // Format as desired for weekly data
      return formatDateForWeekChart(transaction.createAt.seconds);
    } else if (selectedButton === "week") {
      return formatDateForMonthChart(transaction.createAt.seconds);
    } else {
      // Handle other time intervals (month, year) similarly
      return formatDateForYearChart(transaction.createAt.seconds);
    }
  });

  const datas = sortedTransactions.map((transaction) =>
    parseFloat(transaction.amount)
  );
  console.log(datas, "datasss");

  const chartData = {
    labels: labels,
    datasets: [
      {
        labels: "sales",
        data: datas,
        backgroundColor: "red",
        fill: true,
        borderColor: "green",
      },
    ],
  };
  const chartOptions = {
    plugins: {
      legend: true,
    },
    scales: {},
  };
  // const chartOptions = {
  //   scales: {
  //     x: {
  //       type: "time", // This specifies that the x-axis should use a time scale
  //       time: {
  //         unit: "day", // You can adjust the time unit as needed
  //       },
  //     },
  //     y: {
  //       beginAtZero: true, // This ensures the y-axis starts at zero
  //     },
  //   },
  // };
  return <Line data={chartData} options={chartOptions}></Line>;
}

// s
// d
// c
// f
// g
// h
// j
// j
// k
// l
// h
// t
// r
// e
// w
// wg
// r

// Helper function to format date for daily chart
function formatDateForDayChart(timestamp) {
  // Create a Date object from the timestamp (assuming it's in seconds)
  const date = new Date(timestamp * 1000);

  // Format the date as "DD/MM/YYYY" (e.g., 01/10/2023)
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are 0-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// Helper function to format date for weekly chart
function formatDateForWeekChart(timestamp) {
  // Create a Date object from the timestamp (assuming it's in seconds)
  const date = new Date(timestamp * 1000);

  // Get the week number of the year
  const weekNumber = getWeekNumber(date);

  // Get the year
  const year = date.getFullYear();

  return `Week ${weekNumber} of ${year}`;
}

// Helper function to get the week number for a given date
function getWeekNumber(date) {
  const target = new Date(date.valueOf());
  const dayNr = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }
  return Math.ceil((firstThursday - target) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

// Similar functions for other time intervals
function formatDateForMonthChart(timestamp) {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString("default", { month: "long" }); // Full month name
  const year = date.getFullYear();

  return `${month} ${year}`;
}
function formatDateForYearChart(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();

  return year.toString();
}
