import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const toggleFunction = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, toggleFunction] as const;
};

export default useToggle;
