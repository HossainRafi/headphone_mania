import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Graph = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("graphData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="py-10 bg-slate-300">
      <section className="pb-16">
        <AreaChart
          width={1000}
          height={350}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8D3DAF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8D3DAF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#8D3DAF"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
        <h1 className="text-blue-600 text-center text-4xl my-5 font-bold font-serif">
          Investment VS Revenue
        </h1>
      </section>
      <section>
        <BarChart width={1000} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#383CC1" />
          <Bar dataKey="revenue" fill="#5518A1" />
        </BarChart>
        <h1 className="text-blue-600 text-center text-4xl my-5 font-bold font-serif">
          Investment VS Revenue
        </h1>
      </section>
      <section>
        <PieChart width={1000} height={450}>
          <Pie
            data={data}
            dataKey="sell"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#23C4ED"
          />
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={130}
            fill="#3944F7"
            label
          />
          <Tooltip />
        </PieChart>
        <h1 className="text-blue-600 text-center text-4xl my-5 font-bold font-serif">
          Investment VS Revenue
        </h1>
      </section>
    </div>
  );
};

export default Graph;
