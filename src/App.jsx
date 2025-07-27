import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import './App.css';

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
  if (!user) return <Navigate to="/login" replace />;
  
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
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/users" element={
          <ProtectedRoute>
            <PlaceholderPage title="User & Role Management" />
          </ProtectedRoute>
        } />
        <Route path="/doctors" element={
          <ProtectedRoute>
            <PlaceholderPage title="Doctor Management" />
          </ProtectedRoute>
        } />
        <Route path="/patients" element={
          <ProtectedRoute>
            <PlaceholderPage title="Patient Management" />
          </ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute>
            <PlaceholderPage title="Appointments" />
          </ProtectedRoute>
        } />
        <Route path="/visits" element={
          <ProtectedRoute>
            <PlaceholderPage title="Visit Management" />
          </ProtectedRoute>
        } />
        <Route path="/billing" element={
          <ProtectedRoute>
            <PlaceholderPage title="Billing & Invoicing" />
          </ProtectedRoute>
        } />
        <Route path="/inventory" element={
          <ProtectedRoute>
            <PlaceholderPage title="Inventory & Pharmacy" />
          </ProtectedRoute>
        } />
        <Route path="/lab" element={
          <ProtectedRoute>
            <PlaceholderPage title="Lab Management" />
          </ProtectedRoute>
        } />
        <Route path="/portal" element={
          <ProtectedRoute>
            <PlaceholderPage title="Patient Portal" />
          </ProtectedRoute>
        } />
        <Route path="/notifications" element={
          <ProtectedRoute>
            <PlaceholderPage title="Notifications" />
          </ProtectedRoute>
        } />
        <Route path="/reports" element={
          <ProtectedRoute>
            <PlaceholderPage title="Reports & Analytics" />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;