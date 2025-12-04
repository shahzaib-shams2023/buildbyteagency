import React from 'react';
import { 
  HeroSection, 
  TrustBar, 
  ProblemsSection, 
  ServicesSection, 
  ProcessSection,
  CaseStudySection
} from '../components/HomeSections';
import { 
  WhyUsSection, 
  TestimonialsSection, 
  EngagementSection 
} from '../components/SocialProof';
import { LeadForm } from '../components/LeadForm';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <TrustBar />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudySection />
      <WhyUsSection />
      <TestimonialsSection />
      
      <div id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 mb-12 lg:mb-0">
               <EngagementSection />
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;