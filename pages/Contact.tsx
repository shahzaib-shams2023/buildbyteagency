import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_FAQS } from '../constants';

const ContactHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
     {/* Abstract Backgrounds */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-800/20 blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
        Let’s build your next <span className="text-brand-400">system</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
        Reach out to discuss your project or request an estimate.
      </h2>
    </div>
  </section>
);

const ContactContent: React.FC = () => (
  <section className="py-24 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        
        {/* Left Column: Info & FAQ */}
        <div className="lg:col-span-5 space-y-12 mb-12 lg:mb-0">
          
          {/* Intro */}
          <div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">Get in touch</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our small senior team responds quickly to every inquiry. Provide a short project brief, and we’ll get back within 48 hours.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white border border-slate-200 text-brand-600 shadow-sm">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-5">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white border border-slate-200 text-brand-600 shadow-sm">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-5">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Phone</p>
                <a href={`tel:${CONTACT_PHONE}`} className="text-lg font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
             <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Common questions</h3>
             <ul className="space-y-4">
               {CONTACT_FAQS.map((faq, idx) => (
                 <li key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-200 transition-colors">
                   <h4 className="font-bold text-slate-900 mb-2 flex items-start text-lg">
                     <MessageSquare className="h-5 w-5 text-brand-500 mr-2 mt-1 flex-shrink-0" />
                     {faq.question}
                   </h4>
                   <p className="text-slate-600 pl-7 leading-relaxed">{faq.answer}</p>
                 </li>
               ))}
             </ul>
          </div>

        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="sticky top-28">
            <div className="relative">
              <LeadForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const ContactCta: React.FC = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Ready to get started?</h2>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-brand-600 transition-all shadow-xl"
      >
        Get estimate <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  </section>
);

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <ContactHero />
      <ContactContent />
      <ContactCta />
    </div>
  );
};

export default Contact;