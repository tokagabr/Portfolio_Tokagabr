import { Mail, Linkedin, Github, Phone, Download, ExternalLink, ChevronDown, Database, BarChart3, Code } from 'lucide-react';
import profileImage from './assets/images/1.png';
import ecoCycleImage from './assets/images/eco-cycle.png';
import mcitLogo from './assets/images/mcit-logo.png';
import ntiLogo from './assets/images/nti-logo.png';
import banqueDuCaireLogo from './assets/images/banque-du-caire-logo.png';
import banqueMisrLogo from './assets/images/banque-misr-logo.png';
import netflixImage from './assets/images/netflix-dashboard.png';
import uberEatsImage from './assets/images/uber-eats-dashboard.png';
import sqlImage from './assets/images/sql-school-database.png';
import roiImage from './assets/images/handypro-roi-analysis.png';

function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400">
                <img src={profileImage} alt="Toka Gamal Gabr" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-xl font-bold text-blue-400">Toka Gamal Gabr</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 md:pt-4 relative z-10">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-500/50">
              <img src={profileImage} alt="Toka Gamal Gabr" className="w-full h-full object-cover" />
            </div>

            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Toka Gamal Gabr
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 font-light">
                Data Analyst | Business Analyst
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Transforming complex data into actionable insights that drive KPI performance and support data-driven decision-making for stakeholders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50"
                >
                  View Projects
                  <ChevronDown className="w-5 h-5" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1rdbqPSE_2IcpPUdZ00xMAiR_ps4uvtcH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 border border-gray-700 hover:border-blue-400 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
    href="https://wa.me/201065046029"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
  >
    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
      <Phone className="w-5 h-5 text-white" />
    </div>
    <span className="text-gray-300">WhatsApp</span>
  </a>
                <a
                  href="https://www.linkedin.com/in/tokagabr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="text-gray-300">LinkedIn</span>
                </a> 
                
                <a
                  href="mailto:tokagbr25@gmail.com"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span className="text-gray-300">Email</span>
                </a>
                <a
                  href="https://github.com/tokagabr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="text-gray-300">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
   <section id="about" className="py-8 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">About Me</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              Entry-Level Data & Business Analyst with strong expertise in BI dashboards, data analysis, and business process optimization.
              Skilled in translating business requirements into actionable insights that support data-driven decision-making for stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Skills & Expertise</h2>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20 lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Business Analysis / Soft Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span className="text-gray-300">Requirements Gathering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span className="text-gray-300">Process Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span className="text-gray-300">Workflow Mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span className="text-gray-300">KPI Definition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span className="text-gray-300">Stakeholder Communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span className="text-gray-300">Gap Analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20 lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Technical Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors">
                  <BarChart3 className="w-10 h-10 text-blue-400 mb-3" />
                  <span className="text-sm text-gray-300 text-center font-medium">Power BI</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors">
                  <Database className="w-10 h-10 text-orange-400 mb-3" />
                  <span className="text-sm text-gray-300 text-center font-medium">SQL</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors">
                  <BarChart3 className="w-10 h-10 text-green-400 mb-3" />
                  <span className="text-sm text-gray-300 text-center font-medium">Excel</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors">
                  <Code className="w-10 h-10 text-yellow-400 mb-3" />
                  <span className="text-sm text-gray-300 text-center font-medium">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={ecoCycleImage} 
                  alt="Eco Cycle | Integrated Waste Management System" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = 
                      `<div class="h-64 bg-gradient-to-br from-green-700 to-gray-900 flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-6xl font-bold text-green-400 mb-4">ECO</div>
                          <p class="text-green-300 text-xl font-semibold">CYCLE</p>
                        </div>
                      </div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">Eco Cycle | Integrated Waste Management System</h3>
                <p className="text-gray-400 mb-4">A Technical System Analysis and Full-Stack platform designed to automate plastic waste lifecycle and reward systems.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600 rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                    <div className="text-white font-bold text-sm">PHP</div>
                  </span>
                  <span className="px-3 py-1 bg-cyan-600 rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                    <div className="text-white font-bold text-sm">React</div>
                  </span>
                  <span className="px-3 py-1 bg-orange-600 rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                    <div className="text-white font-bold text-sm">MySQL</div>
                  </span>
                  <span className="px-3 py-1 bg-purple-600 rounded-lg shadow-lg opacity-80 hover:opacity-100 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                    <div className="text-white font-bold text-sm">UML</div>
                  </span>
                </div>
                <a
                  href="https://github.com/tokagabr/Eco-Cycle-System-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  View System Analysis on GitHub
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={netflixImage} 
                  alt="Netflix Dashboard" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = 
                      <div class="h-64 bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-8xl font-bold text-red-600 mb-4">N</div>
                          <p class="text-red-400 text-xl font-semibold">NETFLIX</p>
                        </div>
                      </div>
                    ;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">Netflix Content Analytics Dashboard</h3>
                <p className="text-gray-400 mb-4">Comprehensive analysis of Netflix content library, revealing insights into genre distribution, content trends, and regional availability patterns.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">Power BI</span>
                </div>
                <a
                  href="https://github.com/tokagabr/netflix-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Full Analysis on GitHub
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={uberEatsImage} 
                  alt="Uber Eats Dashboard" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = 
                      <div class="h-64 bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-6xl font-bold text-green-500 mb-4">UBER</div>
                          <p class="text-green-400 text-xl font-semibold">EATS</p>
                        </div>
                      </div>
                    ;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">Uber Eats Analytics Dashboard</h3>
                <p className="text-gray-400 mb-4">In-depth analysis of food delivery operations, customer behavior patterns, and performance metrics to optimize delivery efficiency and customer satisfaction.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">Power BI</span>
                </div>
                <a
                  href="https://github.com/tokagabr/uber-eats-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Full Analysis on GitHub
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={sqlImage} 
                  alt="SQL School Database" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = 
                      <div class="h-64 bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-6xl font-bold text-blue-500 mb-4">SQL</div>
                          <p class="text-blue-400 text-xl font-semibold">SCHOOL</p>
                        </div>
                      </div>
                    ;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">SQL Practice – School Database</h3>
                <p className="text-gray-400 mb-4">SQL practice database applying core and advanced concepts including SELECT, JOINs, GROUP BY, Subqueries, and real business scenarios for school system management.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-sm font-medium">MySQL</span>
                </div>
                <a
                  href="https://github.com/tokagabr/SQL-Queries-School-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Project on GitHub
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={roiImage} 
                  alt="HandyPro ROI Analysis" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = 
                      <div class="h-64 bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
                        <div class="text-center">
                          <div class="text-6xl font-bold text-purple-500 mb-4">ROI</div>
                          <p class="text-purple-400 text-xl font-semibold">ANALYSIS</p>
                        </div>
                      </div>
                    ;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">HandyPro Lead Value Analysis</h3>
                <p className="text-gray-400 mb-4">Comprehensive analysis of services and channels driving the most valuable leads for HandyPro Hub, evaluating urgency, seasonality, and customer segments to optimize lead management and marketing ROI.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">Excel</span>
                </div>
                <a
                  href="https://github.com/tokagabr/Service-Channel-ROI-Analysis/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Full Analysis on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-8 relative z-10" style={{scrollMarginTop: '80px'}}>
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Professional Development Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Professional Development</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                      <img src={mcitLogo} alt="MCIT Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Business Analysis Scholar</h3>
                      <p className="text-blue-400 font-semibold">Digital Egypt Builders Initiative (MCIT)</p>
                    </div>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>Cairo</p>
                    <p className="font-semibold">Nov 2025 – Present</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Selected for a 9-month scholarship specializing in Agile, BPMN 2.0, and Digital Transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Designing system architectures and technical requirements for digital solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                      <img src={ntiLogo} alt="NTI Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Power BI Trainee</h3>
                      <p className="text-blue-400 font-semibold">National Telecommunication Institute (NTI)</p>
                    </div>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>Zagazig</p>
                    <p className="font-semibold">Aug 2025 – Oct 2025</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Mastered advanced Data Visualization and DAX formulas to create interactive business dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Transformed complex raw datasets into actionable insights for stakeholder decision-making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Professional Experience</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                      <img src={banqueDuCaireLogo} alt="Banque du Caire Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">IT Intern</h3>
                      <p className="text-blue-400 font-semibold">Banque du Caire</p>
                    </div>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>Cairo</p>
                    <p className="font-semibold">Jul 2024 – Aug 2024</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Analysed IT service desk workflows, identifying bottlenecks that improved ticket response time by 25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Developed automated weekly performance reports using Excel PivotTables & Power Query</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Collaborated with IT infrastructure team to monitor internal reporting tools, ensuring 99% data accuracy</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium">Excel</span>
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">Power BI</span>
                  <span className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-sm font-medium">SQL</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium">Windows Server</span>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border-l-4 border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg shadow-lg opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 flex-shrink-0 flex items-center justify-center p-2">
                      <img src={banqueMisrLogo} alt="Banque Misr Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Intern</h3>
                      <p className="text-blue-400 font-semibold">Banque Misr</p>
                    </div>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>Mit Ghamr</p>
                    <p className="font-semibold">Aug 2023 – Sep 2023</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Optimized customer service workflows by analysing service cycles, achieving a 20% reduction in processing time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Enhanced data integrity and digital adoption by designing standardized tracking templates—reducing errors by 15%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Facilitated customer transition to digital banking tools through improved service delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-8 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Education & Certifications</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400">B.Sc. in Management Information Systems (MIS)</h3>
                <span className="text-gray-400">GPA: 3.5 / 4.0</span>
              </div>
              <p className="text-gray-300 mb-4">Sadat Academy for Management Sciences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <p className="text-center text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:tokagbr25@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/tokagabr/" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-semibold transition-all transform hover:scale-105">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href="https://github.com/tokagabr" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-semibold transition-all transform hover:scale-105">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-gray-400">
            © 2025 Toka Gamal Gabr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 
