import { useEffect } from "react";

function GraphInteract(chartRef) {
  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const canvas = chart.canvas;

      const handleMouseMove = (e) => {
        const { top, left } = canvas.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const title = chart.options.plugins.title;

        const titleHeight =
          title.font.size + title.padding.top + title.padding.bottom;

        if (y >= title.padding.top && y <= title.padding.top + titleHeight) {
          canvas.style.cursor = "pointer";
        } else {
          canvas.style.cursor = "default";
        }
      };

      const handleClick = (e) => {
        const { top, left } = canvas.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const title = chart.options.plugins.title;

        const titleHeight =
          title.font.size + title.padding.top + title.padding.bottom;

        if (y >= title.padding.top && y <= title.padding.top + titleHeight) {
          window.open(
            "https://muse.union.edu/mth-063-01-f18/2018/10/06/decline-of-honeybees/",
            "_blank"
          );
        }
      };

      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("click", handleClick);

      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("click", handleClick);
      };
    }
  }, [chartRef]);
}

export default GraphInteract;
