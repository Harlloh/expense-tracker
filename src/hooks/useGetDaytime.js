import { useState, useEffect } from "react";

const useGetDaytime = () => {
  //   const currentDateTime = (new Date());
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [timeOfDayGreeting, setTimeOfDayGreeting] = useState("");

  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const currentHour = currentDateTime.getHours();
      let greeting = "";

      if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon";
      } else {
        greeting = "Good evening";
      }

      setTimeOfDayGreeting(greeting);
      setCurrentDateTime(new Date());
    };

    updateTimeAndGreeting(); // Set the initial greeting

    const intervalId = setInterval(updateTimeAndGreeting, 60000); // Update every minute

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []);

  return timeOfDayGreeting;
};

export default useGetDaytime;
