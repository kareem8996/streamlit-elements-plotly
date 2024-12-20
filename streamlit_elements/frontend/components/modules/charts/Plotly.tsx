import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { PlotParams } from "react-plotly.js";
import ElementsLoading from "../../ElementsLoading";

const Plot = dynamic(() => import("react-plotly.js") as any, {
  loading: ElementsLoading,
  ssr: false,
});

export default Plot;
