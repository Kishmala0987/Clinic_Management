import React from 'react';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();

  const handleQuickAction = (action) => {
    // Handle the quick action clicks - you can add navigation or modal logic here
    console.log(`Quick action clicked: ${action}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Welcome back, {user?.name}!
        </h2>
        <p className="text-gray-600">
          You are logged in as: <span className="font-medium capitalize">{user?.role}</span>
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => handleQuickAction('add-patient')}
            className="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 text-center transition-colors duration-200 group"
          >
            <div className="w-8 h-8 mx-auto mb-3 text-blue-600 text-2xl flex items-center justify-center">
              <span className="group-hover:scale-110 transition-transform duration-200">+</span>
            </div>
            <p className="text-blue-700 font-medium">Add Patient</p>
          </button>

          <button
            onClick={() => handleQuickAction('new-appointment')}
            className="bg-green-50 hover:bg-green-100 rounded-lg p-6 text-center transition-colors duration-200 group"
          >
            <div className="w-8 h-8 mx-auto mb-3 text-green-600 text-xl flex items-center justify-center">
              <span className="group-hover:scale-110 transition-transform duration-200">📅</span>
            </div>
            <p className="text-green-700 font-medium">New Appointment</p>
          </button>

          <button
            onClick={() => handleQuickAction('create-invoice')}
            className="bg-purple-50 hover:bg-purple-100 rounded-lg p-6 text-center transition-colors duration-200 group"
          >
            <div className="w-8 h-8 mx-auto mb-3 text-purple-600 text-2xl flex items-center justify-center">
              <span className="group-hover:scale-110 transition-transform duration-200">$</span>
            </div>
            <p className="text-purple-700 font-medium">Create Invoice</p>
          </button>

          <button
            onClick={() => handleQuickAction('update-inventory')}
            className="bg-orange-50 hover:bg-orange-100 rounded-lg p-6 text-center transition-colors duration-200 group"
          >
            <div className="w-8 h-8 mx-auto mb-3 text-orange-600 text-xl flex items-center justify-center">
              <span className="group-hover:scale-110 transition-transform duration-200">📦</span>
            </div>
            <p className="text-orange-700 font-medium">Update Inventory</p>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Patients</p>
              <p className="text-2xl font-semibold text-gray-800">1,234</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Appointments Today</p>
              <p className="text-2xl font-semibold text-gray-800">24</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 text-xl">📅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-semibold text-gray-800">$12,345</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-yellow-600 text-xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Tasks</p>
              <p className="text-2xl font-semibold text-gray-800">8</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 text-xl">⚠️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;