import { UserProvider, useUser } from './context/UserContext';
import Layout from './components/Layout';
import Admin from './Admin';
import Login from './Login';
import Doctor from './Doctor';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Loading component
const LoadingScreen = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();
  
  if (loading) return <LoadingScreen />;
  if (!user) return<Navigate to="/login" replace />;
  return <Layout>{children}</Layout>;
};

// Simple placeholder components for other routes
const PlaceholderPage = ({ title }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 mt-2">This page is under development.</p>
  </div>
);

function AppContent() {
  const { loading } = useUser();
  
  if (loading) return <LoadingScreen />;
  
  return (
    <Routes>
      <Route path='/login' element={<Login /> } />
    <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctor/*"
        element={
          <ProtectedRoute>
            <Doctor Placeholder={PlaceholderPage} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;