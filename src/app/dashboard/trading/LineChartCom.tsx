import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineChartCom = () => {
  return (
    <ResponsiveContainer width={140} height={50}>
      <LineChart width={300} height={100} data={data}>
        {/* Define the linear gradient */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stopColor="#2865FF" stopOpacity={1} />
            <stop offset="100%" stopColor="#FF3D33" stopOpacity={1} />
          </linearGradient>
        </defs>
        
        {/* Line with gradient */}
        <Line type="monotone" dataKey="pv" stroke="url(#lineGradient)" strokeWidth={2} dot={false} />
        
      
     
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartCom;
