import React from 'react';
import { CreditCard, RotateCcw, AlertCircle, Mail, Ban, FileText } from 'lucide-react';

const RefundHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        Clear and straightforward refund policy
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light">
        Know your rights before starting a project with us
      </h2>
    </div>
  </section>
);

const RefundContent: React.FC = () => (
  <section className="py-20 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro */}
      <div className="mb-16">
        <p className="text-xl text-slate-700 leading-relaxed border-l-4 border-brand-500 pl-6">
          “BuiltByTe Agency offers transparent terms regarding refunds. This policy explains when refunds are available and how they are processed.”
        </p>
      </div>

      <div className="space-y-12">
        
        {/* Refund Eligibility */}
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg text-brand-600 shadow-sm border border-slate-100">
              <RotateCcw className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Refund Eligibility</h3>
          </div>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Refunds apply only to unused prepaid hours or undelivered fixed-price milestones.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Deposits for new projects are non-refundable once work begins.</span>
            </li>
          </ul>
        </div>

        {/* Refund Process */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Refund Process</h3>
          <ul className="space-y-3">
             <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Request refund via email: <a href="mailto:refunds@builtbyteagency.com" className="text-brand-600 hover:underline">refunds@builtbyteagency.com</a></span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Refunds processed within 14 business days.</span>
            </li>
             <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Any approved refund will be credited to the original payment method.</span>
            </li>
          </ul>
        </div>

        {/* Project Termination */}
        <div>
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Termination</h3>
           <ul className="space-y-3">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">If the client terminates early, unused prepaid hours are refunded.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Any work already completed is billed pro-rata.</span>
            </li>
          </ul>
        </div>

         {/* Non-Refundable Items */}
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-white rounded-lg text-brand-600 shadow-sm border border-slate-100">
               <Ban className="h-6 w-6" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900">Non-Refundable Items</h3>
          </div>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start">
              <AlertCircle className="h-5 w-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">Deposits after project kickoff.</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="h-5 w-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">Third-party costs already paid on client’s behalf.</span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-200 pt-12 mt-12">
           <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
           <div className="flex flex-col sm:flex-row gap-8">
             <div className="flex items-start">
                <div className="p-2 bg-brand-50 rounded-lg text-brand-600 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                   <p className="font-bold text-slate-900">Email for Refund Requests</p>
                   <a href="mailto:refunds@builtbyteagency.com" className="text-brand-600 hover:underline">
                     refunds@builtbyteagency.com
                   </a>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  </section>
);

const RefundPolicy: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <RefundHero />
      <RefundContent />
    </div>
  );
};

export default RefundPolicy;
