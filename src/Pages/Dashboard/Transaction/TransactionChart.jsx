import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Fahim",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Winslate",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Lisa",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Rose",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Bride",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sergio",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Martino",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Shiku",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Tom Holland",
    uv: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Deep",
    uv: 2590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Tus",
    uv: 3890,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sergio",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Martino",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Shiku",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Tom Holland",
    uv: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Deep",
    uv: 2590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Tus",
    uv: 3890,
    pv: 4300,
    amt: 2100,
  },
];

const TransactionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={600}
        height={200}
        data={data.slice(0, 10)}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#fb7c29" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionChart;
