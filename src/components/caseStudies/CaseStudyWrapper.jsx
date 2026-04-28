import React from 'react';
import CaseStudyFooter from './CaseStudyFooter';

export default function CaseStudyWrapper({ children, pageName }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-1 w-full">
        {children}
      </div>
      <CaseStudyFooter currentProjectLink={pageName} />
    </div>
  );
}