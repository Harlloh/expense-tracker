import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransactions = () => {
  const { userId } = useGetUserInfo();
  const transactionRef = collection(db, "transactions");

  const addTransaction = async (data) => {
    await addDoc(transactionRef, {
      userId,
      ...data,
      createAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};
