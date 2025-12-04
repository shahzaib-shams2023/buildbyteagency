import React, { useState } from 'react';
import { ArrowRight, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';

const PortfolioHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
     {/* Abstract Backgrounds */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-brand-800/20 blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight">
        Real projects. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Real results.</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light">
        Browse our case studies to see measurable outcomes.
      </h2>
      <a 
        href="#cases" 
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-slate-900 bg-white hover:bg-brand-50 transition-colors shadow-lg shadow-white/10"
      >
        View case studies
      </a>
    </div>
  </section>
);

const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.categories.includes(activeCategory));

  return (
    <section id="cases" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter */}
        <div className="mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-3">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-brand-100 transition-all duration-300 group flex flex-col hover:-translate-y-1">
              
              {/* Image / Thumbnail */}
              <div className="h-56 w-full bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={`${item.title} screenshot`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {item.categories.slice(0, 2).map(cat => (
                    <span key={cat} className="px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-md text-xs font-bold text-slate-900 uppercase tracking-wide shadow-sm">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>

                <div className="space-y-4 mb-6 flex-grow">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100/50">
                    <span className="block text-xs font-bold text-red-600 uppercase mb-1">Problem</span>
                    <span className="text-sm text-slate-700 leading-tight block">{item.problem}</span>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100/50">
                    <span className="block text-xs font-bold text-green-600 uppercase mb-1">Result</span>
                    <span className="text-sm text-slate-900 font-bold leading-tight block">{item.result}</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-auto">
                   <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((t, idx) => (
                        <span key={idx} className="text-xs text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md font-medium">
                          {t}
                        </span>
                      ))}
                   </div>
                   <button className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-slate-900 hover:bg-brand-600 transition-colors">
                     View case study <ChevronRight className="ml-1 h-4 w-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
           <div className="text-center py-20">
             <p className="text-slate-500 text-lg">No case studies found for this category.</p>
             <button 
               onClick={() => setActiveCategory("All")}
               className="mt-4 text-brand-600 font-bold hover:underline"
             >
               View all projects
             </button>
           </div>
        )}
      </div>
    </section>
  );
};

const PortfolioCta: React.FC = () => (
  <section className="py-24 bg-white border-t border-slate-200 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">See how we can solve your problem</h2>
      <p className="text-xl text-slate-600 mb-10">
        Schedule a consultation or request a project estimate.
      </p>
      <a 
        href="/#contact"
        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-brand-600 transition-all shadow-xl"
      >
        Get estimate <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>
);

const Portfolio: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCta />
    </div>
  );
};

export default Portfolio;