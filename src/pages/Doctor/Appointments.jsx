import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  User,
  Phone,
  MapPin,
  FileText,
  Eye,
  Edit,
  MoreVertical,
  Stethoscope,
  Bell,
  RefreshCw
} from 'lucide-react';

const DoctorAppointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState('day');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Sample appointments data
  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      age: 45,
      phone: "+92-300-1234567",
      address: "North Nazimabad, Karachi",
      time: "09:00",
      duration: 30,
      status: "waiting",
      type: "Follow-up",
      condition: "Hypertension",
      notes: "Regular BP check, medication review",
      priority: 1,
      arrivalTime: "08:45"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      age: 32,
      phone: "+92-300-7654321",
      address: "Gulshan-e-Iqbal, Karachi",
      time: "09:30",
      duration: 45,
      status: "in-progress",
      type: "Consultation",
      condition: "Diabetes",
      notes: "Quarterly diabetes check, HbA1c review",
      priority: 2,
      arrivalTime: "09:15"
    },
    {
      id: 3,
      patient: "Mike Davis",
      age: 28,
      phone: "+92-300-9876543",
      address: "Defence, Karachi",
      time: "10:15",
      duration: 30,
      status: "scheduled",
      type: "Check-up",
      condition: "Routine Check",
      notes: "Annual health screening",
      priority: 3,
      arrivalTime: null
    },
    {
      id: 4,
      patient: "Emma Wilson",
      age: 55,
      phone: "+92-300-5555555",
      address: "Clifton, Karachi",
      time: "11:00",
      duration: 30,
      status: "completed",
      type: "Follow-up",
      condition: "Heart Disease",
      notes: "Post-surgery follow-up, ECG review",
      priority: 4,
      arrivalTime: "10:45"
    },
    {
      id: 5,
      patient: "Robert Brown",
      age: 38,
      phone: "+92-300-1111111",
      address: "Saddar, Karachi",
      time: "11:30",
      duration: 30,
      status: "waiting",
      type: "Consultation",
      condition: "Chest Pain",
      notes: "New patient, chest pain evaluation",
      priority: 1,
      arrivalTime: "11:15"
    },
    {
      id: 7,
      patient: "David Miller",
      age: 60,
      phone: "+92-300-3333333",
      address: "Korangi, Karachi",
      time: "14:30",
      duration: 45,
      status: "no-show",
      type: "Consultation",
      condition: "Hypertension",
      notes: "Missed previous appointment",
      priority: 6,
      arrivalTime: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'waiting': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'no-show': return 'bg-red-100 text-red-800 border-red-200';
      case 'cancelled': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'waiting': return <Clock className="w-4 h-4" />;
      case 'in-progress': return <RefreshCw className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'no-show': return <XCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getPriorityOrder = (appointment) => {
    if (appointment.status === 'waiting') return 0; // Highest priority
    if (appointment.status === 'in-progress') return 1;
    return appointment.priority;
  };

  const sortedAppointments = [...appointments]
    .filter(apt => {
      const matchesSearch = apt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           apt.condition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => getPriorityOrder(a) - getPriorityOrder(b));

  const updateAppointmentStatus = (appointmentId, newStatus) => {
    // In real app, this would make an API call
    console.log(`Updating appointment ${appointmentId} to ${newStatus}`);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isCurrentTimeSlot = (appointmentTime) => {
    const [hours, minutes] = appointmentTime.split(':').map(Number);
    const appointmentDate = new Date();
    appointmentDate.setHours(hours, minutes, 0, 0);
    
    const now = new Date();
    const thirtyMinutesLater = new Date(now.getTime() + 30 * 60000);
    
    return now <= appointmentDate && appointmentDate <= thirtyMinutesLater;
  };

  const getWaitingPatients = () => {
    return sortedAppointments.filter(apt => apt.status === 'waiting').length;
  };

  const getCompletedToday = () => {
    return sortedAppointments.filter(apt => apt.status === 'completed').length;
  };

  return (
    <div className="min-h-screen bg-gray-50">



        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
                <p className="text-gray-600">{formatDate(selectedDate)}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Today</p>
                  <p className="text-2xl font-bold text-gray-900">{sortedAppointments.length}</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Waiting</p>
                  <p className="text-2xl font-bold text-yellow-600">{getWaitingPatients()}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{getCompletedToday()}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Time</p>
                  <p className="text-lg font-bold text-gray-900">{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <Clock className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="p-6 border-b">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4 w-full">
                  <div className="relative w-full">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="waiting">Waiting</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="no-show">No Show</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">Today</span>
                  <button className="px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Appointments List */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Today's Schedule ({sortedAppointments.length} appointments)
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {sortedAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`p-6 hover:bg-gray-50 transition-colors ${
                    isCurrentTimeSlot(appointment.time) ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">
                            {appointment.patient.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="text-lg font-medium text-gray-900">{appointment.patient}</h4>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                            {getStatusIcon(appointment.status)}
                            <span className="ml-1 capitalize">{appointment.status.replace('-', ' ')}</span>
                          </span>
                          {appointment.status === 'waiting' && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Priority Patient
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{appointment.time} ({appointment.duration} min)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>Age {appointment.age}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>{appointment.phone}</span>
                          </div>
                          {appointment.arrivalTime && (
                            <div className="flex items-center space-x-1">
                              <AlertCircle className="w-4 h-4" />
                              <span>Arrived: {appointment.arrivalTime}</span>
                            </div>
                          )}
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-900 font-medium">{appointment.condition} - {appointment.type}</p>
                          <p className="text-sm text-gray-600">{appointment.notes}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {appointment.status === 'waiting' && (
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'in-progress')}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                        >
                          Start Consultation
                        </button>
                      )}
                      {appointment.status === 'in-progress' && (
                        <button
                          onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
                        >
                          Mark Complete
                        </button>
                      )}
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
    </div>
  );
};

export default DoctorAppointments;