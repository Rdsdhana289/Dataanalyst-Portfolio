import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Database, BarChart, FileSpreadsheet, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import useAuthStore from './store/authStore';
import useDocumentStore from './store/documentStore';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import AdminNav from './components/AdminNav';
import ResumeSection from './components/ResumeSection';
import Navigation from './components/Navigation';
import EducationSection from './components/EducationSection';

function PortfolioContent() {
  const selectedProfilePicture = useDocumentStore((state) => state.selectedProfilePicture);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <header className="relative min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="mt-32 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Data Analyst & SQL Developer</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              I am Dhanasekar R, transforming complex data into actionable insights.
            </p>
            <a
              href="#projects"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover-effect"
            >
              View My Work
            </a>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://www.microsoft.com/en-us/sql-server/developer-get-started/img/sql-server-logo.png" alt="SQL Server" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg" alt="Power BI" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://raw.githubusercontent.com/python/cpython/main/PC/icons/python.ico" alt="Python" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* About Section with Profile Picture */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              {selectedProfilePicture ? (
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                  <img 
                    src={selectedProfilePicture} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No profile picture</span>
                </div>
              )}
              <div className="flex-1 animate-fade-in">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With a strong academic foundation in Computer Science, holding both B.Sc. and M.Sc. degrees, 
                  I've developed a deep passion for data analytics and business intelligence.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My expertise lies in transforming raw data into actionable insights using SQL, Power BI, and Excel. 
                  I'm committed to delivering data-driven solutions that help businesses make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <EducationSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">QC Variance Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Created a comprehensive Power BI dashboard for analyzing Quality Control variances, 
                  enabling real-time monitoring and decision-making.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://drive.google.com/file/d/18Ms6yKvWScrakBEH0mSxzHMWbE4YMbQw/view?usp=drive_link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 hover-effect"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Loan Management System</h3>
                <p className="text-gray-600 mb-4">
                  Developed SQL queries and analysis for loan data, providing insights into lending patterns 
                  and risk assessment.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://drive.google.com/file/d/1uLvHlNIcuRg-_whl_1y9Kr0xTEGXRKKq/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 hover-effect"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Amazon Laptop Price Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Analyzed laptop sales data using Excel, creating pivot tables and visualizations to identify 
                  market trends.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://drive.google.com/file/d/1BxbACw4yImucfWl9vImtnzOg1w9yc2bf/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 hover-effect"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="skill-card bg-white p-6 rounded-lg shadow text-center">
              <Database className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">SQL</h3>
              <p className="text-gray-600">Advanced querying, data modeling, and analysis</p>
            </div>
            <div className="skill-card bg-white p-6 rounded-lg shadow text-center">
              <BarChart className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Power BI</h3>
              <p className="text-gray-600">Dashboard creation and data visualization</p>
            </div>
            <div className="skill-card bg-white p-6 rounded-lg shadow text-center">
              <FileSpreadsheet className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Excel</h3>
              <p className="text-gray-600">Advanced formulas, pivot tables, and VBA</p>
            </div>
            <div className="skill-card bg-white p-6 rounded-lg shadow text-center">
              <BarChart className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-600">Creating clear and impactful visual insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mt-12 flex justify-center space-x-8">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover-effect"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover-effect"
              >
                <Github size={32} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover-effect"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Dhanasekar R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <div>
        {isAuthenticated && <AdminNav />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={isAuthenticated ? <AdminDashboard /> : <Login />}
          />
          <Route path="/*" element={<PortfolioContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;