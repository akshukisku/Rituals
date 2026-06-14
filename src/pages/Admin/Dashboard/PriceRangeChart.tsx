import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

interface Props {
  products: any[];
}

const PriceRangeChart = ({ products }: Props) => {
  const ranges = {
    "0-500": 0,
    "500-1000": 0,
    "1000-2000": 0,
    "2000+": 0,
  };

  products.forEach((item) => {
    const price = Number(item.price);

    if (price <= 500) ranges["0-500"]++;
    else if (price <= 1000) ranges["500-1000"]++;
    else if (price <= 2000) ranges["1000-2000"]++;
    else ranges["2000+"]++;
  });

  const data = {
    labels: Object.keys(ranges),
    datasets: [
      {
        label: "Products",
        data: Object.values(ranges),
      },
    ],
  };

  return <Bar data={data} />;
};

export default PriceRangeChart;