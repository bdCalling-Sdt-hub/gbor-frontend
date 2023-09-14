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
    rent:50
  },
  {
    time: '2',
    rent:20
  },
  {
    time: '3',
    rent:40
  },
  {
    time: '4',
    rent:30
  },
  {
    time: '5',
    rent:60
  },
  {
    time: '6',
    rent:100
  },
  {
    time: '7',
    rent:25
  },
  {
    time: '8',
    rent:50
  },
  {
    time: '9',
    rent:60
  },
  {
    time: '10',
    rent:20
  },
  {
    time: '11',
    rent:50
  },
  {
    time: '12',
    rent:60
  },
  {
    time: '13',
    rent:5
  },
  {
    time: '14',
    rent:30
  },
  {
    time: '15',
    rent:50
  },
  {
    time: '16',
    rent:20
  },
  {
    time: '17',
    rent:75
  },
  {
    time: '18',
    rent:45
  },
  {
    time: '19',
    rent:65
  },
  {
    time: '20',
    rent:78
  },
  {
    time: '21',
    rent:99
  },
  {
    time: '22',
    rent:26
  },
  {
    time: '23',
    rent:52
  },
  {
    time: '24',
    rent:66
  },
  
];


export default function DailyRentChart() {
  

 
    return (
      <div style={{ width: '100%', border:"3px solid #fb7c29",borderRadius:"15px",padding:"20px",backgroundColor:"#fff"}}>
        <h1 style={{marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Daily rent</h1>

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
            <Line type="linear" dataKey="rent" stroke="#fb7c29" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        

        
           

        
      </div>
    )
  
}