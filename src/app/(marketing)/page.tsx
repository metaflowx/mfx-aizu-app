import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";


import BuySection from "@/components/marketing/buysection";
import Hero from "@/components/marketing/hero";



import AboutSection from "@/components/marketing/aboutsection";
import PartnersSection from "@/components/marketing/partnersection";
import RoadmapSection from "@/components/marketing/roadmap";
import TokenomicsPage from "@/components/marketing/tokenomics";
import FAQContactSection from "@/components/marketing/accordian";
import FeaturedIn from "@/components/marketing/Featured";
// import Container from "../global/container";
const HomePage = () => {
    return (
        <Wrapper >
            <Hero />
            <AboutSection />
            <FeaturedIn />
            <BuySection />
            <PartnersSection />
            <RoadmapSection />
            <TokenomicsPage />
            <FAQContactSection />
           
        </Wrapper>
    )
};

export default HomePage
