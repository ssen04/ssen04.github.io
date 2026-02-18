import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Github, Code, Database, BarChart3, Briefcase, Award, FileText, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
           style={{ 
             backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
             backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
           }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-wider">SUKANYA SEN</div>
            <div className="flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} 
                      className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === 'hero' ? 'text-blue-400' : ''}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === 'about' ? 'text-blue-400' : ''}`}>
                About
              </button>
              <button onClick={() => scrollToSection('experience')} 
                      className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === 'experience' ? 'text-blue-400' : ''}`}>
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} 
                      className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === 'skills' ? 'text-blue-400' : ''}`}>
                Skills
              </button>
              <Button onClick={() => scrollToSection('contact')} 
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 transition-all duration-300 hover:scale-105">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_sfu-coop-portal/artifacts/zylo10uo_mahdis-mousavi-hJ5uMIRNg5k-unsplash.jpg')`,
            transform: `translateY(${parallaxOffset}px)`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Badge className="bg-blue-600/80 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm">
              Data Analyst • SFU Master's Student • UBC Graduate
            </Badge>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tight opacity-0 animate-fade-in"
              style={{ 
                animationDelay: '0.4s', 
                animationFillMode: 'forwards',
                textShadow: '0 0 80px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
              }}>
            SUKANYA SEN
          </h1>
          
          <div className="text-xl md:text-3xl text-gray-300 mb-8 opacity-0 animate-fade-in font-light" 
               style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="mb-2">Data • Content • Portals</p>
          </div>

          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in" 
               style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
              View My Work
            </Button>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-6 py-6 rounded-full transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-6 py-6 rounded-full transition-all duration-300">
                <Github className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-blue-400 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <Database className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-cyan-300">Data Analysis</h3>
                  <p className="text-gray-400 text-sm">SQL, Python, Excel, Analytics Tools</p>
                </div>
                <div className="text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-cyan-300">Web Development</h3>
                  <p className="text-gray-400 text-sm">HTML, CSS, JavaScript, CMS</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-cyan-300">Content Strategy</h3>
                  <p className="text-gray-400 text-sm">SEO, Analytics, Digital Marketing</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a data-driven professional with a unique blend of technical expertise and communication skills. 
                Currently pursuing a Master's in Visual Computing at SFU (4.0 GPA), I bring hands-on experience in 
                data analysis, portal content management, and technical problem-solving.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My background spans from building automated data pipelines and Excel dashboards at TechPRO to 
                managing web content, SEO optimization, and analytics-driven strategies across multiple organizations. 
                I excel at translating complex data into actionable insights and creating compelling content that drives engagement.
              </p>

              <div className="bg-blue-600/20 border border-blue-600/40 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-blue-200">Perfect Fit for Samsung's Portal Content & Data Administrator Role:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Experienced with data tools: SQL, Excel, Python, Google Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Content management expertise: HTML/CSS, web updates, multi-platform publishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Client-facing experience: Direct collaboration with clients on campaigns and technical solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Technical troubleshooting: Debugged integrations, validated data pipelines, resolved issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Data presentation: Created dashboards, reports, and visualizations for stakeholders</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <Award className="w-10 h-10 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-cyan-300">Education</h3>
                <p className="text-gray-300 mb-2"><strong>Simon Fraser University</strong></p>
                <p className="text-gray-400 text-sm mb-4">Master of Visual Computing (Current) | GPA: 4.0 | 2025-2027</p>
                <p className="text-gray-300 mb-2"><strong>University of British Columbia</strong></p>
                <p className="text-gray-400 text-sm">B.Sc. Mathematics (Graduated) | 2019-2024</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <FileText className="w-10 h-10 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-cyan-300">Key Strengths</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Data pipeline configuration & ETL workflows</li>
                  <li>• Automated reporting & dashboard creation</li>
                  <li>• Content management & web publishing</li>
                  <li>• SEO optimization & analytics tracking</li>
                  <li>• Client collaboration & technical communication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Relevant Experience</h2>
          
          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <p className="text-blue-400 text-lg">{job.company} • {job.location}</p>
                    </div>
                    <Badge className="bg-blue-600/30 text-blue-200 border-blue-500/50">
                      {job.period}
                    </Badge>
                  </div>
                  
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {job.relevance && (
                    <div className="mt-6 bg-green-600/20 border border-green-600/40 rounded-lg p-4">
                      <p className="text-green-200 text-sm font-medium">
                        <strong>Samsung Role Alignment:</strong> {job.relevance}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <Card key={category} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyan-300">
                    {category === 'Data Analysis & Tools' && <Database className="w-6 h-6 text-blue-400" />}
                    {category === 'Web & Content Management' && <Code className="w-6 h-6 text-blue-400" />}
                    {category === 'Communication & Marketing' && <BarChart3 className="w-6 h-6 text-blue-400" />}
                    {category === 'Technical Skills' && <Briefcase className="w-6 h-6 text-blue-400" />}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <Badge key={idx} className="bg-blue-600/20 text-blue-200 border-blue-500/30 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Portfolio of Data Projects Available</h3>
              <p className="text-gray-300 mb-6">
                Including AI-based crowd monitoring systems, automated data pipelines, dashboard creation,<br/>
                SQL database design, and real-time analytics implementations.
              </p>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="border-blue-400 text-blue-300 hover:bg-blue-600/20 px-6 py-3 rounded-full">
                View Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-cyan-300">{project.title}</h3>
                  <p className="text-blue-400 text-sm mb-4">{project.tech}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} className="bg-gray-700/50 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.samsungRelevance && (
                    <div className="bg-blue-600/20 border border-blue-600/40 rounded-lg p-3 mt-4">
                      <p className="text-blue-200 text-xs">
                        <strong>Relevance:</strong> {project.samsungRelevance}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Work Section */}
      <section id="live-work" className="min-h-screen py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Published Work & Live Projects</h2>
          
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Explore my professional web development projects, content management work, and publications<br/>
            for leading healthcare and sustainability organizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.liveWork.map((work, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-blue-400 transition-colors">{work.title}</h3>
                    <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-blue-400 text-sm mb-2">{work.organization}</p>
                  <p className="text-gray-400 text-sm mb-4 italic">{work.role}</p>
                  <p className="text-gray-300 mb-4">{work.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag, idx) => (
                      <Badge key={idx} className="bg-blue-600/20 text-blue-200 border-blue-500/30 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Badge className="bg-purple-600/20 text-purple-200 border-purple-500/30 text-xs mb-4">
                    {work.type}
                  </Badge>

                  <a 
                    href={work.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 font-medium">
                    {work.type.includes('Report') ? 'View Report' : 'Visit Website'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 backdrop-blur-sm inline-block">
              <CardContent className="p-6">
                <p className="text-green-200 font-medium">
                  ✓ All projects demonstrate hands-on experience with content management, web publishing, SEO, and data-driven insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Let's Connect</h2>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 text-cyan-300">Interested in Samsung's Portal Content & Data Administrator Role</h3>
                <p className="text-xl text-gray-300 mb-6">
                  I bring the perfect combination of data analysis expertise, content management experience,<br/>
                  and technical skills to excel in this position.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                  <a href={`mailto:${portfolioData.contact.email}`}>
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Me
                    </Button>
                  </a>
                  <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">{portfolioData.contact.email}</p>
                  </div>
                  <div className="text-center">
                    <Linkedin className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors">
                      View Profile <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  </div>
                  <div className="text-center">
                    <Github className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors">
                      View Repos <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Vancouver, BC, Canada • +1 (236) 869 9830
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2026 Sukanya Sen. All rights reserved.</p>
          <p className="mt-2">Applying for Portal Content & Data Administrator at Samsung Electronics Canada</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;