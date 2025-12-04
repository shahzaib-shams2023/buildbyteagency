import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 rounded-2xl p-12 text-center border border-green-100">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
        <p className="text-slate-600">We reply within 48 hours.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-green-700 font-medium hover:text-green-800 underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-slate-900 px-8 py-6">
        <h3 className="text-xl font-bold text-white">Start with a short brief</h3>
        <p className="text-slate-400 text-sm mt-1">We reply within 48 hours.</p>
      </div>
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
            placeholder="Jane Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
            placeholder="jane@company.com"
          />
        </div>
        
        {/* <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
          <input 
            type="text" 
            id="company" 
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
            placeholder="Company Ltd"
          />
        </div> */}

        <div>
           <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Budget range</label>
           <select 
             id="budget"
             className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-white"
           >
             <option value="">Select a range</option>
             <option value="10k-25k">$10k - $25k</option>
             <option value="25k-50k">$25k - $50k</option>
             <option value="50k-100k">$50k - $100k</option>
             <option value="100k+">$100k+</option>
           </select>
        </div>

        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-slate-700 mb-1">Project summary</label>
          <textarea 
            id="summary" 
            rows={4}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow resize-none"
            placeholder="Tell us about your project goals..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
              Sending...
            </>
          ) : (
            'Get estimate'
          )}
        </button>
      </form>
    </div>
  );
};