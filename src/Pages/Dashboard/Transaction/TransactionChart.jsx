import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Fahim",
    price: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Winslate",
    price: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Lisa",
    price: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Rose",
    price: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Bride",
    price: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sergio",
    price: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Martino",
    price: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Shiku",
    price: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Tom Holland",
    price: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Deep",
    price: 2590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Tus",
    price: 3890,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sergio",
    price: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Martino",
    price: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Shiku",
    price: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Tom Holland",
    price: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Deep",
    price: 2590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Tus",
    price: 3890,
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
        data={data.slice(0, 13)}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="price" fill="#fb7c29" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionChart;
