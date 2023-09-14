import axios from 'axios';
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
 
  {
    time: '1',
    CountOfPeople:50
  },
  {
    time: '2',
    CountOfPeople:20
  },
  {
    time: '3',
    CountOfPeople:40
  },
  {
    time: '4',
    CountOfPeople:30
  },
  {
    time: '5',
    CountOfPeople:60
  },
  {
    time: '6',
    CountOfPeople:100
  },
  {
    time: '7',
    CountOfPeople:25
  },
  {
    time: '8',
    CountOfPeople:50
  },
  {
    time: '9',
    CountOfPeople:60
  },
  {
    time: '10',
    CountOfPeople:20
  },
  {
    time: '11',
    CountOfPeople:50
  },
  {
    time: '12',
    CountOfPeople:60
  },
  {
    time: '13',
    CountOfPeople:5
  },
  {
    time: '14',
    CountOfPeople:30
  },
  {
    time: '15',
    CountOfPeople:50
  },
  {
    time: '16',
    CountOfPeople:20
  },
  {
    time: '17',
    CountOfPeople:75
  },
  {
    time: '18',
    CountOfPeople:45
  },
  {
    time: '19',
    CountOfPeople:65
  },
  {
    time: '20',
    CountOfPeople:78
  },
  {
    time: '21',
    CountOfPeople:99
  },
  {
    time: '22',
    CountOfPeople:26
  },
  {
    time: '23',
    CountOfPeople:52
  },
  {
    time: '24',
    CountOfPeople:66
  },
  
];




export default function IncomeRatioChart() {
   

 
    return (
      <div style={{ width: '100%', border:"3px solid #fb7c29",borderRadius:"15px",padding:"20px",backgroundColor:"#fff"}}>
        <h1 style={{marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Income Ratio Per Day</h1>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={600}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="linear" dataKey="CountOfPeople" stroke="#fb7c29" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
         
      </div>
    )
  
}