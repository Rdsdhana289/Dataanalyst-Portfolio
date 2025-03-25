import React from 'react';
import { GraduationCap, Award, Calendar, School, Percent } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
        
        {/* Certifications */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-blue-600">
            <Award className="mr-3" size={28} />
            Certifications
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Award className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Data Analytics Certification</h4>
                <p className="text-gray-600 flex items-center">
                  <School className="mr-2" size={18} />
                  Besant Technologies
                </p>
                <p className="text-gray-600 flex items-center mt-1">
                  <Calendar className="mr-2" size={18} />
                  June 2024 – Present
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 flex items-center text-blue-600">
            <GraduationCap className="mr-3" size={28} />
            Education
          </h3>
          <div className="space-y-6">
            {/* M.Sc. */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">M.Sc. Computer Science</h4>
                  <p className="text-gray-600 flex items-center">
                    <School className="mr-2" size={18} />
                    Sri Subramaniya Swami Government Arts College, Tiruttani
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Affiliated with the University of Madras</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <p className="text-gray-600 flex items-center">
                      <Calendar className="mr-2" size={18} />
                      Nov 2022 – June 2024
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Percent className="mr-2" size={18} />
                      89%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* B.Sc. */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">B.Sc. Computer Science</h4>
                  <p className="text-gray-600 flex items-center">
                    <School className="mr-2" size={18} />
                    Government Arts College for Men, Nandhanam, Chennai
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Affiliated with the University of Madras</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <p className="text-gray-600 flex items-center">
                      <Calendar className="mr-2" size={18} />
                      July 2019 – Oct 2022
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Percent className="mr-2" size={18} />
                      83%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;