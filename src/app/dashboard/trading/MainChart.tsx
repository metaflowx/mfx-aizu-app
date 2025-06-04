import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { Card } from '@/components/ui/card';
import CardSlider from './CardSlider';
import { useQuery } from '@tanstack/react-query';
import { ramaCoinGeckoPrice } from '@/lib/api/rest/ramaCoinGeckoPrice';

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
  const { data: ramaCoinGeckoPriceData } = useQuery({
    queryKey: ['ramaCoinGeckoPrice'],
    queryFn: () => {
      return ramaCoinGeckoPrice()
    }
    ,
  })


  const tester = ramaCoinGeckoPriceData;
  console.log(tester, "jssssss");



  const total___valume = ramaCoinGeckoPriceData?.[0]?.total_volume;
  const btcicon = ramaCoinGeckoPriceData?.[0]?.image;
  const high_24h = ramaCoinGeckoPriceData?.[0]?.high_24h;
  const low_24h = ramaCoinGeckoPriceData?.[0]?.low_24h;
  const current_price = ramaCoinGeckoPriceData?.[0]?.current_price;

  const priceUpDown = [
    {
      price: "Total Volume",
      value: `${total___valume}`,
      image: btcicon,
    },
    {
      price: "High 24h",
      value: `$${high_24h} BTC`
    },
    {
      price: "Low 24h",
      value: `$${low_24h}`
    },
    {
      price: "last price",
      value: `$${current_price}`
    },
  ]

  return (
    <Card className='p-4 mt-3 overflow-hidden'>
      <CardSlider />

      <div style={{
        border: " 1px solid #99999933"
      }} className="bg-black p-4 rounded-lg shadow-lg mt-5">
        <h2 className="text-[16px] md:text-[30px] font-[700] text-white mb-4 pt-4">Crypto Currency Price</h2>
        <div className="flex flex-wrap sm:flex-nowrap justify-start sm:justify-end items-center mb-2 gap-[8px] sm:gap-4" >
          {priceUpDown.map((item, index) => {
            return (
              <div className='flex items-center '>
                <div className='text-[12px] md:text-[18px] font-[400] text-white'>
                  <h3 className='pb-2'>{item.price}</h3>
                  <div style={{
                    display:'flex',
                    gap:'5px',
                    alignItems:'center'
                  }}>
                    {item.image && <img src={item.image} alt='' width={30} height={30} />}
                    <h6 className='font-[700]'>{item.value}</h6>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
        <ResponsiveContainer width="100%" height={450}>
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
