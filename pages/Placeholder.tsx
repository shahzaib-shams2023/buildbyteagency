import React from 'react';

interface Props {
  title: string;
}

const PlaceholderPage: React.FC<Props> = ({ title }) => {
  return (
    <div className="py-24 bg-slate-50 min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
      <p className="text-lg text-slate-600 max-w-2xl">
        This page is a placeholder for the demo structure. 
        Navigate back to <a href="/" className="text-brand-600 hover:underline font-medium">Home</a> to see the main content.
      </p>
    </div>
  );
};

export default PlaceholderPage;