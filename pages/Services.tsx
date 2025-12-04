import React from 'react';
import { ArrowRight, Check, Code2, Cpu, ChevronRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DETAILED_SERVICES, SERVICE_MENU_GROUPS } from '../constants';

const ServicesHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
     {/* Abstract Backgrounds */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-brand-800/20 blur-3xl"></div>
        <div className="absolute bottom-[0%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent-800/20 blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight">
        Digital services engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">reliability</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
        Web, mobile, cloud, AI, and DevOps solutions delivered by a senior team focused on long-term value.
      </h2>
      <a 
        href="#quote" 
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-slate-900 bg-white hover:bg-brand-50 transition-colors shadow-lg shadow-white/10"
      >
        Request a quote
      </a>
    </div>
  </section>
);

const ServicesGrid: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {SERVICE_MENU_GROUPS.map((group) => {
         const mainService = DETAILED_SERVICES.find(s => s.id === group.mainServiceId);
         if (!mainService) return null;
         const Icon = mainService.icon || Layout;

         return (
           <div key={group.title} className="scroll-mt-32" id={group.title.toLowerCase().replace(/\s+/g, '-')}>
              {/* Group Title */}
              <div className="flex items-center gap-4 mb-10">
                 <div className="h-12 w-12 bg-gradient-to-br from-brand-600 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                   <Icon className="h-6 w-6" />
                 </div>
                 <h2 className="text-3xl font-display font-bold text-slate-900">{group.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Service Card (Featured) */}
                <div className="lg:col-span-1">
                   <Link 
                    to={`/services/${mainService.id}`}
                    className="h-full bg-slate-900 rounded-3xl shadow-2xl p-8 flex flex-col text-white hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group"
                   >
                     {/* Abstract shape */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                     
                     <h3 className="text-2xl font-display font-bold mb-4 relative z-10">{mainService.title}</h3>
                     <p className="text-slate-300 mb-8 flex-grow leading-relaxed relative z-10">
                       {mainService.purpose}
                     </p>
                     <div className="mt-auto relative z-10">
                        <span className="inline-flex items-center font-bold text-brand-400 group-hover:text-white transition-colors">
                          Explore Main Service <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                     </div>
                   </Link>
                </div>

                {/* Tech Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                   {group.items.map(itemId => {
                      const item = DETAILED_SERVICES.find(s => s.id === itemId);
                      if (!item) return null;
                      const TechIcon = item.icon || Code2;
                      
                      return (
                        <Link 
                          key={itemId}
                          to={`/services/${item.id}`}
                          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:border-brand-300 hover:-translate-y-1 transition-all group/card flex flex-col"
                        >
                          <div className="flex items-start justify-between mb-4">
                             <div className="p-2.5 bg-brand-50 rounded-xl text-brand-600 group-hover/card:bg-brand-600 group-hover/card:text-white transition-colors">
                               <TechIcon className="h-5 w-5" />
                             </div>
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover/card:text-brand-600 transition-colors">{item.title}</h4>
                          <p className="text-sm text-slate-600 mb-4 line-clamp-2">{item.purpose}</p>
                          <div className="mt-auto flex items-center text-xs font-bold text-brand-600 uppercase tracking-wide opacity-0 group-hover/card:opacity-100 transition-opacity">
                            View details <ChevronRight className="ml-1 h-3 w-3" />
                          </div>
                        </Link>
                      );
                   })}
                </div>
              </div>
           </div>
         );
      })}
    </div>
  </section>
);

const ServicesCta: React.FC = () => (
  <section id="quote" className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Start your project with a focused brief</h2>
      <p className="text-xl text-slate-600 mb-10">
        We respond within 48 hours with a technical review and preliminary estimate.
      </p>
      
      <div className="max-w-md mx-auto">
        <a 
          href="/#contact"
          className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-brand-600 transition-all shadow-xl"
        >
          Request a quote <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      <p className="mt-6 text-slate-500 text-sm">No commitment required. 100% confidential.</p>
    </div>
  </section>
);

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
    </div>
  );
};

export default Services;