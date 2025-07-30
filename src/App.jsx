import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import UserRoleManagement from './pages/UserRoleManagement';
import DoctorManagement from './pages/Doctor Management'
import PatientManagement from './pages/Patient Management';
import AppointmentManagement from './pages/Appointment Management';
import VisitManagement from './pages/Visit Management';
import BillingInvoicing from './pages/Billing & Invoicing';
import InventoryPharmacy from './pages/InventoryPharmacy';
import PatientPortal from './pages/PatientPortal';
import LabManagement from './pages/Lab Management';
import ReportsAnalytics from './pages/Report & Analytics';
import Notifications from './pages/Notifications';
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
            <UserRoleManagement/>
          </ProtectedRoute>
        } />
        <Route path="/doctors" element={
          <ProtectedRoute>
            <DoctorManagement/>
          </ProtectedRoute>
        } />
        <Route path="/patients" element={
          <ProtectedRoute>
            <PatientManagement></PatientManagement>
          </ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute>
            <AppointmentManagement></AppointmentManagement>
          </ProtectedRoute>
        } />
        <Route path="/visits" element={
          <ProtectedRoute>
            <VisitManagement></VisitManagement>
          </ProtectedRoute>
        } />
        <Route path="/billing" element={
          <ProtectedRoute>
            <BillingInvoicing/>
          </ProtectedRoute>
        } />
        <Route path="/inventory" element={
          <ProtectedRoute>
            <InventoryPharmacy/>
          </ProtectedRoute>
        } />
        <Route path="/lab" element={
          <ProtectedRoute>
            <LabManagement></LabManagement>
          </ProtectedRoute>
        } />
        <Route path="/portal" element={
          <ProtectedRoute>
            <PatientPortal/>
          </ProtectedRoute>
        } />
        <Route path="/notifications" element={
          <ProtectedRoute>
            <Notifications/>
          </ProtectedRoute>
        } />
        <Route path="/reports" element={
          <ProtectedRoute>
            <ReportsAnalytics></ReportsAnalytics>
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