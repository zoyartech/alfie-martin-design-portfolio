import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
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
import GlossierStrategy from './pages/GlossierStrategy.jsx';
import BlogPost from './pages/BlogPost';
import SideQuests from './pages/SideQuests';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import AdinaProject from './pages/AdinaProject';
import TCSAttrition from './pages/TCSAttrition.jsx';
import SystemsThinkingPoem from './pages/SystemsThinkingPoem.jsx';
import BrandGallery from './pages/BrandGallery.jsx';
import BrandConcepts from './pages/BrandConcepts';
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
import ScrollProgress from './components/ScrollProgress';
import GlobalFooter from './components/GlobalFooter';
import AdminInsights from './pages/AdminInsights';
import CodeFlow from './pages/CodeFlow';
import DescriptExperiment from './pages/DescriptExperiment';
import ChatWidget from './components/chat/ChatWidget';
import B6 from './pages/b6';
import VoiceUserInterface from './pages/VoiceUserInterface';
import VoiceSimulation from './pages/VoiceSimulation';
import Veil from './pages/Veil';
import FluidUI from './pages/FluidUI';
import DesignSystem from './pages/DesignSystem';
import SplashScreen from './components/SplashScreen';
import ConversationCraft from './pages/ConversationCraft';
import DesignSystemPlayground from './pages/DesignSystemPlayground';
import ComponentShowcase from './pages/ComponentShowcase';
import ArtDirection from './pages/ArtDirection';
import CaseStudyWrapper from './components/caseStudies/CaseStudyWrapper';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  const location = useLocation();

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
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <GlobalNav />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1 flex flex-col w-full relative"
        >
          {/* Slide-in panel (during exit) */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#faf9f6] flex items-center justify-center pointer-events-none"
            variants={{
              initial: { x: "100%" },
              animate: { x: "100%", transition: { duration: 0 } },
              exit: { x: "0%", transition: { duration: 0.3, ease: "easeInOut" } }
            }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase animate-pulse">
              Loading
            </span>
          </motion.div>

          {/* Slide-out panel (during enter) */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#faf9f6] flex items-center justify-center pointer-events-none"
            variants={{
              initial: { x: "0%" },
              animate: { x: "-100%", transition: { duration: 0.4, ease: "easeInOut" } },
              exit: { x: "-100%", transition: { duration: 0 } }
            }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase animate-pulse">
              Loading
            </span>
          </motion.div>

          <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/CaseStudies" element={<CaseStudies />} />
      <Route path="/Writing" element={<Writing />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TCSMarathon" element={<CaseStudyWrapper pageName="TCSMarathon"><TCSMarathon /></CaseStudyWrapper>} />
      <Route path="/DesignStrategyAI" element={<CaseStudyWrapper pageName="DesignStrategyAI"><DesignStrategyAI /></CaseStudyWrapper>} />
      <Route path="/WorkflowOptimizationHVAC" element={<CaseStudyWrapper pageName="WorkflowOptimizationHVAC"><WorkflowOptimizationHVAC /></CaseStudyWrapper>} />
      <Route path="/GrammarlyProject" element={<CaseStudyWrapper pageName="GrammarlyProject"><GrammarlyProject /></CaseStudyWrapper>} />
      <Route path="/CaseStudyDetail" element={<CaseStudyWrapper pageName="CaseStudyDetail"><CaseStudyDetail /></CaseStudyWrapper>} />
      <Route path="/DesignMarathon" element={<CaseStudyWrapper pageName="DesignMarathon"><DesignMarathon /></CaseStudyWrapper>} />
      <Route path="/PolaroidProject" element={<CaseStudyWrapper pageName="PolaroidProject"><PolaroidProject /></CaseStudyWrapper>} />
      <Route path="/ArbolCaseStudy" element={<CaseStudyWrapper pageName="ArbolCaseStudy"><ArbolCaseStudy /></CaseStudyWrapper>} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/GlossierStrategy" element={<CaseStudyWrapper pageName="GlossierStrategy"><GlossierStrategy /></CaseStudyWrapper>} />
      <Route path="/BlogPost" element={<BlogPost />} />
      <Route path="/SideQuests" element={<SideQuests />} />
      <Route path="/Insights" element={<Insights />} />
      <Route path="/InsightDetail" element={<InsightDetail />} />
      <Route path="/AdinaProject" element={<CaseStudyWrapper pageName="AdinaProject"><AdinaProject /></CaseStudyWrapper>} />
      <Route path="/TCSAttrition" element={<CaseStudyWrapper pageName="TCSAttrition"><TCSAttrition /></CaseStudyWrapper>} />
      <Route path="/SystemsThinkingPoem" element={<SystemsThinkingPoem />} />
      <Route path="/BrandGallery" element={<BrandGallery />} />
      <Route path="/BrandConcepts" element={<CaseStudyWrapper pageName="BrandConcepts"><BrandConcepts /></CaseStudyWrapper>} />
      <Route path="/ConfidenceLab" element={<CaseStudyWrapper pageName="ConfidenceLab"><ConfidenceLab /></CaseStudyWrapper>} />
      <Route path="/RockefellerCapital" element={<CaseStudyWrapper pageName="RockefellerCapital"><RockefellerCapital /></CaseStudyWrapper>} />
      <Route path="/BillingUsabilityStudy" element={<CaseStudyWrapper pageName="BillingUsabilityStudy"><BillingUsabilityStudy /></CaseStudyWrapper>} />
      <Route path="/IntroToDesigningExperiments" element={<IntroToDesigningExperiments />} />
      <Route path="/ExamplesOfGrowthDesignExperiments" element={<ExamplesOfGrowthDesignExperiments />} />
      <Route path="/EnterpriseContentStrategy" element={<EnterpriseContentStrategy />} />
      <Route path="/ActivationGrammarly" element={<CaseStudyWrapper pageName="ActivationGrammarly"><ActivationGrammarly /></CaseStudyWrapper>} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/PrincipalFinancial" element={<CaseStudyWrapper pageName="PrincipalFinancial"><PrincipalFinancial /></CaseStudyWrapper>} />
      <Route path="/RCM2" element={<CaseStudyWrapper pageName="RCM2"><RCM2 /></CaseStudyWrapper>} />
      <Route path="/UXResearchStudies" element={<UXResearchStudies />} />
      <Route path="/ExelonUXR" element={<CaseStudyWrapper pageName="ExelonUXR"><ExelonUXR /></CaseStudyWrapper>} />
      <Route path="/RCMUXR" element={<CaseStudyWrapper pageName="RCMUXR"><RCMUXR /></CaseStudyWrapper>} />
      <Route path="/AdminInsights" element={<AdminInsights />} />
      <Route path="/CodeFlow" element={<CaseStudyWrapper pageName="CodeFlow"><CodeFlow /></CaseStudyWrapper>} />
      <Route path="/DescriptExperiment" element={<CaseStudyWrapper pageName="DescriptExperiment"><DescriptExperiment /></CaseStudyWrapper>} />
      <Route path="/b6" element={<CaseStudyWrapper pageName="b6"><B6 /></CaseStudyWrapper>} />
      <Route path="/VoiceUserInterface" element={<CaseStudyWrapper pageName="VoiceUserInterface"><VoiceUserInterface /></CaseStudyWrapper>} />
      <Route path="/VoiceSimulation" element={<CaseStudyWrapper pageName="VoiceSimulation"><VoiceSimulation /></CaseStudyWrapper>} />
      <Route path="/Veil" element={<CaseStudyWrapper pageName="Veil"><Veil /></CaseStudyWrapper>} />
      <Route path="/FluidUI" element={<CaseStudyWrapper pageName="FluidUI"><FluidUI /></CaseStudyWrapper>} />
      <Route path="/DesignSystem" element={<DesignSystem />} />
      <Route path="/ConversationCraft" element={<CaseStudyWrapper pageName="ConversationCraft"><ConversationCraft /></CaseStudyWrapper>} />
      <Route path="/DesignSystemPlayground" element={<DesignSystemPlayground />} />
      <Route path="/ComponentShowcase" element={<ComponentShowcase />} />
      <Route path="/ArtDirection" element={<CaseStudyWrapper pageName="ArtDirection"><ArtDirection /></CaseStudyWrapper>} />
      <Route path="*" element={<PageNotFound />} />
          </Routes>
          <GlobalFooter />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('splashShown');
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
        {showSplash && (
          <SplashScreen onComplete={() => {
            sessionStorage.setItem('splashShown', 'true');
            setShowSplash(false);
          }} />
        )}
        <Router>
          <NavigationTracker />
          <AuthenticatedApp />
          <ChatWidget agentName="chad" />
        </Router>
        <Toaster />
      </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App