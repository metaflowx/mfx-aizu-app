import CommonButton from "../ui/CommonButton";

const HowToBuySection = ({id}:{id:string}) => {
  const steps = [
    {
      title: "Choose a Crypto ",
      title1: "Exchange",
      description:
        "Find a reliable cryptocurrency exchange that lists AizuCoin. Popular platforms may include centralized exchanges (CEX) or decentralized exchanges (DEX). Create an account and complete the necessary verification if required.",
      icon: "/images/buy/1.png",
    },
    {
      title: "Deposit Funds ",
      title1: "& Swap",
      description:
        "Deposit funds into your exchange wallet using fiat currency (USD, EUR) or another cryptocurrency (like USDT, ETH, or BNB). Once funded, search for AizuCoin and place an order to buy it.",
      icon: "/images/buy/2.png",
    },
    {
      title: "Secure Your ",
      title1: "AizuCoin",
      description:
        "After purchasing, store your AizuCoin securely in a personal crypto wallet, such as a hardware wallet or a secure software wallet. Avoid keeping large amounts on exchanges to reduce security risks.",
      icon: "/images/buy/3.png",
    },
  ];

  return (
    <section id={id} className="py-1 sm:py-16 max-w-7xl mx-auto mt-[0px] sm:mt-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 p-4">
      <div
  className="group flex items-center justify-center bg-transparent p-1 md:p-8 text-center text-black rounded-[40px] relative mt-[0]"
>
  <div className="mt-[50px] md:mt-[20px] flex justify-center items-center">
    <div className="w-full flex flex-col justify-center items-center">
      <img
        src="/images/buy/aizucoin.png"
        className="  transition-transform duration-300 group-hover:scale-110"
      />
      <p data-aos="fade-right" className="pt-3 text-[40px] md:text-[55px] font-[700] text-[#fff] leading-snug">How to Buy</p>
      <p data-aos="fade-right" className="text-[40px] md:text-[55px] font-[700] text-[#fff] leading-snug">AizuCoin</p>
      <CommonButton data-aos="fade-right" title="Buy" width="165px" />
    </div>
  </div>
</div>

        
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-[#2865FF] bg-transparent p-8 text-center text-black rounded-[40px] transition-all duration-300 hover:bg-[#2865FF] hover:bg-opacity-20 hover:scale-105"
          >
            <div>
              <div className="flex items-center space-x-3">
                <img data-aos="fade-right" src={item.icon} alt="Step Icon" className="sm:w-auto sm:h-auto w-[40px] h-[40px] object-contain" />
                <div className="text-left pl-3">
                  <p data-aos="fade-left" className="text-[20px] sm:text-[35px] font-[700] leading-snug bg-clip-text text-transparent"
                    style={{ background: "linear-gradient(90deg, #2865FF 0%, #DD4242 100%)", backgroundClip: "text" }}>
                    {item.title}
                  </p>
                  <p data-aos="fade-right" className="text-[20px] sm:text-[35px] font-[700] leading-snug bg-clip-text text-transparent"
                    style={{ background: "linear-gradient(90deg, #2865FF 0%, #DD4242 100%)", backgroundClip: "text" }}>
                    {item.title1}
                  </p>
                </div>
              </div>
              <p data-aos="fade-left" className="text-[16px] sm:text-[20px] font-[500] text-white text-left leading-[31px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBuySection;