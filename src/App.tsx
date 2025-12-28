import { Mail, Linkedin, Github, Download, ExternalLink, ChevronDown } from 'lucide-react';
import profileImage from './assets/images/1.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-teal-400">Toka Gamal Gabr</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl shadow-teal-500/50 animate-fade-in">
              <img src={profileImage} alt="Toka Gamal Gabr" className="w-full h-full object-cover" />
            </div>

            <div className="text-center md:text-left max-w-2xl animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Toka Gamal Gabr
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                Data Analyst | Business Analyst
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Transforming complex data into actionable insights that drive KPI performance and support data-driven decision-making for stakeholders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/50 flex items-center justify-center gap-2"
                >
                  View Projects
                  <ChevronDown className="w-5 h-5" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1Khuamp-bSjJ3DmlLfShgN2you85wXkf7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 border border-gray-700 hover:border-teal-400 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              Entry-Level Data & Business Analyst with strong expertise in BI dashboards, data analysis, and business process optimization.
              Skilled in translating business requirements into actionable insights that support data-driven decision-making for stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Business Analysis</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Requirements Gathering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Process Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Workflow Mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">KPI Definition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Stakeholder Communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Gap Analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Data & BI</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Power BI (DAX, Power Query, Data Modeling)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Tableau</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Excel (Advanced Functions, Dashboards)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Technical</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">SQL</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Python (Pandas, NumPy, Matplotlib)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">SQL Server</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">PostgreSQL</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">MySQL</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Methodologies</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Agile / Scrum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Business Process Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <span className="text-gray-300">Decision Support Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-400 transition-all hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-red-600 mb-4">N</div>
                  <p className="text-red-400 text-xl font-semibold">NETFLIX</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">Netflix Content Analytics Dashboard</h3>
                <p className="text-gray-400 mb-4">Comprehensive analysis of Netflix content library, revealing insights into genre distribution, content trends, and regional availability patterns.</p>
                <span className="inline-block px-3 py-1 bg-gray-800 text-teal-400 rounded-full text-sm mb-4">2025</span>
                <a
                  href="https://github.com/tokagabr/netflix-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Full Analysis on GitHub
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-teal-400 transition-all hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-500 mb-4">UBER</div>
                  <p className="text-green-400 text-xl font-semibold">EATS</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">Uber Eats Analytics Dashboard</h3>
                <p className="text-gray-400 mb-4">In-depth analysis of food delivery operations, customer behavior patterns, and performance metrics to optimize delivery efficiency and customer satisfaction.</p>
                <span className="inline-block px-3 py-1 bg-gray-800 text-teal-400 rounded-full text-sm mb-4">2025</span>
                <a
                  href="https://github.com/tokagabr/uber-eats-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Full Analysis on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">Experience</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Business Analysis Trainee</h3>
                  <p className="text-teal-400 font-semibold">Digital Egypt Builders Initiative (MCIT)</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>Cairo</p>
                  <p className="font-semibold">NOV 2025 – Present</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Power BI Trainee</h3>
                  <p className="text-teal-400 font-semibold">National Telecommunication Institute (NTI)</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>Cairo</p>
                  <p className="font-semibold">Aug 2025 – Oct 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">IT Intern</h3>
                  <p className="text-teal-400 font-semibold">Banque du Caire</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>Cairo</p>
                  <p className="font-semibold">Jul 2024 – Aug 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Intern</h3>
                  <p className="text-teal-400 font-semibold">Banque Misr</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>Mit Ghamr</p>
                  <p className="font-semibold">Aug 2023 – Sep 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">Education & Certifications</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-teal-400 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">B.Sc. in Management Information Systems (MIS)</h3>
                  <p className="text-teal-400 font-semibold mb-2">Sadat Academy for Management Sciences</p>
                  <p className="text-gray-400">GPA: 3.5 / 4.0</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p className="font-semibold">2021 – 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Digital Egypt Builders Initiative – Business Analysis Track</h3>
              <p className="text-gray-400">2024 – Present</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Power BI Professional Training – NTI</h3>
              <p className="text-gray-400">2025</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Get In Touch</h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-12">
              Let's connect and discuss how I can help drive data-driven insights for your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:tokagbr25@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/50"
              >
                <Mail className="w-6 h-6" />
                tokagbr25@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/toka-gamal-b81a67242"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>

              <a
                href="https://github.com/tokagabr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 border border-gray-700 hover:border-teal-400"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Toka Gamal Gabr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
