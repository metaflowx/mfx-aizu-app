interface StatsCardProps {
    title: string
    value: string
    subValue: string
  }
  
  export function StatsCard({ title, value, subValue }: StatsCardProps) {
    return (
      <div
      style={{
       

background:" linear-gradient(180deg, #2D67FE 0%, rgba(45, 103, 254, 0) 100%)",



      }}
      className="p-[1px] rounded-[20px]"
      >

      <div className="rounded-[20px] bg-[#07070A] p-6 ">
        <div className="space-y-2">
          <div style={{
            

           background: "linear-gradient(90deg, rgba(220, 67, 67, 0) 0%, #DC4343 50%, rgba(220, 67, 67, 0) 100%)"
            
            
          }} 
          className="p-[1px] rounded-[8px]  "
          >
            <div className="bg-[#15171C] rounded-[8px] h-[50px] flex flex-col items-center justify-center ">
            <h3 className="text-sm font-medium text-muted-foreground text-center">{title}</h3>
            </div>

          </div>
          
          <div className="flex items-center flex-col">
            <p className="text-[20px] md:text-[30px] font-[700] text-white">{value}</p>
            <p className="text-[16px] md:text-[20px] font-[400] text-muted-foreground">{subValue}</p>
          </div>
        </div>
      </div>
      </div>
    )
  }