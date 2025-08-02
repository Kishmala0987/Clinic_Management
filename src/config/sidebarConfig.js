import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar, 
  ClipboardList, 
  DollarSign, 
  Package, 
  TestTube, 
  Globe, 
  Bell, 
  BarChart3,
  Paperclip,
  Settings,
  MessageSquareText ,
  Shield,
  Activity
} from 'lucide-react';

export const sidebarConfig = {
  admin: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard',
      color: 'bg-blue-500',
      iconColor: 'text-blue-500'
    },
    {
      id: 'user-management',
      title: 'User & Role Management',
      icon: Users,
      path: '/admin/users',
      color: 'bg-purple-500'
    },
    {
      id: 'doctor-management',
      title: 'Doctor Management',
      icon: UserCheck,
      path: '/admin/doctors',
      color: 'bg-green-500'
    },
    {
      id: 'patient-management',
      title: 'Patient Management',
      icon: ClipboardList,
      path: '/admin/patients',
      color: 'bg-blue-600'
    },
    {
      id: 'appointments',
      title: 'Appointments',
      icon: Calendar,
      path: '/admin/appointments',
      color: 'bg-indigo-500'
    },
    {
      id: 'visit-management',
      title: 'Visit Management',
      icon: Activity,
      path: '/admin/visits',
      color: 'bg-teal-500'
    },
    {
      id: 'billing',
      title: 'Billing & Invoicing',
      icon: DollarSign,
      path: '/admin/billing',
      color: 'bg-yellow-500'
    },
    {
      id: 'inventory',
      title: 'Inventory & Pharmacy',
      icon: Package,
      path: '/admin/inventory',
      color: 'bg-orange-500'
    },
    {
      id: 'lab-management',
      title: 'Lab Management',
      icon: TestTube,
      path: '/admin/lab',
      color: 'bg-pink-500'
    },
    {
      id: 'patient-portal',
      title: 'Patient Portal',
      icon: Globe,
      path: '/admin/portal',
      color: 'bg-cyan-500'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      path: '/admin/notifications',
      color: 'bg-red-500'
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      icon: BarChart3,
      path: '/admin/reports',
      color: 'bg-emerald-500'
    }
  ],
  doctor: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/doctor/dashboard',
      color: 'bg-blue-500'
    },
    {
      id: 'appointments',
      title: 'My Appointments',
      icon: Calendar,
      path: '/doctor/appointments',
      color: 'bg-indigo-500'
    },
    {
      id: 'patients',
      title: 'My Patients',
      icon: ClipboardList,
      path: '/doctor/patients',
      color: 'bg-blue-600'
    },
    {
      id: 'visits',
      title: 'Patient Visits',
      icon: Activity,
      path: '/doctor/visits',
      color: 'bg-teal-500'
    },
    {
      id: 'prescriptions',
      title: 'Prescriptions',
      icon: Paperclip,
      path: '/doctor/prescriptions',
      color: 'bg-yellow-500'
    },
    {
      id: 'lab-results',
      title: 'Lab Results',
      icon: TestTube,
      path: '/doctor/lab-results',
      color: 'bg-pink-500'
    },
    {
      id: 'messages',
      title: 'Messages',
      icon: MessageSquareText ,
      path: '/doctor/messages',
      color: 'bg-blue-500'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      path: '/doctor/notifications',
      color: 'bg-red-500'
    }
  ],
  receptionist: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      color: 'bg-blue-500'
    },
    {
      id: 'appointments',
      title: 'Appointments',
      icon: Calendar,
      path: '/appointments',
      color: 'bg-indigo-500'
    },
    {
      id: 'patient-registration',
      title: 'Patient Registration',
      icon: ClipboardList,
      path: '/register-patient',
      color: 'bg-blue-600'
    },
    {
      id: 'billing',
      title: 'Billing',
      icon: DollarSign,
      path: '/billing',
      color: 'bg-yellow-500'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      path: '/notifications',
      color: 'bg-red-500'
    }
  ],
  patient: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      color: 'bg-blue-500'
    },
    {
      id: 'appointments',
      title: 'My Appointments',
      icon: Calendar,
      path: '/appointments',
      color: 'bg-indigo-500'
    },
    {
      id: 'medical-records',
      title: 'Medical Records',
      icon: ClipboardList,
      path: '/records',
      color: 'bg-blue-600'
    },
    {
      id: 'lab-results',
      title: 'Lab Results',
      icon: TestTube,
      path: '/lab-results',
      color: 'bg-pink-500'
    },
    {
      id: 'billing',
      title: 'Bills & Payments',
      icon: DollarSign,
      path: '/billing',
      color: 'bg-yellow-500'
    }
  ],
  
};