"use client"

import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export function LineChart() {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        data: Array.from({ length: 30 }, () => Math.random() * 10000 + 45000),
        borderColor: "#2563eb",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        grid: {
          display: true,
          color: "#f1f5f9",
        },
        ticks: {
          callback: (value: any) => `${Math.round(value / 1000)}k`,
        },
      },
    },
  }

  return (
    <div className="h-[200px]">
      <Line data={data} options={options} />
    </div>
  )
}

