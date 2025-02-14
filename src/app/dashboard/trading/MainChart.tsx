import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Card } from '@/components/ui/card';
import CardSlider from './CardSlider';

const data = [
  { time: '17:35:00', price: 6550 },
  { time: '17:40:00', price: 6620 },
  { time: '17:45:00', price: 6590 },
  { time: '17:50:00', price: 6610 },
  { time: '17:55:00', price: 66 },
  { time: '17:35:00', price: 655 },
  { time: '17:40:00', price: 660 },
  { time: '17:45:00', price: 6590 },
  { time: '17:50:00', price: 661 },
  { time: '17:55:00', price: 6680 },
  { time: '17:35:00', price: 655 },
  { time: '17:40:00', price: 6620 },
  { time: '17:45:00', price: 659 },
  { time: '17:50:00', price: 6610 },
  { time: '17:55:00', price: 6680 },
];



export default function MainChart() {
  return (
    <Card className='p-4 mt-3 overflow-hidden'>
    <CardSlider />

      <h2 className="text-xl font-bold mb-4">Crypto Currency Price</h2>
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="#ccc" tick={{ fill: '#ccc' }} />
            <YAxis stroke="#ccc" tick={{ fill: '#ccc' }} />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569' }} labelStyle={{ color: '#fff' }} itemStyle={{ color: '#fff' }} />
            <Area type="monotone" dataKey="price" stroke="#2563eb" fillOpacity={1} fill="url(#colorPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
