import { useEffect } from "react";

function GraphInteract(chartRef, onClick) {
  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const canvas = chart.canvas;

      const handleMouseMove = () => {
        canvas.style.cursor = "pointer";
      };

      const handleClick = () => {
        onClick();
      };

      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("click", handleClick);

      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("click", handleClick);
      };
    }
  }, [chartRef, onClick]);
}

export default GraphInteract;
