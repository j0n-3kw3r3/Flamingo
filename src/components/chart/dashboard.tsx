import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = [
  103.5, 107.2, 108.5, 105.0, 109.2, 105.5, 102.1, 106.8, 110.3, 104.7, 108.9, 100.2, 104.5, 107.4, 112.1, 108.0, 101.6,
  109.8, 103.2, 105.9, 110.4, 102.7, 107.0, 109.9, 111.5, 104.2, 108.7, 100.9, 113.4, 106.3, 109.0, 101.2, 103.8, 106.1,
  114.8,
];
const startHour = 10;

const labels = data.map((_, index) => {
  const hour = startHour + index;
  return `${hour}:00`;
});

const forexData = {
  labels: labels,
  datasets: [
    {
      label: "BTC/USD",
      data: data,
      fill: false,
      backgroundColor: "white",
      borderColor: "#D62898",
      tension: 0.15,
      capBezierPoints: true,
    },
  ],
};

function DashboardChart() {
  return <Line data={forexData} />;
}

export default DashboardChart;
