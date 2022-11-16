import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className=" w-full  ">
      <div
        className={`bg-primary ${styles.paddingX} relative pb-8 md:pb-16 lg:px-52`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.flexStart} ${styles.paddingX} pb-8 md:pb-16 lg:px-52  `}
      >
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} py-8 md:pb-16 lg:px-52`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
