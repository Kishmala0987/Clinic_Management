import { Routes, Route, Navigate } from "react-router-dom";
import DoctorDashboard from "./pages/Doctor/Dashboard";
import DoctorAppointments from "./pages/Doctor/Appointments";
import DoctorPatients from './pages/Doctor/MyPatients';
import PatientDetailsView from './pages/Doctor/PatientDetails';

const Doctor = ({ Placeholder }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<DoctorDashboard />} />
      <Route
        path="appointments"
        element={<DoctorAppointments />}
      />
      <Route path="patients" element={<DoctorPatients />} />
      <Route path="patients/:id" element={<PatientDetailsView />} />

      <Route
        path="visits"
        element={<Placeholder title="Visits" />}
      />
      <Route
        path="prescriptions"
        element={<Placeholder title="Prescriptions" />}
      />
      <Route
        path="lab-results"
        element={<Placeholder title="Lab Results" />}
      />
      <Route
        path="messages"
        element={<Placeholder title="My Messages" />}
      />
      <Route
        path="notifications"
        element={<Placeholder title="Notifications" />}
      />
    </Routes>
  );
};

export default Doctor;
