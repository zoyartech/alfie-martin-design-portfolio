import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import TCSMarathon from './pages/TCSMarathon';
import DesignStrategyAI from './pages/DesignStrategyAI';
import WorkflowOptimizationHVAC from './pages/WorkflowOptimizationHVAC';
import GrammarlyProject from './pages/GrammarlyProject';
import CaseStudyDetail from './pages/CaseStudyDetail';
import DesignMarathon from './pages/DesignMarathon';
import PolaroidProject from './pages/PolaroidProject';
import ArbolCaseStudy from './pages/ArbolCaseStudy.jsx';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SideQuests from './pages/SideQuests';
import AdinaProject from './pages/AdinaProject';
import TCSAttrition from './pages/TCSAttrition.jsx';
import SystemsThinkingPoem from './pages/SystemsThinkingPoem.jsx';
import BrandGallery from './pages/BrandGallery.jsx';
import ConfidenceLab from './pages/ConfidenceLab';
import RockefellerCapital from './pages/RockefellerCapital';
import BillingUsabilityStudy from './pages/BillingUsabilityStudy';
import IntroToDesigningExperiments from './pages/IntroToDesigningExperiments';
import ExamplesOfGrowthDesignExperiments from './pages/ExamplesOfGrowthDesignExperiments';
import EnterpriseContentStrategy from './pages/EnterpriseContentStrategy';
import ActivationGrammarly from './pages/ActivationGrammarly';
import Analytics from './pages/Analytics';
import PrincipalFinancial from './pages/PrincipalFinancial';
import RCM2 from './pages/RCM2';
import UXResearchStudies from './pages/UXResearchStudies';
import ExelonUXR from './pages/ExelonUXR';
import RCMUXR from './pages/RCMUXR';
import GlobalNav from './components/GlobalNav';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <>
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/CaseStudies" element={<CaseStudies />} />
      <Route path="/Writing" element={<Writing />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TCSMarathon" element={<TCSMarathon />} />
      <Route path="/DesignStrategyAI" element={<DesignStrategyAI />} />
      <Route path="/WorkflowOptimizationHVAC" element={<WorkflowOptimizationHVAC />} />
      <Route path="/GrammarlyProject" element={<GrammarlyProject />} />
      <Route path="/CaseStudyDetail" element={<CaseStudyDetail />} />
      <Route path="/DesignMarathon" element={<DesignMarathon />} />
      <Route path="/PolaroidProject" element={<PolaroidProject />} />
      <Route path="/ArbolCaseStudy" element={<ArbolCaseStudy />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/BlogPost" element={<BlogPost />} />
      <Route path="/SideQuests" element={<SideQuests />} />
      <Route path="/AdinaProject" element={<AdinaProject />} />
      <Route path="/TCSAttrition" element={<TCSAttrition />} />
      <Route path="/SystemsThinkingPoem" element={<SystemsThinkingPoem />} />
      <Route path="/BrandGallery" element={<BrandGallery />} />
      <Route path="/ConfidenceLab" element={<ConfidenceLab />} />
      <Route path="/RockefellerCapital" element={<RockefellerCapital />} />
      <Route path="/BillingUsabilityStudy" element={<BillingUsabilityStudy />} />
      <Route path="/IntroToDesigningExperiments" element={<IntroToDesigningExperiments />} />
      <Route path="/ExamplesOfGrowthDesignExperiments" element={<ExamplesOfGrowthDesignExperiments />} />
      <Route path="/EnterpriseContentStrategy" element={<EnterpriseContentStrategy />} />
      <Route path="/ActivationGrammarly" element={<ActivationGrammarly />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/PrincipalFinancial" element={<PrincipalFinancial />} />
      <Route path="/RCM2" element={<RCM2 />} />
      <Route path="/UXResearchStudies" element={<UXResearchStudies />} />
      <Route path="/ExelonUXR" element={<ExelonUXR />} />
      <Route path="/RCMUXR" element={<RCMUXR />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <NavigationTracker />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App