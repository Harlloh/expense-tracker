// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   where,
// } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../config/firebase-config";
// import { useGetUserInfo } from "./useGetUserInfo";

// export const useGetTransactions = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [totals, setTotals] = useState({
//     balance: 0.0,
//     expense: 0.0,
//     income: 0.0,
//   });
//   const { userId } = useGetUserInfo();
//   const transactionRef = collection(db, "transactions");

//   const getTransaction = async () => {
//     let unsubscribe;
//     try {
//       const queryTransaction = query(
//         transactionRef,
//         where("userId", "==", userId),
//         orderBy("createdAt")
//       );
//       unsubscribe = onSnapshot(queryTransaction, (snapshot) => {
//         let docs = [];
//         let totalExpense = 0;
//         let totalIncome = 0;
//         snapshot.forEach((doc) => {
//           const data = doc.data();
//           const TransactionId = doc.id;
//           docs.push({ ...data, TransactionId });

//           if (data.transactionType === "expense") {
//             totalExpense += Number(data.amount);
//           } else {
//             totalIncome += Number(data.amout);
//           }
//         });
//         setTransactions(docs);
//         let balance = totalIncome - totalExpense;
//         setTotals({
//           balance,
//           expense: totalExpense,
//           income: totalIncome,
//         });
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     return () => unsubscribe();
//   };

//   useEffect(() => {
//     getTransaction();
//   }, []);

//   return { transactions, totals };
// };

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
import { useState } from "react";
import { useEffect } from "react";

export const useGetTransactions = () => {
  const { userId } = useGetUserInfo();
  const [transactions, settransactions] = useState([]);
  const [transactionTotals, settransactionTotals] = useState({
    balance: 0.0,
    income: 0.0,
    expense: 0.0,
  });
  const transactionCollectionRef = collection(db, "transactions");

  const getTransaction = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userId", "==", userId),
        orderBy("createAt")
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        let totalIncome = 0;
        let totalExpense = 0;

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
          if (data.transactionType === "expense") {
            totalExpense += Number(data.amount);
          } else {
            totalIncome += Number(data.amount);
          }
        });
        settransactions(docs);
        let balance = totalIncome - totalExpense;
        settransactionTotals({
          balance,
          expense: totalExpense,
          income: totalIncome,
        });
      });
    } catch (err) {
      console.log(err);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getTransaction();
  }, []);

  return { transactions, transactionTotals };
};
