import  { useState } from 'react';
import { useUser } from '../../context/UserContext';

import { 
  Calendar, 
  Users, 
  FileText, 
  Pill, 
  TestTube, 
  MessageSquare, 
  BarChart3, 
  User, 
  Bell,
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  UserCheck,
  Activity,
  ChevronRight,
  Stethoscope
} from 'lucide-react';

const DoctorDashboard = () => {
  const { user } = useUser();
  
    const handleQuickAction = (action) => {
      // Handle the quick action clicks - you can add navigation or modal logic here
      console.log(`Quick action clicked: ${action}`);
    };

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Sample data
  const todayStats = {
    appointments: 8,
    patientsSeen: 5,
    pendingTasks: 3,
    labResults: 7
  };

  const todayAppointments = [
    { id: 1, patient: "John Smith", time: "09:00 AM", status: "completed", condition: "Hypertension" },
    { id: 2, patient: "Sarah Johnson", time: "10:30 AM", status: "in-progress", condition: "Diabetes" },
    { id: 3, patient: "Mike Davis", time: "11:15 AM", status: "scheduled", condition: "Follow-up" },
    { id: 4, patient: "Emma Wilson", time: "02:00 PM", status: "scheduled", condition: "Check-up" },
    { id: 5, patient: "Robert Brown", time: "03:30 PM", status: "scheduled", condition: "Cardiology" }
  ];

  const pendingTasks = [
    { id: 1, type: "lab-review", title: "Review Lab Results - John Smith", time: "2 hours ago", priority: "high" },
    { id: 2, type: "prescription", title: "Approve Prescription - Sarah Johnson", time: "4 hours ago", priority: "medium" },
    { id: 3, type: "follow-up", title: "Schedule Follow-up - Mike Davis", time: "1 day ago", priority: "low" }
  ];

  const recentPatients = [
    { id: 1, name: "Alice Cooper", age: 45, condition: "Hypertension", lastVisit: "Yesterday" },
    { id: 2, name: "Bob Miller", age: 32, condition: "Diabetes", lastVisit: "2 days ago" },
    { id: 3, name: "Carol White", age: 28, condition: "Migraine", lastVisit: "3 days ago" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-orange-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getTaskIcon = (type) => {
    switch (type) {
      case 'lab-review': return <TestTube className="w-4 h-4" />;
      case 'prescription': return <Pill className="w-4 h-4" />;
      case 'follow-up': return <Clock className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">


       <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Welcome back, {user?.name}!
        </h2>
        <p className="text-gray-600">
          You are logged in as: <span className="font-medium capitalize">{user?.role}</span>
        </p>
      </div>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Appointments</p>
                  <p className="text-3xl font-bold text-gray-900">{todayStats.appointments}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Patients Seen</p>
                  <p className="text-3xl font-bold text-gray-900">{todayStats.patientsSeen}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Tasks</p>
                  <p className="text-3xl font-bold text-gray-900">{todayStats.pendingTasks}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Lab Results</p>
                  <p className="text-3xl font-bold text-gray-900">{todayStats.labResults}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TestTube className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Today's Appointments */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {todayAppointments.slice(0, 4).map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-sm font-medium">
                            {appointment.patient.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{appointment.patient}</p>
                          <p className="text-sm text-gray-500">{appointment.condition}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900">{appointment.time}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center">
                  View All Appointments
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Pending Tasks */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Pending Tasks</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className={`${getPriorityColor(task.priority)}`}>
                        {getTaskIcon(task.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{task.title}</p>
                        <p className="text-sm text-gray-500">{task.time}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center">
                  View All Tasks
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Recent Patients */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Recent Patients</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{patient.name}</p>
                        <p className="text-sm text-gray-500">Age {patient.age}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{patient.condition}</p>
                    <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center">
                View All Patients
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </main>
    </div>
  );
};

export default DoctorDashboard;