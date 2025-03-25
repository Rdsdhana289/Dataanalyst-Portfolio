import React, { useState } from 'react';
import { Upload, Trash2, Image, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useDocumentStore from '../store/documentStore';
import useAuthStore from '../store/authStore';
import { Document } from '../types';

const AdminDashboard: React.FC = () => {
  const { documents, addDocument, removeDocument, setProfilePicture, selectedProfilePicture } = useDocumentStore();
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    // Simulate file upload
    setTimeout(() => {
      const newDoc: Document = {
        id: Date.now().toString(),
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type,
        uploadDate: new Date().toISOString(),
      };
      addDocument(newDoc);
      setUploading(false);
    }, 1000);
  };

  const handleExit = () => {
    logout();
    navigate('/');
  };

  const isImage = (type: string) => type.startsWith('image/');

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleExit}
          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          <LogOut size={18} />
          <span>Exit Dashboard</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Upload Document
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">Any file type (MAX. 10MB)</p>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Uploaded Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex-1">
                  <p className="font-medium truncate">{doc.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(doc.uploadDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {isImage(doc.type) && (
                    <button
                      onClick={() => setProfilePicture(doc.url)}
                      className={`text-blue-600 hover:text-blue-800 ${
                        selectedProfilePicture === doc.url ? 'bg-blue-100 p-1 rounded' : ''
                      }`}
                      title="Set as profile picture"
                    >
                      <Image size={18} />
                    </button>
                  )}
                  <a
                    href={doc.url}
                    download={doc.name}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Download
                  </a>
                  <button
                    onClick={() => {
                      if (selectedProfilePicture === doc.url) {
                        setProfilePicture(null);
                      }
                      removeDocument(doc.id);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;