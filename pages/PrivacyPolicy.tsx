import React from 'react';
import { Shield, Lock, Eye, Server, UserCheck, Mail } from 'lucide-react';

const PrivacyHero: React.FC = () => (
  <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        Your privacy matters to us
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light">
        Clear, simple explanation of how we handle your data
      </h2>
    </div>
  </section>
);

const PrivacyContent: React.FC = () => (
  <section className="py-20 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro */}
      <div className="mb-16">
        <p className="text-xl text-slate-700 leading-relaxed border-l-4 border-brand-500 pl-6">
          “BuiltByTe Agency respects your privacy and is committed to protecting the personal information you provide. This policy explains how we collect, use, and safeguard your data.”
        </p>
      </div>

      <div className="space-y-12">
        
        {/* Information We Collect */}
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg text-brand-600 shadow-sm border border-slate-100">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Information We Collect</h3>
          </div>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Name, email, company info, project details from forms.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-brand-400 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Analytics and website usage data (cookies, IP, browser).</span>
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h3>
          <ul className="space-y-3">
             <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Respond to inquiries and project requests.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Improve website and service offerings.</span>
            </li>
             <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Analytics to understand usage patterns.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700 font-medium">No sharing or selling of personal data.</span>
            </li>
          </ul>
        </div>

        {/* Cookies and Tracking */}
        <div>
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking</h3>
           <p className="text-slate-700 mb-4">
             We use cookies to ensure our website functions correctly and to analyze how visitors use our site.
           </p>
           <ul className="space-y-3">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">We use cookies for analytics and site functionality.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Users can disable cookies in browser settings.</span>
            </li>
          </ul>
        </div>

        {/* Data Retention */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h3>
           <ul className="space-y-3">
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Personal information retained only as long as necessary for the purpose collected.</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700">Users can request deletion of personal data.</span>
            </li>
          </ul>
        </div>

         {/* Security Measures */}
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-white rounded-lg text-brand-600 shadow-sm border border-slate-100">
               <Lock className="h-6 w-6" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900">Security Measures</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
               <Shield className="h-8 w-8 text-green-500 mb-2" />
               <span className="text-slate-800 font-medium">Encryption for sensitive data</span>
            </li>
             <li className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
               <Server className="h-8 w-8 text-blue-500 mb-2" />
               <span className="text-slate-800 font-medium">Secure servers & access controls</span>
            </li>
             <li className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
               <UserCheck className="h-8 w-8 text-purple-500 mb-2" />
               <span className="text-slate-800 font-medium">Regular security audits</span>
            </li>
          </ul>
        </div>

        {/* User Rights */}
        <div>
           <h3 className="text-2xl font-bold text-slate-900 mb-4">User Rights</h3>
           <ul className="space-y-3">
             <li className="flex items-start">
               <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
               <span className="text-slate-700">Access, correct, or delete your personal data.</span>
             </li>
             <li className="flex items-start">
               <span className="h-2 w-2 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
               <span className="text-slate-700">Opt-out of marketing communications.</span>
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
                   <p className="font-bold text-slate-900">Email for Privacy Inquiries</p>
                   <a href="mailto:privacy@builtbyteagency.com" className="text-brand-600 hover:underline">
                     privacy@builtbyteagency.com
                   </a>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  </section>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
};

export default PrivacyPolicy;