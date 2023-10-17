// import React from "react";
// import { addDays, subWeeks, subMonths, subYears, format } from "date-fns"; // Import date-fns functions
// // CHART
// import {
//   Chart as Chartjs,
//   LineElement,
//   TimeScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "chartjs-adapter-date-fns";
// import { Line } from "react-chartjs-2";
// Chartjs.register(LineElement, TimeScale, PointElement, LinearScale);

// export default function Chart({ selectedButton, sortedTransactions }) {
//   let timeConstraint;
//   if (selectedButton === "day") {
//     timeConstraint = addDays(new Date(), -1); // 1 day ago
//   } else if (selectedButton === "week") {
//     timeConstraint = subWeeks(new Date(), 1); // 1 week ago
//   } else if (selectedButton === "month") {
//     timeConstraint = subMonths(new Date(), 1); // 1 month ago
//   } else if (selectedButton === "year") {
//     timeConstraint = subYears(new Date(), 1); // 1 year ago
//   }

//   const filteredTransactions = sortedTransactions.filter((transaction) => {
//     return new Date(transaction.date) >= timeConstraint;
//   });
//   // Create arrays to store labels and data

//   const labels = sortedTransactions.map(
//     (transaction) => transaction.transactionType
//   );
//   const datas = sortedTransactions.map((transaction) =>
//     parseFloat(transaction.amount)
//   );
//   const chartBorderColor =
//     labels === "expense" ? "#F95B51" : labels === "income" ? "#438883" : "aqua";

//   const data = {
//     labels: ["2022-11-01", "2022-11-02", "2022-11-03", "2022-11-04"],
//     // labels: ["2022-11-01", "2022-11-02", "2022-11-03", "2022-11-04"],
//     datasets: [
//       {
//         labels: "sales of the week",
//         data: datas,
//         // backgroundColor: "aqua",
//         borderColor: chartBorderColor,
//         tension: 0.4,
//       },
//     ],
//   };
//   const options = {
//     plugins: {
//       legend: true,
//     },
//     scales: {
//       x: {
//         type: "time",
//         time: {
//           unit: timeConstraint,
//         },
//       },
//       y: {
//         // min: 3,
//         // max: 6,
//         beginAtZero: true,
//       },
//     },
//   };
//   return <Line data={data} options={options}></Line>;
// }

//WORKING ON THE X-AXIS TO BE
// CONTRAINED BYT THE SELECTEDBUTTON
import React from "react";
import { addDays, subWeeks, subMonths, subYears, format } from "date-fns";
import {
  Chart as Chartjs,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
Chartjs.register(LineElement, TimeScale, PointElement, LinearScale);

export default function Chart({ selectedButton, sortedTransactions }) {
  let timeConstraint;
  if (selectedButton === "day") {
    timeConstraint = addDays(new Date(), -1); // 1 day ago
  } else if (selectedButton === "week") {
    timeConstraint = subWeeks(new Date(), 1); // 1 week ago
  } else if (selectedButton === "month") {
    timeConstraint = subMonths(new Date(), 1); // 1 month ago
  } else if (selectedButton === "year") {
    timeConstraint = subYears(new Date(), 1); // 1 year ago
  }

  // Sort the transactions based on the createdAt property
  const sortedTransactionsByCreatedAt = [...sortedTransactions].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  // Filter transactions based on the timeConstraint
  const filteredTransactions = sortedTransactionsByCreatedAt.filter(
    (transaction) => {
      return new Date(transaction.createdAt) >= timeConstraint;
    }
  );

  // Create arrays to store labels and data
  const labels = filteredTransactions.map(
    (transaction) => transaction.transactionType
  );
  // const datas = filteredTransactions.map((transaction) =>
  //   parseFloat(transaction.amount)
  // );
  const datas = sortedTransactions.map((transaction) =>
    parseFloat(transaction.amount)
  );
  const chartBorderColor =
    labels === "expense" ? "#F95B51" : labels === "income" ? "#438883" : "aqua";
  console.log(datas);
  const data = {
    labels: filteredTransactions.map((transaction) => transaction.createdAt), // Use createdAt for x-axis labels
    datasets: [
      {
        label: "sales of the selected period",
        data: datas,
        borderColor: chartBorderColor,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: selectedButton, // Use selectedButton for the time unit
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options}></Line>;
}

// import React from "react";
// import { addDays, subWeeks, subMonths, subYears, format } from "date-fns"; // Import date-fns functions
// import {
//   Chart as Chartjs,
//   LineElement,
//   TimeScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "chartjs-adapter-date-fns";
// import { Line } from "react-chartjs-2";
// Chartjs.register(LineElement, TimeScale, PointElement, LinearScale);

// export default function Chart({ sortedTransactions, selectedButton }) {
//   let timeConstraint;
//   if (selectedButton === "day") {
//     timeConstraint = addDays(new Date(), -1); // 1 day ago
//   } else if (selectedButton === "week") {
//     timeConstraint = subWeeks(new Date(), 1); // 1 week ago
//   } else if (selectedButton === "month") {
//     timeConstraint = subMonths(new Date(), 1); // 1 month ago
//   } else if (selectedButton === "year") {
//     timeConstraint = subYears(new Date(), 1); // 1 year ago
//   }

//   const filteredTransactions = sortedTransactions.filter((transaction) => {
//     return new Date(transaction.date) >= timeConstraint;
//   });
//   // Create arrays to store labels and data
//   console.log(timeConstraint, "heyyyya");

//   const labels = sortedTransactions.map(
//     (transaction) => transaction.transactionType
//   );
//   const data = sortedTransactions.map((transaction) =>
//     parseFloat(transaction.amount)
//   );

//   const chartBorderColor =
//     labels === "expense" ? "#F95B51" : labels === "income" ? "#438883" : "aqua";

//   const chartData = {
//     labels: data, // Use the labels from the prop
//     datasets: [
//       {
//         label: "Sales of the week", // Update the label
//         data: data, // Use the data from the prop
//         backgroundColor: "aqua",
//         borderColor: chartBorderColor,
//         tension: 0.4,
//       },
//     ],
//   };

//   // const options = {
//   //   plugins: {
//   //     legend: true,
//   //   },
//   //   scales: {
//   //     x: {
//   //       type: "time",
//   //       time: {
//   //         unit: selectedButton, // Update time unit based on the selectedButton
//   //       },
//   //     },
//   //     y: {
//   //       beginAtZero: true,
//   //     },
//   //   },
//   // };

//   const options = {
//     scales: {
//       x: {
//         type: "time",
//         labels: chartData.labels,
//         time: {
//           unit: selectedButton,
//         },
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };
//   console.log(chartData);
//   return <Line data={chartData} options={options}></Line>;
// }

// UPDATE CHARTDATA

// import { Line } from "react-chartjs-2";
// import { addDays, subWeeks, subMonths, subYears, format } from "date-fns"; // Import date-fns functions

// export default function Chart({ sortedTransactions, selectedButton }) {
//   let timeConstraint;
//   if (selectedButton === "day") {
//     timeConstraint = addDays(new Date(), -1); // 1 day ago
//   } else if (selectedButton === "week") {
//     timeConstraint = subWeeks(new Date(), 1); // 1 week ago
//   } else if (selectedButton === "month") {
//     timeConstraint = subMonths(new Date(), 1); // 1 month ago
//   } else if (selectedButton === "year") {
//     timeConstraint = subYears(new Date(), 1); // 1 year ago
//   }

//   const filteredTransactions = sortedTransactions.filter((transaction) => {
//     return new Date(transaction.date) >= timeConstraint;
//   });
//   // Create arrays to store labels and data
//   console.log(sortedTransactions, selectedButton);

//   const labels = sortedTransactions.map(
//     (transaction) => transaction.transactionType
//   );
//   const data = sortedTransactions.map((transaction) =>
//     parseFloat(transaction.amount)
//   );
//   console.log(labels, "this are the labels");
//   console.log(data, "this are the data amount");
//   console.log(timeConstraint, "this are the date oo", filteredTransactions);
//   const chartData = {
//     labels: labels, // This should be an array of labels for your data points
//     datasets: [
//       {
//         label: "Transaction Amount",
//         data: data, // This should be an array of data points
//         fill: false,
//         borderColor: "aqua",
//         tension: 0.4,
//       },
//     ],
//   };
//   const options = {
//     scales: {
//       x: {
//         type: "time", // This specifies that the x-axis should use a time scale
//         time: {
//           unit: "day", // You can adjust the time unit as needed
//         },
//       },
//       y: {
//         beginAtZero: true, // This ensures the y-axis starts at zero
//       },
//     },
//   };

//   return <Line data={chartData} options={options} />;
// }
