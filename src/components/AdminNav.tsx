import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import useAuthStore from '../store/authStore';

const AdminNav: React.FC = () => {
  const { logout } = useAuthStore();

  return (
    <nav className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/admin" className="hover:text-blue-200">Dashboard</Link>
          <Link to="/admin/documents" className="hover:text-blue-200">Documents</Link>
        </div>
        <button
          onClick={logout}
          className="flex items-center space-x-2 hover:text-blue-200"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;