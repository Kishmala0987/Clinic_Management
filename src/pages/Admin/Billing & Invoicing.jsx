// 1. Patient Portal Page (src/pages/PatientPortal.jsx)
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  Eye,
  Edit3,
  Trash2,
  Menu,
  Bell,
  X,
  MessageSquare,
  Calendar,
  FileText
} from 'lucide-react';


const BillingInvoicing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('all');

  const [invoices, setInvoices] = useState([
    {
      id: 1,
      patient: 'John Doe',
      amount: 250,
      status: 'Paid',
      date: '2024-07-10',
      paymentMethod: 'Card'
    },
    {
      id: 2,
      patient: 'Jane Smith',
      amount: 180,
      status: 'Pending',
      date: '2024-07-09',
      paymentMethod: 'Cash'
    },
    {
      id: 3,
      patient: 'Bob Johnson',
      amount: 120,
      status: 'Overdue',
      date: '2024-07-05',
      paymentMethod: 'Insurance'
    },
    {
      id: 4,
      patient: 'Alice Williams',
      amount: 95,
      status: 'Paid',
      date: '2024-07-08',
      paymentMethod: 'Card'
    }
  ]);

  // Filter invoices
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.amount.toString().includes(searchTerm);
    const matchesStatus = selectedStatus === 'all' || invoice.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesPaymentMethod = selectedPaymentMethod === 'all' || invoice.paymentMethod.toLowerCase() === selectedPaymentMethod.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesPaymentMethod;
  });

  const getStatusColor = (status) => {
    const colors = {
      'Paid': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Overdue': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedStatus('all');
    setSelectedPaymentMethod('all');
  };

  const totalAmount = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const paidAmount = filteredInvoices.filter(i => i.status === 'Paid').reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = filteredInvoices.filter(i => i.status === 'Pending').reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="p-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Billing and Invoices</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Invoice</span>
        </button>
</div>
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 mb-6 space-y-2 md:space-y-0">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Search by patient or amount"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        
          {(searchTerm || selectedStatus !== 'all' || selectedPaymentMethod !== 'all') && (
            <button
              className="ml-auto text-sm text-blue-600 hover:underline"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}

        {/* Filter Dropdowns */}

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-2 md:space-y-0">
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={selectedPaymentMethod}
              onChange={e => setSelectedPaymentMethod(e.target.value)}
            >
              <option value="all">All Payment Methods</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
              <option value="Insurance">Insurance</option>
            </select>
          </div>
        </div>


        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-gray-500 text-sm">Total Invoiced</span>
            <span className="text-xl font-bold text-gray-900">${totalAmount}</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-gray-500 text-sm">Paid</span>
            <span className="text-xl font-bold text-green-600">${paidAmount}</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-gray-500 text-sm">Pending</span>
            <span className="text-xl font-bold text-yellow-600">${pendingAmount}</span>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredInvoices.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                    No invoices found.
                  </td>
                </tr>
              ) : (
                filteredInvoices.map(invoice => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{invoice.patient}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${invoice.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.paymentMethod}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right flex space-x-2 justify-end">
                      <button className="p-1 rounded hover:bg-gray-100" title="View">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100" title="Edit">
                        <Edit3 className="w-4 h-4 text-yellow-600" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100" title="Delete">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingInvoicing;