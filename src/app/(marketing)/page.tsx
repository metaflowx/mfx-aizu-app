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

// import Container from "../global/container";
const HomePage = () => {
  return (
    <PageBox>
    
      <div className="relative overflow-x-hidden w-full pb-15 md:pb-10">
        <SpherePacking />
        <Hero id="home" />
      </div>
      <Wrapper>
        <AboutSection id="about" />
        <FeaturedIn id="features" />
        <BuySection id="howtobuy" />

        <TokenomicsPage  id="tokenomics"/>
        <RoadmapSection id="roadmap" />
        <FAQContactSection id="faqs" />

        <NewsLetter />
      </Wrapper>
    </PageBox>
  );
};

export default HomePage;
