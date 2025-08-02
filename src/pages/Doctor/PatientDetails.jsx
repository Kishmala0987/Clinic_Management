import React, { useState } from 'react';
import { 
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Activity,
  AlertTriangle,
  Pill,
  TestTube,
  FileText,
  Download,
  Edit,
  Plus,
  Eye,
  MessageSquare,
  Printer,
  Share2,
  X,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  Stethoscope,
  Thermometer,
  Scale,
  Ruler,
  Droplets,
  Zap
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
const PatientDetailsView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddNote, setShowAddNote] = useState(false);
  const [newNote, setNewNote] = useState('');

  // Sample detailed patient data
  const patient = {
    id: 1,
    name: "John Smith",
    age: 45,
    gender: "Male",
    dateOfBirth: "1979-03-15",
    phone: "+92-300-1234567",
    email: "john.smith@email.com",
    address: "House 123, Street 45, North Nazimabad, Block L, Karachi, Sindh, Pakistan",
    bloodGroup: "O+",
    maritalStatus: "Married",
    occupation: "Software Engineer",
    emergencyContact: {
      name: "Jane Smith",
      relationship: "Wife",
      phone: "+92-300-7654321"
    },
    insuranceInfo: {
      provider: "Adamjee Insurance",
      policyNumber: "AI-2024-12345",
      status: "Active",
      expiryDate: "2024-12-31"
    },
    status: "active",
    registrationDate: "2023-01-15",
    primaryCondition: "Hypertension",
    conditions: ["Hypertension", "Diabetes Type 2", "High Cholesterol"],
    allergies: ["Penicillin", "Shellfish", "Peanuts"],
    riskLevel: "medium",
    lastVisit: "2024-07-28",
    nextAppointment: "2024-08-05 10:30 AM",
    totalVisits: 12,
    
    // Current Medications
    medications: [
      {
        id: 1,
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        startDate: "2023-06-01",
        prescribedBy: "Dr. Smith",
        status: "active",
        instructions: "Take with food in the morning"
      },
      {
        id: 2,
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        startDate: "2023-08-15",
        prescribedBy: "Dr. Smith",
        status: "active",
        instructions: "Take with meals"
      },
      {
        id: 3,
        name: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once daily",
        startDate: "2024-01-10",
        prescribedBy: "Dr. Smith",
        status: "active",
        instructions: "Take at bedtime"
      }
    ],

    // Vital Signs History
    vitals: [
      {
        date: "2024-07-28",
        bloodPressure: "140/90",
        heartRate: "78",
        temperature: "98.6°F",
        weight: "75kg",
        height: "170cm",
        bmi: "26.0",
        oxygenSaturation: "98%",
        respiratoryRate: "16"
      },
      {
        date: "2024-06-15",
        bloodPressure: "145/95",
        heartRate: "82",
        temperature: "98.4°F",
        weight: "76kg",
        height: "170cm",
        bmi: "26.3",
        oxygenSaturation: "97%",
        respiratoryRate: "18"
      },
      {
        date: "2024-05-01",
        bloodPressure: "138/88",
        heartRate: "75",
        temperature: "98.8°F",
        weight: "74kg",
        height: "170cm",
        bmi: "25.6",
        oxygenSaturation: "98%",
        respiratoryRate: "16"
      }
    ],

    // Lab Results
    labResults: [
      {
        id: 1,
        testName: "Complete Blood Count (CBC)",
        date: "2024-07-25",
        status: "completed",
        results: {
          "Hemoglobin": "14.2 g/dL",
          "White Blood Cells": "7,200 /μL",
          "Platelets": "250,000 /μL",
          "Hematocrit": "42%"
        },
        normalRanges: {
          "Hemoglobin": "13.5-17.5 g/dL",
          "White Blood Cells": "4,500-11,000 /μL",
          "Platelets": "150,000-450,000 /μL",
          "Hematocrit": "38-48%"
        },
        interpretation: "Normal"
      },
      {
        id: 2,
        testName: "Lipid Profile",
        date: "2024-07-25",
        status: "completed",
        results: {
          "Total Cholesterol": "220 mg/dL",
          "LDL Cholesterol": "140 mg/dL",
          "HDL Cholesterol": "45 mg/dL",
          "Triglycerides": "180 mg/dL"
        },
        normalRanges: {
          "Total Cholesterol": "<200 mg/dL",
          "LDL Cholesterol": "<100 mg/dL",
          "HDL Cholesterol": ">40 mg/dL",
          "Triglycerides": "<150 mg/dL"
        },
        interpretation: "Elevated cholesterol levels"
      },
      {
        id: 3,
        testName: "HbA1c",
        date: "2024-07-28",
        status: "pending",
        results: null,
        interpretation: "Test pending"
      }
    ],

    // Visit History
    visitHistory: [
      {
        id: 1,
        date: "2024-07-28",
        type: "Follow-up",
        chiefComplaint: "Routine hypertension check",
        diagnosis: "Hypertension - controlled",
        treatmentPlan: "Continue current medications, lifestyle modifications",
        notes: "Blood pressure improved. Patient compliant with medications.",
        duration: "30 minutes",
        nextVisit: "2024-08-28"
      },
      {
        id: 2,
        date: "2024-06-15",
        type: "Consultation",
        chiefComplaint: "Chest discomfort and fatigue",
        diagnosis: "Hypertension with mild symptoms",
        treatmentPlan: "Medication adjustment, ECG ordered",
        notes: "Patient reported occasional chest discomfort. ECG normal.",
        duration: "45 minutes",
        nextVisit: "2024-07-28"
      }
    ],

    // Doctor's Notes
    notes: [
      {
        id: 1,
        date: "2024-07-28",
        note: "Patient showing good compliance with medications. Blood pressure readings have improved. Advised to continue current regimen and maintain low-sodium diet.",
        type: "Clinical Note"
      },
      {
        id: 2,
        date: "2024-06-15",
        note: "Patient reported fatigue and occasional dizziness. Possible medication side effects. Consider dosage adjustment if symptoms persist.",
        type: "Progress Note"
      }
    ]
  };

  const getVitalTrend = (current, previous) => {
    if (!previous) return null;
    const currentBP = parseInt(current.split('/')[0]);
    const previousBP = parseInt(previous.split('/')[0]);
    
    if (currentBP < previousBP) return 'down';
    if (currentBP > previousBP) return 'up';
    return 'stable';
  };

  const getLabResultColor = (value, normalRange, testName) => {
    // Simple logic to determine if result is normal, high, or low
    if (testName.includes('Cholesterol') && parseFloat(value) > 200) return 'text-red-600';
    if (testName.includes('HDL') && parseFloat(value) < 40) return 'text-red-600';
    return 'text-green-600';
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      // In real app, this would make an API call
      console.log('Adding note:', newNote);
      setNewNote('');
      setShowAddNote(false);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'vitals', label: 'Vital Signs', icon: Activity },
    { id: 'medications', label: 'Medications', icon: Pill },
    { id: 'labs', label: 'Lab Results', icon: TestTube },
    { id: 'visits', label: 'Visit History', icon: Calendar },
    { id: 'notes', label: 'Notes', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => navigate('/doctor/patients')}>
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium text-lg">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{patient.name}</h1>
                  <p className="text-sm text-gray-600">
                    {patient.age} years • {patient.gender} • Patient ID: #{patient.id.toString().padStart(6, '0')}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </button>
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </button>
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Edit className="w-4 h-4" />
                <span>Edit Patient</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6">
          <div className="flex space-x-8 border-b">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Patient Information Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Date of Birth</p>
                      <p className="font-medium">{patient.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Blood Group</p>
                      <p className="font-medium">{patient.bloodGroup}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Marital Status</p>
                      <p className="font-medium">{patient.maritalStatus}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Occupation</p>
                      <p className="font-medium">{patient.occupation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{patient.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{patient.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="font-medium">{patient.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{patient.emergencyContact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Relationship</p>
                    <p className="font-medium">{patient.emergencyContact.relationship}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{patient.emergencyContact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Conditions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Medical Conditions</h3>
                <div className="space-y-3">
                  {patient.conditions.map((condition, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">{condition}</span>
                      <span className="text-sm text-blue-600">Active</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allergies */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Known Allergies</h3>
                <div className="space-y-3">
                  {patient.allergies.map((allergy, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <span className="font-medium text-red-800">{allergy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Provider</p>
                  <p className="font-medium">{patient.insuranceInfo.provider}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Policy Number</p>
                  <p className="font-medium">{patient.insuranceInfo.policyNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {patient.insuranceInfo.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expiry Date</p>
                  <p className="font-medium">{patient.insuranceInfo.expiryDate}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vital Signs Tab */}
        {activeTab === 'vitals' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Vital Signs History</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Reading</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {patient.vitals.map((vital, index) => {
                  const previousVital = patient.vitals[index + 1];
                  const bpTrend = getVitalTrend(vital.bloodPressure, previousVital?.bloodPressure);
                  
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-gray-900">{vital.date}</h4>
                        <div className="flex items-center space-x-2">
                          {bpTrend === 'down' && <TrendingDown className="w-4 h-4 text-green-600" />}
                          {bpTrend === 'up' && <TrendingUp className="w-4 h-4 text-red-600" />}
                          {bpTrend === 'stable' && <Minus className="w-4 h-4 text-gray-600" />}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <div>
                            <p className="text-xs text-gray-600">Blood Pressure</p>
                            <p className="font-medium">{vital.bloodPressure} mmHg</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="text-xs text-gray-600">Heart Rate</p>
                            <p className="font-medium">{vital.heartRate} bpm</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Thermometer className="w-4 h-4 text-orange-500" />
                          <div>
                            <p className="text-xs text-gray-600">Temperature</p>
                            <p className="font-medium">{vital.temperature}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Scale className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="text-xs text-gray-600">Weight</p>
                            <p className="font-medium">{vital.weight}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Ruler className="w-4 h-4 text-purple-500" />
                          <div>
                            <p className="text-xs text-gray-600">Height</p>
                            <p className="font-medium">{vital.height}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-indigo-500" />
                          <div>
                            <p className="text-xs text-gray-600">BMI</p>
                            <p className="font-medium">{vital.bmi}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Droplets className="w-4 h-4 text-cyan-500" />
                          <div>
                            <p className="text-xs text-gray-600">O2 Sat</p>
                            <p className="font-medium">{vital.oxygenSaturation}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-teal-500" />
                          <div>
                            <p className="text-xs text-gray-600">Resp. Rate</p>
                            <p className="font-medium">{vital.respiratoryRate} /min</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Medications Tab */}
        {activeTab === 'medications' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Current Medications</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Medication</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {patient.medications.map((medication) => (
                  <div key={medication.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Pill className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">{medication.name}</h4>
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            {medication.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-sm text-gray-600">Dosage</p>
                            <p className="font-medium">{medication.dosage}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Frequency</p>
                            <p className="font-medium">{medication.frequency}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Start Date</p>
                            <p className="font-medium">{medication.startDate}</p>
                          </div>
                        </div>
                        <div className="mb-2">
                          <p className="text-sm text-gray-600">Instructions</p>
                          <p className="text-sm text-gray-900">{medication.instructions}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Prescribed by</p>
                          <p className="text-sm font-medium text-gray-900">{medication.prescribedBy}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lab Results Tab */}
        {activeTab === 'labs' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Laboratory Results</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Order Lab Test</span>
                </button>
              </div>
              
              <div className="space-y-6">
                {patient.labResults.map((lab) => (
                  <div key={lab.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{lab.testName}</h4>
                        <p className="text-sm text-gray-600">Date: {lab.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          lab.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          lab.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {lab.status.charAt(0).toUpperCase() + lab.status.slice(1)}
                        </span>
                        {lab.status === 'completed' && (
                          <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Interpretation:</p>
                      <p className={`text-sm ${
                        lab.interpretation === 'Normal' ? 'text-green-600' :
                        lab.interpretation.includes('Elevated') ? 'text-red-600' :
                        'text-yellow-600'
                      }`}>
                        {lab.interpretation}
                      </p>
                    </div>

                    {lab.results && (
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 text-sm font-medium text-gray-900">Test Parameter</th>
                              <th className="text-left py-2 text-sm font-medium text-gray-900">Result</th>
                              <th className="text-left py-2 text-sm font-medium text-gray-900">Normal Range</th>
                              <th className="text-left py-2 text-sm font-medium text-gray-900">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(lab.results).map(([parameter, value]) => {
                              const normalRange = lab.normalRanges ? lab.normalRanges[parameter] : 'N/A';
                              const isAbnormal = parameter.includes('Cholesterol') && parseFloat(value) > 200;
                              
                              return (
                                <tr key={parameter} className="border-b border-gray-100">
                                  <td className="py-2 text-sm text-gray-900">{parameter}</td>
                                  <td className="py-2 text-sm font-medium text-gray-900">{value}</td>
                                  <td className="py-2 text-sm text-gray-600">{normalRange}</td>
                                  <td className="py-2">
                                    {isAbnormal ? (
                                      <span className="inline-flex items-center space-x-1">
                                        <XCircle className="w-3 h-3 text-red-500" />
                                        <span className="text-xs text-red-600">High</span>
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center space-x-1">
                                        <CheckCircle className="w-3 h-3 text-green-500" />
                                        <span className="text-xs text-green-600">Normal</span>
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Visit History Tab */}
        {activeTab === 'visits' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Visit History</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Visit</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {patient.visitHistory.map((visit) => (
                  <div key={visit.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">{visit.date}</h4>
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            {visit.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">Duration: {visit.duration}</p>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Chief Complaint</h5>
                        <p className="text-sm text-gray-700 mb-4">{visit.chiefComplaint}</p>
                        
                        <h5 className="font-medium text-gray-900 mb-2">Diagnosis</h5>
                        <p className="text-sm text-gray-700">{visit.diagnosis}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Treatment Plan</h5>
                        <p className="text-sm text-gray-700 mb-4">{visit.treatmentPlan}</p>
                        
                        <h5 className="font-medium text-gray-900 mb-2">Notes</h5>
                        <p className="text-sm text-gray-700">{visit.notes}</p>
                      </div>
                    </div>
                    
                    {visit.nextVisit && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Next Visit:</strong> {visit.nextVisit}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === 'notes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Doctor's Notes</h3>
                <button 
                  onClick={() => setShowAddNote(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Note</span>
                </button>
              </div>
              
              {/* Add Note Form */}
              {showAddNote && (
                <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-3">Add New Note</h4>
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Enter your note here..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                  />
                  <div className="flex items-center space-x-3 mt-3">
                    <button
                      onClick={handleAddNote}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Save Note
                    </button>
                    <button
                      onClick={() => {
                        setShowAddNote(false);
                        setNewNote('');
                      }}
                      className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                {patient.notes.map((note) => (
                  <div key={note.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">{note.type}</p>
                          <p className="text-sm text-gray-600">{note.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">{note.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetailsView;