import { Column } from "@ant-design/plots";
import React from "react";

const TransactionChart = () => {
  const columnStyle = {
    fill: "red",
    fillOpacity: 0.5,
    stroke: "black",
    lineWidth: 1,
    lineDash: [4, 5],
    strokeOpacity: 0.7,
    shadowColor: "black",
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    cursor: "pointer",
  };
  const data = [
    {
      year: "1930 年",
      value: 38,
    },
    {
      year: "1931 年",
      value: 42,
    },
    {
      year: "1932 年",
      value: 45,
    },
    {
      year: "1933 年",
      value: 48,
    },
    {
      year: "1934 年",
      value: 50,
    },
    {
      year: "1935 年",
      value: 55,
    },
    {
      year: "1936 年",
      value: 60,
    },
    {
      year: "1937 年",
      value: 65,
    },
    {
      year: "1938 年",
      value: 70,
    },
    {
      year: "1939 年",
      value: 75,
    },
    {
      year: "1940 年",
      value: 80,
    },
    {
      year: "1941 年",
      value: 85,
    },
    {
      year: "1942 年",
      value: 90,
    },
    {
      year: "1943 年",
      value: 95,
    },
    {
      year: "1944 年",
      value: 100,
    },
    {
      year: "1945 年",
      value: 105,
    },
    {
      year: "1946 年",
      value: 110,
    },
    {
      year: "1947 年",
      value: 115,
    },
    {
      year: "1948 年",
      value: 120,
    },
    {
      year: "1949 年",
      value: 125,
    },
    {
      year: "1950 年",
      value: 130,
    },
    {
      year: "1951 年",
      value: 135,
    },
    {
      year: "1952 年",
      value: 140,
    },
    {
      year: "1953 年",
      value: 145,
    },
    {
      year: "1954 年",
      value: 150,
    },
    {
      year: "1955 年",
      value: 155,
    },
    {
      year: "1956 年",
      value: 160,
    },
    {
      year: "1957 年",
      value: 165,
    },
    {
      year: "1958 年",
      value: 170,
    },
    {
      year: "1959 年",
      value: 175,
    },
    {
      year: "1960 年",
      value: 180,
    },
  ];
  {
  }

  const config = {
    data,
    xField: "value",
    yField: "year",
    legend: true,
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    lineWidth: 10,
    scrollbar: {
      type: "horizontal",
    },
    color: "#fb7c29",
  };
  return (
    <div>
      <Column {...config} />
    </div>
  );
};

export default TransactionChart;
