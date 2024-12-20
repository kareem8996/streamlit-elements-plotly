import dynamic from "next/dynamic";
import ElementsLoading from "../../ElementsLoading";

const elements: ElementsRecord = {
  Plot: dynamic(() => import("react-plotly.js"), { loading: ElementsLoading, ssr: false }),
};

const loadPlotly: ElementsLoader = element => elements[element];

export default loadPlotly;