import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Sponsors from './components/Sponsors';
import PricingSection from './components/Pricing';
import { Svg1, Svg2, Svg3 , Svg4, Svg5, Svg6} from './components/Svgs';
import Footer from './components/Footer';


const App = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v3m12 0v3" />
        </svg>
      ),
      title: 'Cross-Chain Access',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem!',
    }, {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v3m12 0v3" />
        </svg>
      ),
      title: 'Something',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem!',
    }, {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v3m12 0v3" />
        </svg>
      ),
      title: 'Something Again',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, autem!',
    },
  ];
  const svgList = [Svg1, Svg2, Svg3,Svg4,Svg5,Svg6]; // Add the SVGs you want to display here for Sponsors
  const pricingCards = [
    {
      title: 'Starter',
      description: 'Best for large scale uses and extended redistribution rights.',
      price: '$99',
      period: '/month',
      buttonText: 'Get started',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 100+ developers',
        'Premium support: 36 months',
        'Free updates: 36 months',
      ],
    },
    {
      title: 'Intermediate',
      description: 'Best for large scale uses and extended redistribution rights.',
      price: '$299',
      period: '/month',
      buttonText: 'Get started',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 100+ developers',
        'Premium support: 36 months',
        'Free updates: 36 months',
      ],
    },
    {
      title: 'Professional',
      description: 'Best for large scale uses and extended redistribution rights.',
      price: '$699',
      period: '/month',
      buttonText: 'Get started',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 100+ developers',
        'Premium support: 36 months',
        'Free updates: 36 months',
      ],
    },
    // Add more pricing cards as needed
  ];
  return (
    <div>
      <Header />
      <Hero />
      <div className="container mx-auto py-8">
        <FeatureCard features={features} />
      </div>
      <div>
        <Sponsors svgs={svgList} />
      </div>
      <div>
        <PricingSection
          sectionTitle="Pricing"
          sectionDescription="Explore our plans tailored to fit your needs."
          pricingCards={pricingCards}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
