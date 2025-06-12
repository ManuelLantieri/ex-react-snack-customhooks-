import { useEffect } from "react";
import { useState } from "react";

function useCustomPointer(prop) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

    document.addEventListener("mousemove", handleMove);
    return () => removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      {prop}
    </div>
  );
}

export default useCustomPointer;
