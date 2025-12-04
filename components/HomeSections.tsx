import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, BarChart3, Clock, Layout, PlayCircle, Zap, Shield, MousePointerClick } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Reveal } from './Reveal';
import { 
  TRUST_METRICS, PROBLEMS, CORE_SERVICES, PROCESS_STEPS, CASE_STUDY 
} from '../constants';

// --- Hero Section ---
export const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-32">
      {/* Animated Gradient Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[0%] -right-[10%] w-[500px] h-[500px] rounded-full bg-accent-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-pink-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold mb-6 shadow-sm">
                 <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Available for new projects
              </div>
              <h1 className="text-5xl tracking-tight font-display font-bold text-slate-900 sm:text-6xl md:text-7xl leading-[1.1]">
                Custom systems engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">scale and clarity.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="mt-6 text-lg text-slate-600 sm:text-xl leading-relaxed max-w-lg">
                Web, mobile, cloud, and AI — delivered by a small, senior team focused on maintainability and performance.
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transform hover:-translate-y-1"
                >
                  Start your project
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-lg font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  View services
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
             <Reveal delay={600} className="w-full relative z-10">
               <div className="relative rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-4 shadow-2xl ring-1 ring-slate-900/5 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                  <img 
                    className="w-full rounded-xl shadow-lg" 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                    alt="Dashboard screenshot" 
                  />
                  
                  {/* Floating Stats Card 1 */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">Performance</p>
                      <p className="text-lg font-bold text-slate-900">99.9%</p>
                    </div>
                  </div>

                   {/* Floating Stats Card 2 */}
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float animation-delay-2000">
                    <div className="bg-brand-100 p-2 rounded-lg text-brand-600">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase">Security</p>
                      <p className="text-lg font-bold text-slate-900">Enterprise</p>
                    </div>
                  </div>
               </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Trust Bar ---
export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {TRUST_METRICS.map((metric, idx) => (
            <Reveal key={idx} delay={idx * 150} className="h-full">
              <div className="flex flex-col items-center md:items-start px-8 pt-6 md:pt-0">
                <span className="text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 mb-2">{metric.value}</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{metric.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Problems We Solve ---
export const ProblemsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">We remove friction from product engineering</h2>
            <p className="text-lg text-slate-600">Stop fighting your codebase. Start shipping features.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem, idx) => (
            <Reveal key={idx} delay={idx * 150} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full flex flex-col items-start group">
                <div className="flex-shrink-0 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors flex items-center justify-center">
                     <Layout className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <p className="text-xl text-slate-800 font-semibold leading-relaxed">
                  {problem}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Services Grid ---
export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-b from-brand-50 to-transparent opacity-50 rounded-l-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Core services</h2>
              <p className="text-lg text-slate-600">Comprehensive digital solutions engineered for growth and stability.</p>
            </div>
            <a href="/services" className="text-brand-600 font-bold hover:text-brand-700 flex items-center gap-2 group">
              See full services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = service.icon || Layout;
            return (
              <Reveal key={idx} delay={idx * 100} className="h-full">
                <div className="group relative p-8 bg-white border border-slate-100 rounded-3xl hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 h-full overflow-hidden">
                  {/* Gradient Border Overlay on Hover */}
                  <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-brand-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  
                  {/* Inner White BG */}
                  <div className="absolute inset-[1px] bg-white rounded-[23px] -z-10"></div>

                  <div className="mb-6 inline-block p-4 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-brand-500/30">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-brand-600 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- How We Work ---
export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Delivery in three predictable steps</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We've refined our process over 10 years to minimize risk and maximize velocity.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
           {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 z-0"></div>

          {PROCESS_STEPS.map((step, idx) => (
            <Reveal key={idx} delay={idx * 200}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-8 relative group">
                   <div className="absolute inset-0 rounded-full bg-brand-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                   <span className="font-display font-bold text-3xl text-brand-400">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed px-4">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Case Study ---
export const CaseStudySection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                  <Layout className="h-3 w-3" /> Featured Case Study
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                  {CASE_STUDY.client}
                </h3>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {CASE_STUDY.result}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-slate-400 text-xs uppercase font-bold mb-1">Impact</p>
                      <p className="text-2xl font-bold text-white">40% <span className="text-sm font-normal text-slate-400">Cost Savings</span></p>
                   </div>
                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-slate-400 text-xs uppercase font-bold mb-1">Speed</p>
                      <p className="text-2xl font-bold text-white">16x <span className="text-sm font-normal text-slate-400">Faster Deploys</span></p>
                   </div>
                </div>

                <div>
                  <a href="/portfolio" className="inline-flex items-center text-white font-bold hover:text-brand-300 transition-colors group">
                    Read full case study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Visual/Chart */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl">
                 <div className="flex items-center justify-between mb-6">
                    <h4 className="text-slate-300 text-sm font-semibold uppercase tracking-wider">{CASE_STUDY.metricLabel}</h4>
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-slate-600"></span>
                      <span className="w-3 h-3 rounded-full bg-brand-500"></span>
                    </div>
                 </div>
                 <div className="w-full h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={CASE_STUDY.chartData}>
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                      />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]} animationDuration={1500}>
                        {CASE_STUDY.chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 1 ? '#3b82f6' : '#475569'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                 </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};