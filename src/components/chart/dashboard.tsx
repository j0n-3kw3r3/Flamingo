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

const forexData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "EUR/USD",
      data: [103.5, 107.2, 101.8, 108.5, 105.0, 109.2, 105.5],
      fill: false,
      backgroundColor: "white",
      borderColor: "#ffffff47",
      tension: 0.25,
      capBezierPoints: true,
    },
  ],
};



function DashboardChart() {
  return <Line data={forexData} />;
}

export default DashboardChart;
