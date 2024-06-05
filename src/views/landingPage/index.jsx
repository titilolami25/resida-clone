import React from "react";
import InfoCard from "components/infocard";
import SubHeroSection from "components/subHeroSection";
import Header from "shared/header";
import OurExperience from "components/ourExperience";
import FindYourSpace from "components/FindYourSpace";
import "./landingPage.css";
import HeroSection from "components/heroSection";
import Footer from "shared/footer";
import DoYou from "components/doYou";
import Comprehensive from "components/comprehensive";
import DyProperty from "components/dyProperty";
import DiscoverPlace from "components/discoverPlace";
import FindHome from "components/findHome";
import NeedOffice from "components/needOffice";
import FeaturedCard from "shared/featuredCard";
import FeaturedProperties from "components/featuredProperties";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection/>
            <SubHeroSection />
            <InfoCard />
            <OurExperience />
            <FindYourSpace />
            <Comprehensive/>
            <FeaturedProperties/>
            <DyProperty/>
            <DiscoverPlace/>
            <FindHome/>
            <NeedOffice/>
            <DoYou/>
            <Footer/>
           
        </div>
    );
};

export default LandingPage;

