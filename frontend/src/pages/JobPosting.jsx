import React, { useState, useEffect } from 'react';
import { ChevronDown, Briefcase, MapPin, Clock, DollarSign, Calendar, ArrowLeft, Star, Printer, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockJobData } from '../data/mockData';

const JobPosting = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'overview', 'description', 'requirements', 'company', 'apply'];
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
            <div className="text-2xl font-bold tracking-wider">{mockJobData.student.name}</div>
            <div className="flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} 
                      className={`text-sm font-medium transition-colors hover:text-red-500 ${activeSection === 'hero' ? 'text-red-500' : ''}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('overview')} 
                      className={`text-sm font-medium transition-colors hover:text-red-500 ${activeSection === 'overview' ? 'text-red-500' : ''}`}>
                Overview
              </button>
              <button onClick={() => scrollToSection('requirements')} 
                      className={`text-sm font-medium transition-colors hover:text-red-500 ${activeSection === 'requirements' ? 'text-red-500' : ''}`}>
                Requirements
              </button>
              <button onClick={() => scrollToSection('company')} 
                      className={`text-sm font-medium transition-colors hover:text-red-500 ${activeSection === 'company' ? 'text-red-500' : ''}`}>
                Company
              </button>
              <Button onClick={() => scrollToSection('apply')} 
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 transition-all duration-300 hover:scale-105">
                Apply Now
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
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Badge className="bg-blue-600/80 text-white border-0 px-4 py-2 text-sm backdrop-blur-sm">
              {mockJobData.job.term} • {mockJobData.job.positionType}
            </Badge>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight opacity-0 animate-fade-in"
              style={{ 
                animationDelay: '0.4s', 
                animationFillMode: 'forwards',
                textShadow: '0 0 80px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)'
              }}>
            {mockJobData.job.title}
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in" 
               style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="mb-2">{mockJobData.job.company}</p>
            <p className="text-lg">{mockJobData.job.location} • {mockJobData.job.duration}</p>
          </div>

          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in" 
               style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
              Apply for Position
            </Button>
            <Button 
              onClick={() => setIsFavorite(!isFavorite)}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-6 py-6 rounded-full transition-all duration-300">
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button 
              onClick={() => window.print()}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-6 py-6 rounded-full transition-all duration-300">
              <Printer className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('overview')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-red-500 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Quick Overview Section */}
      <section id="overview" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Position Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <p className="text-gray-400 text-sm mb-2">Salary Range</p>
                <p className="text-2xl font-bold">${mockJobData.job.salaryLow} - ${mockJobData.job.salaryHigh}</p>
                <p className="text-sm text-gray-500">per hour</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <p className="text-gray-400 text-sm mb-2">Duration</p>
                <p className="text-2xl font-bold">{mockJobData.job.duration}</p>
                <p className="text-sm text-gray-500">{mockJobData.job.term}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <p className="text-gray-400 text-sm mb-2">Location</p>
                <p className="text-2xl font-bold">{mockJobData.job.location}</p>
                <p className="text-sm text-gray-500">{mockJobData.job.workLocationType}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <p className="text-gray-400 text-sm mb-2">Application Deadline</p>
                <p className="text-xl font-bold">{mockJobData.job.applicationDeadline}</p>
                <p className="text-sm text-gray-500">Apply early!</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Job Status</h3>
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-blue-600 text-white">Posting Status: {mockJobData.job.status}</Badge>
                <Badge className="bg-green-600 text-white">Internal Status: {mockJobData.job.internalStatus}</Badge>
              </div>
              <div className="bg-yellow-600/20 border border-yellow-600/40 rounded-lg p-4">
                <p className="text-yellow-200 text-sm">
                  ⚠️ Please apply as early as possible. The employer will be reviewing applications on a rolling basis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Description Section */}
      <section id="description" className="min-h-screen py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">What You'll Do</h2>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6">{mockJobData.job.description.intro}</p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">The Ideal Candidate Will:</h3>
                <ul className="space-y-3 text-gray-300">
                  {mockJobData.job.description.idealCandidate.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Your Responsibilities:</h3>
                <ul className="space-y-3 text-gray-300">
                  {mockJobData.job.description.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">What We're Looking For</h2>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Required Qualifications:</h3>
              <ul className="space-y-4 mb-8">
                {mockJobData.job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1 text-xl">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-6 mt-8">Targeted Programs:</h3>
              <div className="flex flex-wrap gap-2">
                {mockJobData.job.targetedPrograms.map((program, index) => (
                  <Badge key={index} className="bg-blue-600/30 text-blue-200 border-blue-500/50 px-3 py-1">
                    {program}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">About {mockJobData.job.company}</h2>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <p className="text-2xl font-light text-gray-300 mb-6 italic">
                "{mockJobData.company.tagline}"
              </p>
              <p className="text-lg text-gray-300 mb-6">{mockJobData.company.description}</p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Why Join Us?</h3>
              <ul className="space-y-3 text-gray-300">
                {mockJobData.company.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="text-sm text-gray-500">HR Contact</p>
                  <p className="font-medium">{mockJobData.company.contact.firstName} {mockJobData.company.contact.lastName}</p>
                  <p className="text-sm">{mockJobData.company.contact.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{mockJobData.company.contact.address}</p>
                  <p>{mockJobData.company.contact.city}, {mockJobData.company.contact.province}</p>
                  <p>{mockJobData.company.contact.postalCode}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Ready to Apply?</h2>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <div className="bg-red-600/20 border border-red-600/40 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-red-200">Important Application Instructions:</h3>
                <ul className="space-y-2 text-red-100 text-sm">
                  <li>• Always apply on myExperience. Failure to apply on myExperience means your application will not be considered.</li>
                  <li>• Only upload the requested application documents: {mockJobData.job.requiredDocuments.join(', ')}</li>
                  <li>• If the job posting requires you to apply on the employer's website, you must still apply on myExperience.</li>
                  <li>• Notify your Co-op Office immediately via email to hire@sfu.ca if the employer contacts you directly.</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-300 mb-6">Application Method: {mockJobData.job.applicationMethod}</p>
                <Button 
                  onClick={() => alert('Redirecting to myExperience application portal...')}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Apply on myExperience
                </Button>
                <p className="text-sm text-gray-500 mt-4">Application Deadline: {mockJobData.job.applicationDeadline}</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Job Listings
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2026 Simon Fraser University & Orbis Communications Inc.</p>
          <p className="mt-2">Experiential Learning (Co-op) Portal</p>
        </div>
      </footer>
    </div>
  );
};

export default JobPosting;