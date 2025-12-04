import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronLeft, Layout, Star, Target, Zap, ChevronRight } from 'lucide-react';
import { DETAILED_SERVICES } from '../constants';
import { LeadForm } from '../components/LeadForm';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = DETAILED_SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Service not found</h1>
        <Link to="/services" className="text-brand-600 hover:text-brand-700 flex items-center font-medium">
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon || Layout;

  return (
    <div className="animate-fade-in bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Abstract Backgrounds */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="lg:w-2/3">
                <Link to="/services" className="inline-flex items-center text-brand-300 hover:text-white mb-8 transition-colors text-sm font-semibold tracking-wide uppercase">
                  <ChevronLeft className="h-4 w-4 mr-1" /> Services / {service.group}
                </Link>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8">
                  <Icon className="h-5 w-5" />
                  <span>{service.title}</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
                  {service.purpose}
                </p>
                <div className="flex flex-wrap gap-4">
                  {service.tech.split(', ').map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
             </div>
             <div className="lg:w-1/3 relative hidden lg:block">
                 {service.image && (
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-3 hover:rotate-0 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto object-cover"
                      />
                   </div>
                 )}
             </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-16">
              
              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                     <Zap className="h-6 w-6" />
                  </div>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-600 flex items-center justify-center mt-0.5 mr-3">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-lg text-slate-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get / Deliverables */}
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">What we deliver</h3>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <p className="text-slate-600 mb-6 text-lg">
                    We focus on delivering tangible value, not just code. When you work with us on {service.title}, you receive:
                  </p>
                  <ul className="space-y-4">
                    {service.deliverables.split(', ').map((item, idx) => (
                      <li key={idx} className="flex items-center">
                         <div className="h-2 w-2 rounded-full bg-brand-500 mr-4"></div>
                         <span className="text-slate-800 font-semibold text-lg">{item.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

               {/* Outcome */}
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Expected Outcome</h3>
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-xl">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                   <p className="text-2xl font-medium relative z-10 leading-relaxed">
                     "{service.outcome}"
                   </p>
                </div>
              </div>

              {/* Perfect For */}
              <div>
                 <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                   <div className="p-2 bg-red-100 rounded-lg text-red-600">
                     <Target className="h-6 w-6" />
                   </div>
                   Perfect For
                 </h3>
                 <div className="flex flex-wrap gap-3">
                   {service.perfectFor.map((item, idx) => (
                     <span key={idx} className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm hover:border-brand-300 hover:text-brand-600 transition-colors cursor-default">
                       {item}
                     </span>
                   ))}
                 </div>
              </div>

              {/* Why Choose */}
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                     <Star className="h-6 w-6" />
                  </div>
                  Why BuiltByTe?
                </h3>
                <div className="space-y-4">
                   {service.whyChoose.map((reason, idx) => (
                     <div key={idx} className="p-4 rounded-xl border-l-4 border-brand-500 bg-brand-50/50 flex items-center">
                       <span className="text-slate-900 font-semibold text-lg">{reason}</span>
                     </div>
                   ))}
                </div>
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5 mt-16 lg:mt-0">
               <div className="sticky top-28">
                 <div className="bg-gradient-to-br from-brand-600 to-accent-600 rounded-t-2xl p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                   <h3 className="text-2xl font-bold mb-2">Build your {service.title}</h3>
                   <p className="text-brand-100">Fill out the brief below to get a tailored technical proposal and estimate.</p>
                 </div>
                 <div className="bg-white rounded-b-2xl shadow-2xl border-x border-b border-slate-200 overflow-hidden">
                    <LeadForm />
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA Footer */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Explore other capabilities</h2>
           <p className="text-xl text-slate-600 mb-10">
             We offer end-to-end engineering services to support your growth.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
               to="/services" 
               className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 bg-white text-slate-700 font-bold rounded-full hover:bg-slate-50 transition-colors shadow-sm"
             >
               View all services
             </Link>
             <Link 
               to="/contact" 
               className="inline-flex items-center justify-center px-8 py-4 border border-transparent bg-slate-900 text-white font-bold rounded-full hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl"
             >
               Schedule a call <ChevronRight className="ml-2 h-4 w-4" />
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;