import { useState } from "react";

function useSwitch(startValue = false) {
  const [isOn, setIsOn] = useState(startValue);

  const toggle = () => {
    setIsOn((curr) => !curr);
  };

  return [isOn, toggle];
}

export default useSwitch;
