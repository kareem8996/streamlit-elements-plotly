import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { PlotParams } from "react-plotly.js";
import ElementsLoading from "../../ElementsLoading";

const elements: ElementsRecord = {
  Plot : dynamic(() => import("react-plotly.js").then((m) => m as unknown as ComponentType<PlotParams>), {loading: ElementsLoading, ssr: false})
}

const loadPlotly: ElementsLoader = element => elements[element]

export default loadPlotly