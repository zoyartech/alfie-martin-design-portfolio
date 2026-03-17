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
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import TCSMarathon from './pages/TCSMarathon';
import DesignStrategyAI from './pages/DesignStrategyAI';
import WorkflowOptimizationHVAC from './pages/WorkflowOptimizationHVAC';
import GrammarlyProject from './pages/GrammarlyProject';
import CaseStudyDetail from './pages/CaseStudyDetail';
import DesignMarathon from './pages/DesignMarathon';

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
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/CaseStudies" element={<CaseStudies />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TCSMarathon" element={<TCSMarathon />} />
      <Route path="/DesignStrategyAI" element={<DesignStrategyAI />} />
      <Route path="/WorkflowOptimizationHVAC" element={<WorkflowOptimizationHVAC />} />
      <Route path="/GrammarlyProject" element={<GrammarlyProject />} />
      <Route path="/CaseStudyDetail" element={<CaseStudyDetail />} />
      <Route path="/DesignMarathon" element={<DesignMarathon />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
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