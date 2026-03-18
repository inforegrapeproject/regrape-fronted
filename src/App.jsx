import React from 'react';
import Hero from './components/landing/Hero';
import Problem from './components/landing/Problem';
import Technology from './components/landing/Technology';
import Ingredients from './components/landing/Ingredients';
import BusinessModel from './components/landing/BusinessModel';
import Footer from './components/landing/Footer';

export default function App() {
  return (
    <div className="bg-[#0f0518] min-h-screen">
      <Hero />
      <Problem />
      <Technology />
      <Ingredients />
      <BusinessModel />
      <Footer />
    </div>
  );
}
