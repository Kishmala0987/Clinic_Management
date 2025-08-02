import  { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter,
  Plus,
  Eye,
  Calendar,
  MessageSquare,
  FileText,
  AlertTriangle,
  Heart,
  Activity,
  Phone,
  Mail,
  MapPin,
  Clock,
  Pill,
  TestTube,
  Download,
  Edit,
  MoreVertical,
  User,
  Stethoscope,
  Bell,
  UserPlus,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoctorPatients = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [conditionFilter, setConditionFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Sample patients data
  const patients = [
    {
      id: 1,
      name: "John Smith",
      age: 45,
      gender: "Male",
      phone: "+92-300-1234567",
      email: "john.smith@email.com",
      address: "North Nazimabad, Karachi",
      bloodGroup: "O+",
      status: "active",
      primaryCondition: "Hypertension",
      conditions: ["Hypertension", "Diabetes Type 2"],
      allergies: ["Penicillin", "Shellfish"],
      lastVisit: "2024-07-28",
      nextAppointment: "2024-08-05",
      totalVisits: 12,
      riskLevel: "medium",
      medications: ["Lisinopril 10mg", "Metformin 500mg"],
      vitals: {
        bp: "140/90",
        weight: "75kg",
        height: "170cm",
        bmi: "26.0"
      },
      insuranceStatus: "active",
      emergencyContact: "Jane Smith - Wife",
      pendingTasks: 2,
      labResults: "pending"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 32,
      gender: "Female",
      phone: "+92-300-7654321",
      email: "sarah.j@email.com",
      address: "Gulshan-e-Iqbal, Karachi",
      bloodGroup: "A+",
      status: "active",
      primaryCondition: "Diabetes",
      conditions: ["Diabetes Type 1", "Thyroid"],
      allergies: ["None"],
      lastVisit: "2024-07-30",
      nextAppointment: "2024-08-10",
      totalVisits: 18,
      riskLevel: "high",
      medications: ["Insulin", "Levothyroxine"],
      vitals: {
        bp: "120/80",
        weight: "62kg",
        height: "165cm",
        bmi: "22.8"
      },
      insuranceStatus: "active",
      emergencyContact: "Mike Johnson - Husband",
      pendingTasks: 1,
      labResults: "available"
    },
    {
      id: 3,
      name: "Mike Davis",
      age: 28,
      gender: "Male",
      phone: "+92-300-9876543",
      email: "mike.davis@email.com",
      address: "Defence, Karachi",
      bloodGroup: "B+",
      status: "active",
      primaryCondition: "Routine Care",
      conditions: ["Healthy"],
      allergies: ["Dust"],
      lastVisit: "2024-07-25",
      nextAppointment: "2024-08-15",
      totalVisits: 5,
      riskLevel: "low",
      medications: ["Multivitamin"],
      vitals: {
        bp: "115/75",
        weight: "70kg",
        height: "175cm",
        bmi: "22.9"
      },
      insuranceStatus: "active",
      emergencyContact: "Emma Davis - Sister",
      pendingTasks: 0,
      labResults: "normal"
    },
    {
      id: 4,
      name: "Emma Wilson",
      age: 55,
      gender: "Female",
      phone: "+92-300-5555555",
      email: "emma.wilson@email.com",
      address: "Clifton, Karachi",
      bloodGroup: "AB+",
      status: "active",
      primaryCondition: "Heart Disease",
      conditions: ["Coronary Artery Disease", "Hypertension"],
      allergies: ["Aspirin", "Sulfa drugs"],
      lastVisit: "2024-08-01",
      nextAppointment: "2024-08-08",
      totalVisits: 25,
      riskLevel: "high",
      medications: ["Atorvastatin", "Metoprolol", "Clopidogrel"],
      vitals: {
        bp: "145/95",
        weight: "68kg",
        height: "160cm",
        bmi: "26.6"
      },
      insuranceStatus: "active",
      emergencyContact: "Robert Wilson - Son",
      pendingTasks: 3,
      labResults: "critical"
    },
    {
      id: 5,
      name: "Robert Brown",
      age: 38,
      gender: "Male",
      phone: "+92-300-1111111",
      email: "robert.brown@email.com",
      address: "Saddar, Karachi",
      bloodGroup: "O-",
      status: "new",
      primaryCondition: "Chest Pain",
      conditions: ["Under Investigation"],
      allergies: ["Unknown"],
      lastVisit: "2024-08-02",
      nextAppointment: "2024-08-06",
      totalVisits: 1,
      riskLevel: "medium",
      medications: ["Pending"],
      vitals: {
        bp: "135/85",
        weight: "80kg",
        height: "178cm",
        bmi: "25.2"
      },
      insuranceStatus: "pending",
      emergencyContact: "Lisa Brown - Wife",
      pendingTasks: 4,
      labResults: "ordered"
    }
  ];

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLabResultsColor = (status) => {
    switch (status) {
      case 'critical': return 'text-red-600';
      case 'pending': return 'text-yellow-600';
      case 'available': return 'text-blue-600';
      case 'normal': return 'text-green-600';
      case 'ordered': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.primaryCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    const matchesCondition = conditionFilter === 'all' || 
                            patient.conditions.some(condition => 
                              condition.toLowerCase().includes(conditionFilter.toLowerCase())
                            );
    return matchesSearch && matchesStatus && matchesCondition;
  });

  const stats = {
    total: patients.length,
    active: patients.filter(p => p.status === 'active').length,
    new: patients.filter(p => p.status === 'new').length,
    highRisk: patients.filter(p => p.riskLevel === 'high').length,
    pendingTasks: patients.reduce((sum, p) => sum + p.pendingTasks, 0),
    criticalLabs: patients.filter(p => p.labResults === 'critical').length
  };

  return (
    <div className="min-h-screen bg-gray-50">


        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Patients</h1>
                <p className="text-gray-600">Manage and monitor your patient records</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New Patients</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
                </div>
                <UserPlus className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">High Risk</p>
                  <p className="text-2xl font-bold text-red-600">{stats.highRisk}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Tasks</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.pendingTasks}</p>
                </div>
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Critical Labs</p>
                  <p className="text-2xl font-bold text-red-600">{stats.criticalLabs}</p>
                </div>
                <TestTube className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4 w-full">
                  <div className="relative w-full">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search patients by name, condition, or phone..."
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
                    <option value="active">Active</option>
                    <option value="new">New</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <select
                    value={conditionFilter}
                    onChange={(e) => setConditionFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Conditions</option>
                    <option value="diabetes">Diabetes</option>
                    <option value="hypertension">Hypertension</option>
                    <option value="heart">Heart Disease</option>
                    <option value="healthy">Healthy</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Patients Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  {/* Patient Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-lg">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                        <p className="text-sm text-gray-600">{patient.age} years • {patient.gender}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </span>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Medical Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Primary Condition:</span>
                      <span className="text-sm font-medium text-gray-900">{patient.primaryCondition}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Risk Level:</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getRiskColor(patient.riskLevel)}`}>
                        {patient.riskLevel}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Last Visit:</span>
                      <span className="text-sm text-gray-900">{patient.lastVisit}</span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{patient.totalVisits}</p>
                      <p className="text-xs text-gray-600">Total Visits</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-lg font-bold ${getLabResultsColor(patient.labResults)}`}>
                        {patient.pendingTasks}
                      </p>
                      <p className="text-xs text-gray-600">Pending Tasks</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-xs font-medium ${getLabResultsColor(patient.labResults)}`}>
                        {patient.labResults}
                      </p>
                      <p className="text-xs text-gray-600">Lab Results</p>
                    </div>
                  </div>

                  {/* Alerts */}
                  {patient.allergies.length > 0 && patient.allergies[0] !== "None" && (
                    <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="text-sm text-red-800">
                          Allergies: {patient.allergies.join(', ')}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{patient.email}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center justify-center space-x-1"
                    onClick={() => navigate('/doctor/patients/${patient.id')}>
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                      <Calendar className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show message if no patients found */}
          {filteredPatients.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No patients found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </main>
    </div>
  );
};

export default DoctorPatients;