import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartTypeRegistry,
  registerables,
} from "chart.js";
import { useEffect, useRef } from "react";
// import "../../assets/styles/graph.css";

// see chatgpt conversation if you want to see how some stuff works:
// https://chatgpt.com/share/e/67d1f695-f714-8002-9d4b-7538a745e2be
// https://www.chartjs.org/docs/latest/

// registers all of the chart.js components globally
Chart.register(...registerables);
Chart.defaults.font.size = 20;

// function interface
interface Graph {
  labels: string[];
  data: number[];
  graphType: keyof ChartTypeRegistry;
  styles: {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  };
  symbol: string;
  // title: string;
}

// interface for our ref
interface ChartCanvas extends HTMLCanvasElement {
  chartInstance?: Chart;
}

export default function DonutChart({
  data,
  labels,
  graphType,
  styles,
  symbol,
}: Graph) {
  // using a ref to display the chart
  const chartRef = useRef<ChartCanvas | null>(null);

  // configure data for the chart
  const chartData: ChartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
        borderWidth: styles.borderWidth,
        fill: true,
        tension: 0.3,
      },
    ],
  };
  //@ts-ignore
  let ticks = { font: { size: 14 }, callback: (value) => symbol + value };

  // configure the options for the chart
  const chartOptions: ChartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return symbol + context.parsed;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // combine them for the chart config, each of these types are generic but they are not necessary.
  // as long as a type is defined in the config with the graph type.
  const chartConfig: ChartConfiguration = {
    type: graphType, // type
    data: chartData,
    options: chartOptions,
  };

  useEffect(() => {
    const ref = chartRef.current; // get our ref to minimize dot notation
    const context = ref?.getContext("2d"); // drawing the graph

    if (!ref || !context) return;

    // creating our chart
    ref.chartInstance = new Chart(context, chartConfig);

    // clean out any instances when the component unmounts
    return () => {
      ref?.chartInstance?.destroy();
    };
  }, [data, labels, graphType]);

  // display our chart with the chart ref
  return (
    <div className="graph">
      <canvas ref={chartRef} />
    </div>
  );
}
