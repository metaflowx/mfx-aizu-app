import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";

import BuySection from "@/components/marketing/buysection";
import Hero from "@/components/marketing/hero";

import AboutSection from "@/components/marketing/aboutsection";

import RoadmapSection from "@/components/marketing/roadmap";
import TokenomicsPage from "@/components/marketing/tokenomics";
import FAQContactSection from "@/components/marketing/accordian";
import FeaturedIn from "@/components/marketing/Featured";
import NewsLetter from "@/components/marketing/NewsLetter";
import SpherePacking from "@/components/marketing/banner/SpherePacking";
import PageBox from "@/components/PageBox";
import "aos/dist/aos.css";
// import Container from "../global/container";
const HomePage = () => {
  return (
    <PageBox>
    
    
      <div className="relative overflow-x-hidden w-full pb-15 md:pb-10">
      <SpherePacking />
        <Hero id="home" />
      </div>
      <div className="w-full" style={{background:"url(/images/bg/bg1.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"100% 100%"}}>

      <Wrapper>
        <AboutSection id="about" />
        <FeaturedIn id="features" />
        </Wrapper>
      </div>
      <div className="w-full" style={{background:"url(/images/bg/bg2.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover"}}>
        <Wrapper>
        <BuySection id="howtobuy" />

        <TokenomicsPage  id="tokenomics"/>
        <RoadmapSection id="roadmap" />
        </Wrapper>
        </div>
        <div className="w-full" style={{background:"url(/images/bg/bg3.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover"}}>
        <Wrapper>
        <FAQContactSection id="faqs" />

      
        </Wrapper>
        </div>
     
    </PageBox>
  );
};

export default HomePage;
