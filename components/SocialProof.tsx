import React, { useState, useEffect, useCallback } from 'react';
import { Check, MessageSquare, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { WHY_US_BULLETS, TESTIMONIALS, ENGAGEMENT_MODELS } from '../constants';

// --- Why Choose Us ---
export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Why ambitious companies choose BuiltByTe</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We aren't a body shop. We are a dedicated engineering partner that integrates with your team to solve complex problems with elegant code.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team collaborating" className="w-full h-auto" />
            </div>
          </Reveal>
          
          <div className="space-y-4">
             {WHY_US_BULLETS.map((bullet, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-50 flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">
                    <Check className="h-5 w-5 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg text-slate-800 font-medium pt-0.5">{bullet}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Carousel ---
export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextTestimonial, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextTestimonial]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Trusted by technical leaders</h2>
            <p className="text-slate-600">Don't just take our word for it.</p>
          </div>
        </Reveal>

        <Reveal>
          <div 
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Carousel Card */}
            <div className="bg-white rounded-3xl p-8 md:p-16 text-center relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-500">
              <Quote className="absolute top-10 left-10 h-16 w-16 text-brand-100 opacity-50" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-10">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>
                
                <div className="flex flex-col items-center justify-center animate-fade-in key={currentIndex}">
                   <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-2xl mb-4 shadow-lg shadow-brand-500/30">
                      {TESTIMONIALS[currentIndex].author.charAt(0)}
                   </div>
                   <div className="text-slate-900 font-bold text-xl">{TESTIMONIALS[currentIndex].author}</div>
                   <div className="text-brand-600 font-medium">{TESTIMONIALS[currentIndex].role}, {TESTIMONIALS[currentIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-16 p-4 rounded-full bg-white shadow-xl border border-slate-100 text-slate-500 hover:text-brand-600 hover:scale-110 transition-all focus:outline-none hidden md:block"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-16 p-4 rounded-full bg-white shadow-xl border border-slate-100 text-slate-500 hover:text-brand-600 hover:scale-110 transition-all focus:outline-none hidden md:block"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-10 gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-10 bg-brand-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// --- Engagement Models ---
export const EngagementSection: React.FC = () => {
  return (
    <section className="py-24 bg-transparent">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Flexible engagement models</h2>
            <p className="text-slate-600 text-lg">Choose the best way to work with us based on your project stage.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model, idx) => (
            <Reveal key={idx} delay={idx * 150} className="h-full">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 h-full group">
                <div className="h-12 w-12 bg-slate-50 rounded-xl mb-6 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                   <CheckCircle2 className="h-6 w-6 text-slate-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                <p className="text-slate-600 leading-relaxed">{model.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
    </section>
  );
};