import React from 'react';
import { FileText, DollarSign, Copyright, Lock, ShieldAlert, XCircle, Scale, Gavel, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TermsHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        Terms and Conditions
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light">
        Clear rules for using our services and engaging with our team
      </h2>
    </div>
  </section>
);

const TermsContent: React.FC = () => (
  <section className="py-20 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro */}
      <div className="mb-16">
        <p className="text-xl text-slate-700 leading-relaxed border-l-4 border-brand-500 pl-6">
          “These Terms and Conditions govern the relationship between BuiltByTe Agency and our clients. By using our services, you agree to these terms.”
        </p>
      </div>

      <div className="space-y-12">
        
        {/* Scope of Services */}
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg text-brand-600 shadow-sm border border-slate-100">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Scope of Services</h3>
          </div>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Services include web, mobile, custom software, cloud, AI/ML, DevOps, UI/UX, API, and database management.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Deliverables and timelines are defined in project proposals or agreements.</span>
            </li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-brand-500" /> Payment Terms
          </h3>
          <ul className="space-y-3">
             <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700"><strong>Fixed-price projects:</strong> milestone-based payments.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700"><strong>Time & materials projects:</strong> hourly billing, monthly invoicing.</span>
            </li>
             <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700"><strong>Retainer contracts:</strong> monthly or agreed period payments.</span>
            </li>
             <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Late payments may incur interest or project suspension.</span>
            </li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div>
           <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Copyright className="h-6 w-6 text-brand-500" /> Intellectual Property
          </h3>
           <ul className="space-y-3">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Clients own final deliverables upon full payment.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">BuiltByTe retains rights to pre-existing code, libraries, or tools used in development.</span>
            </li>
          </ul>
        </div>

        {/* Confidentiality */}
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
           <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg text-brand-600 shadow-sm border border-slate-100">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Confidentiality</h3>
          </div>
           <ul className="space-y-3 pl-2">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">All client information is kept confidential.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Non-disclosure applies during and after project completion.</span>
            </li>
          </ul>
        </div>

        {/* Limitation of Liability */}
        <div>
           <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-brand-500" /> Limitation of Liability
          </h3>
           <ul className="space-y-3">
             <li className="flex items-start">
               <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
               <span className="text-slate-700">BuiltByTe not liable for indirect, incidental, or consequential damages.</span>
             </li>
             <li className="flex items-start">
               <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
               <span className="text-slate-700">Liability capped to the total project fee paid.</span>
             </li>
           </ul>
        </div>

         {/* Termination */}
        <div>
           <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <XCircle className="h-6 w-6 text-brand-500" /> Termination
          </h3>
           <ul className="space-y-3">
             <li className="flex items-start">
               <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
               <span className="text-slate-700">Either party may terminate with written notice.</span>
             </li>
             <li className="flex items-start">
               <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
               <span className="text-slate-700">Client pays for work completed up to termination date.</span>
             </li>
             <li className="flex items-start">
               <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
               <span className="text-slate-700">Refunds apply only to unused prepaid hours (see <NavLink to="/refund-policy" className="text-brand-600 hover:underline">Refund Policy</NavLink>).</span>
             </li>
           </ul>
        </div>

        {/* Dispute Resolution & Governing Law */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="h-5 w-5 text-brand-500" /> Dispute Resolution
              </h3>
               <ul className="space-y-3">
                 <li className="flex items-start">
                   <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-slate-700 text-sm">Disputes resolved via negotiation or mediation.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-slate-700 text-sm">Applicable law: Pakistan law (or client-specified jurisdiction if agreed).</span>
                 </li>
               </ul>
            </div>
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Gavel className="h-5 w-5 text-brand-500" /> Governing Law
              </h3>
               <ul className="space-y-3">
                 <li className="flex items-start">
                   <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
                   <span className="text-slate-700 text-sm">These terms governed by the laws of Pakistan unless stated otherwise.</span>
                 </li>
               </ul>
            </div>
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
                   <p className="font-bold text-slate-900">Email for Legal Inquiries</p>
                   <a href="mailto:legal@builtbyteagency.com" className="text-brand-600 hover:underline">
                     legal@builtbyteagency.com
                   </a>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  </section>
);

const TermsAndConditions: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <TermsHero />
      <TermsContent />
    </div>
  );
};

export default TermsAndConditions;