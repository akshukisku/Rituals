import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface Props {
  products: any[];
}

const FeaturedChart = ({ products }: Props) => {
  const featured = products.filter(
    (item) => item.isFeatured
  ).length;

  const normal = products.length - featured;

  // 👇 Replace your old data object with this
  const data = {
    labels: ["Featured", "Normal"],
    datasets: [
      {
        data: [featured, normal],
        backgroundColor: [
          "#C9A227", // Gold
          "#E8E2D6", // Cream
        ],
        borderColor: [
          "#B08D1F",
          "#D8D1C5",
        ],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  // 👇 Add this below data
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // 👇 Update return
  return <Pie data={data} options={options} />;
};

export default FeaturedChart;