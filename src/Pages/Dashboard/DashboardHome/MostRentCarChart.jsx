import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const MostRentCarChart = () => {
  const data = [
    {
      type: 'bmw',
      value: 25,
    },
    {
      type: 'maruti',
      value: 27,
    },
    
    {
      type: 'marcedees',
      value: 18,
    },
    {
      type: 'nissan',
      value: 15,
    },
    {
      type: 'Toyota',
      value: 10,
    },
    {
      type: 'mitsubishi',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 20,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} style={{height:"300px"}}/>;
};


export default MostRentCarChart;