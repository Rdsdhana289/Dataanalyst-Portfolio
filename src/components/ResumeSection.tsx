import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import useDocumentStore from '../store/documentStore';

const ResumeSection: React.FC = () => {
  const resumes = useDocumentStore((state) => state.resumes);

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Resumes</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumes.map((resume) => (
            <div key={resume.id} className="bg-white rounded-lg p-6 text-gray-800">
              <h3 className="text-xl font-bold mb-2">{resume.title}</h3>
              <p className="text-gray-600 mb-6">{resume.description}</p>
              <div className="flex space-x-4">
                <a
                  href={resume.downloadUrl}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                  download
                >
                  <Download size={18} className="mr-2" />
                  Download
                </a>
                <a
                  href={resume.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-300"
                >
                  <ExternalLink size={18} className="mr-2" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;