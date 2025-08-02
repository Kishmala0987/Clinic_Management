import Dashboard from './pages/Admin/Dashboard';
import UserRoleManagement from './pages/Admin/UserRoleManagement';
import DoctorManagement from './pages/Admin/Doctor Management'
import PatientManagement from './pages/Admin/Patient Management';
import AppointmentManagement from './pages/Admin/Appointment Management';
import VisitManagement from './pages/Admin/Visit Management';
import BillingInvoicing from './pages/Admin/Billing & Invoicing';
import InventoryPharmacy from './pages/Admin/InventoryPharmacy';
import PatientPortal from './pages/Admin/PatientPortal';
import LabManagement from './pages/Admin/Lab Management';
import ReportsAnalytics from './pages/Admin/Report & Analytics';
import Notifications from './pages/Admin/Notifications';

import { Routes, Route, Navigate } from 'react-router-dom';


const Admin = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={
            <Dashboard />
        } />
        <Route path="users" element={
            <UserRoleManagement/>
        } />
        <Route path="doctors" element={
            <DoctorManagement/>
        } />
        <Route path="patients" element={
            <PatientManagement></PatientManagement>
        } />
        <Route path="appointments" element={
            <AppointmentManagement></AppointmentManagement>
        } />
        <Route path="visits" element={
            <VisitManagement></VisitManagement>
        } />
        <Route path="billing" element={
            <BillingInvoicing/>
        } />
        <Route path="inventory" element={
            <InventoryPharmacy/>
        } />
        <Route path="lab" element={
            <LabManagement></LabManagement>
        } />
        <Route path="portal" element={
            <PatientPortal/>
        } />
        <Route path="notifications" element={
            <Notifications/>
        } />
        <Route path="reports" element={
            <ReportsAnalytics></ReportsAnalytics>
        } />
      </Routes>
  );
}
export default Admin;