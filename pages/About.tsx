import React from 'react';
import { Check, Calendar, ArrowRight, User } from 'lucide-react';
import { 
  ABOUT_APPROACH_BULLETS, 
  ABOUT_DIFFERENTIATORS, 
  TEAM_MEMBERS, 
  TIMELINE_EVENTS 
} from '../constants';

const AboutHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        We build systems that just work.
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
        Web, mobile, cloud, AI — delivered with clarity and reliability.
      </h2>
      <a 
        href="/#contact" 
        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-lg"
      >
        Contact us
      </a>
    </div>
  </section>
);

const MissionSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-block p-3 rounded-full bg-brand-50 mb-6">
         <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Our Mission</span>
      </div>
      <p className="text-2xl md:text-3xl text-slate-900 font-medium leading-relaxed">
        “To engineer digital products and internal systems that remove friction, scale cleanly, and match real-world business needs. We focus on clarity, maintainability, and measurable outcomes in every project.”
      </p>
    </div>
  </section>
);

const ApproachSection: React.FC = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* How We Work */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">How we work</h3>
          <ul className="space-y-4">
            {ABOUT_APPROACH_BULLETS.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center mt-1 mr-4">
                  <Check className="h-4 w-4 text-brand-600" />
                </div>
                <span className="text-lg text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Clients Choose Us */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Why clients choose us</h3>
          <ul className="space-y-4">
            {ABOUT_DIFFERENTIATORS.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-4">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-lg text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const TeamSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900">Meet the team</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div key={idx} className="bg-white border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
            <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
              <User className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-brand-600 font-medium text-sm mb-2">{member.role}</p>
            <p className="text-slate-600 text-sm">{member.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TimelineSection: React.FC = () => (
  <section className="py-20 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900">Our journey</h2>
      </div>
      <div className="relative">
        {/* Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 hidden md:block"></div>
        
        <div className="space-y-12">
          {TIMELINE_EVENTS.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center justify-between ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-5/12"></div>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-brand-600 shadow-lg text-white font-bold text-sm mb-4 md:mb-0">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="w-full md:w-5/12 text-center md:text-left">
                <div className={`bg-white p-6 rounded-lg shadow-sm border border-slate-100 ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                  <span className="block text-2xl font-bold text-brand-600 mb-1">{item.year}</span>
                  <span className="text-slate-700 font-medium">{item.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AboutCta: React.FC = () => (
  <section className="py-20 bg-slate-900 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-6">Start a project with us</h2>
      <p className="text-xl text-slate-300 mb-10">
        We respond within 48 hours. Get an estimate or schedule a call.
      </p>
      <a 
        href="/#contact"
        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition-all"
      >
        Contact us <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>
);

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <AboutHero />
      <MissionSection />
      <ApproachSection />
      <TeamSection />
      <TimelineSection />
      <AboutCta />
    </div>
  );
};

export default About;