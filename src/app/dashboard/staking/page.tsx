"use client";

export default function StakingPage() {
  const earningsData = [
    {
      id: 1,
      title: "Default",
      title1: "No Staking",
      amount: "$0.000",
      des: "3 Months Vesting from TGE",
      btn: false,
      gradient:
        "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(30,144,255,0.7) 100%)",
    },
    {
      id: 2,
      title: "Tier 1",
      title1: "Double Your",
      amount: "$AIZU",
      des: "10 Months Lockup",
      btn: true,
      gradient:
        "linear-gradient(135deg, rgba(255,140,0,0.8) 0%, rgba(255,69,0,0.7) 100%)",
    },
    {
      id: 3,
      title: "Tier 2",
      title1: "3x Your",
      amount: "$AIZU",
      des: "15 Months Lockup",
      btn: true,
      gradient:
        "linear-gradient(135deg, rgba(138,43,226,0.8) 0%, rgba(75,0,130,0.7) 100%)",
    },
    {
      id: 4,
      title: "Tier 3",
      title1: "4x Your",
      amount: "$AIZU",
      des: "20 Months Lockup",
      btn: true,
      gradient:
        "linear-gradient(135deg, rgba(46,204,113,0.8) 0%, rgba(26,188,156,0.7) 100%)",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[20px] md:text-[40px] text-white font-[700]">
          Staking Rules
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {earningsData.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-[20px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ background: item.gradient }}
          >
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ffffff50 50%, rgba(255,255,255,0) 100%)",
              }}
              className="p-[1px] rounded-[8px]"
            >
              <div className="bg-[#15171C] rounded-[8px] h-[50px] flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-white text-center">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <h3 className="text-[24px] font-[400] text-white pt-5">
                {item.title1}
              </h3>
              <h3 className="text-[24px] font-[700] text-white">
                {item.amount}
              </h3>
              <h3 className="text-[20px] font-[700] text-white pb-3 text-center">
                {item.des}
              </h3>

              {item.btn && (
                <button className="border border-white bg-gradient-to-r from-blue-500 to-purple-500  text-white h-[50px] w-full rounded-[40px] text-[20px] font-[400] transition-all duration-300 hover:bg-purple-600 hover:border-purple-400">
                  Stake
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
