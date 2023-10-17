import { Timestamp } from "firebase/firestore";

export const useGetDate = () => {
  const formatDate = (timestamp) => {
    const createAtDate =
      timestamp instanceof Timestamp ? timestamp.toDate() : new Date();
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (createAtDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (createAtDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return createAtDate.toLocaleDateString();
    }
  };
  return { formatDate };
};
