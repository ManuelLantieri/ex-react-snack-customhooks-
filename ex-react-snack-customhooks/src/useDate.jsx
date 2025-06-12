import { useEffect, useState } from "react";

function useDate() {
  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return curDate;
}

export default useDate;
