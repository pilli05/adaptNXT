import React, { useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const PieCharts = ({ setTotal }) => {
  const data = [
    { name: "WooCommerce Store", value: 1116 },
    { name: "Shopify Store", value: 884 },
  ];

  const COLORS = ["#ff8080", "#00bfff"];

  const totalValue = data.reduce((acc, data) => acc + data.value, 0);

  useEffect(() => {
    setTotal(totalValue);
  }, []);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="30%"
          labelLine={false}
          label={renderCustomizedLabel}
          startAngle={90}
          endAngle={-270}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          text={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieCharts;
