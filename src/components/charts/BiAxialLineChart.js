import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BiAxialLineChart = () => {
  const data = [
    {
      name: "06/30/2024 - 07/06/2024",
      orders: 4,
      sales: 1404,
    },
    {
      name: "07/07/2024 - 07/13/2024",
      orders: 2,
      sales: 800,
    },
    {
      name: "07/21/2024 - 07/27/2024",
      orders: 2,
      sales: 500,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" tickFormatter={(tick) => `${tick / 1000}k`} />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />

        <Line
          yAxisId="right"
          type="monotone"
          dataKey="orders"
          stroke="#ff8000"
          dot={{ r: 6 }}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="sales"
          stroke="#00bfff"
          activeDot={{ r: 8 }}
          dot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiAxialLineChart;
