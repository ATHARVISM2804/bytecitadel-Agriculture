import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Droplets, Leaf, CloudSun, Thermometer, Package, BarChart3, CheckCircle2, ChevronRight, TrendingUp, Users, Zap, MapPin, Quote, Star, Phone, MessageCircle, Mail, Clock, Send, MapPinned } from 'lucide-react';
import { useInView, useCounter, useMousePosition } from '../hooks/useAnimations';

const AgriculturePage = () => {
  return (
    <div className="relative bg-[#FAFAF8]">
      <HeroSection />
      <StatsSection />
      <IoTSolutionsSection />
      <TransformationSection />
      <TestimonialsSection />
      <PortfolioSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

// Hero Section - Clean, aesthetic design
const HeroSection = () => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-[#FDFDFB] via-[#F9F9F5] to-[#F5F5F0]">
      {/* Soft ambient gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/40 via-amber-50/30 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-green-100/30 via-emerald-50/20 to-transparent rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/50 to-transparent rounded-full" />
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-2 h-2 bg-[#E07B00]/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 bg-[#2D5A3D]/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-[25%] w-1 h-1 bg-[#E07B00]/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-[15%] w-2.5 h-2.5 bg-[#2D5A3D]/15 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Eyebrow badge */}
        <div className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gray-200/80 bg-white/70 backdrop-blur-sm mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="w-2 h-2 rounded-full bg-[#E07B00] animate-pulse"></span>
          <span className="text-sm text-gray-600 font-medium">AgriTech & IoT Innovation Partner</span>
        </div>
        
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gray-900">Smart Solutions for</span>
          <br />
          <span className="bg-gradient-to-r from-[#E07B00] to-[#F59E0B] bg-clip-text text-transparent">Agriculture & Retail</span>
        </h1>
        
        <p className={`text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          From smart irrigation systems to cold chain monitoring, we deliver IoT SaaS solutions that transform Indian agriculture and retail with affordable, accessible technology.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2D5A3D] text-white rounded-full font-medium hover:bg-[#234A31] transition-all duration-300 group shadow-lg shadow-[#2D5A3D]/20 hover:shadow-xl hover:shadow-[#2D5A3D]/30 cursor-pointer">
            <span>Book Consultation</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="#solutions" onClick={(e) => { e.preventDefault(); document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full font-medium border border-gray-200/80 hover:bg-white hover:border-gray-300 transition-all duration-300 group cursor-pointer">
            <Play className="w-5 h-5 text-[#2D5A3D]" />
            <span>Explore Solutions</span>
          </a>
        </div>
        
        <p className={`text-sm text-gray-400 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Starting at <span className="text-[#E07B00] font-medium">₹250</span>
        </p>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border border-gray-300/60 flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// Stats Section - Impact metrics with enhanced animations
const StatsSection = () => {
  const [ref, isInView] = useInView();

  const stats = [
    { 
      value: '200+', 
      label: 'Farms Connected', 
      sublabel: 'Across Gujarat & Maharashtra',
      icon: MapPin,
      color: 'from-[#2D5A3D] to-[#3d7a52]'
    },
    { 
      value: '40%', 
      label: 'Water Saved', 
      sublabel: 'With smart irrigation',
      icon: Droplets,
      color: 'from-[#E07B00] to-[#F59E0B]'
    },
    { 
      value: '₹15L+', 
      label: 'Cost Savings', 
      sublabel: 'For our farmer partners',
      icon: TrendingUp,
      color: 'from-[#2D5A3D] to-[#3d7a52]'
    },
    { 
      value: '50+', 
      label: 'Retail Stores', 
      sublabel: 'Using inventory tracking',
      icon: Package,
      color: 'from-[#E07B00] to-[#F59E0B]'
    },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-100/80 card-hover cursor-default group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1}s`, transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              {/* Icon with gradient */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Value with animated underline */}
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-[#2D5A3D] transition-colors duration-300">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              
              {/* Sublabel */}
              <div className="text-xs text-gray-400">
                {stat.sublabel}
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2D5A3D]/5 to-[#E07B00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// IoT Solutions Section - matching the image design
const IoTSolutionsSection = () => {
  const [ref, isInView] = useInView();

  const solutions = [
    {
      icon: Droplets,
      title: 'Smart Irrigation System',
      desc: 'Soil moisture sensors + automated water pumps via SMS/App control. Monthly SaaS with water usage reports and soil health insights.',
    },
    {
      icon: Leaf,
      title: 'Crop & Livestock Health Alerts',
      desc: 'Drone imagery analysis and wearable sensors for early illness detection. Subscription for health reports and real-time alerts.',
    },
    {
      icon: CloudSun,
      title: 'Micro-Weather Stations',
      desc: 'Localized temp, rain, humidity sensors for hyper-local weather data. Data-as-a-Service for planning and forecasting.',
    },
    {
      icon: Thermometer,
      title: 'Cold Chain Monitoring',
      desc: 'Temp/humidity sensors in transport and storage. Real-time alerts, deviation tracking, and compliance reports.',
    },
    {
      icon: Package,
      title: 'Smart Retail Inventory',
      desc: 'Bluetooth/RFID tracking for Kirana stores and pharmacies. Low-stock alerts and location services.',
    },
    {
      icon: BarChart3,
      title: 'Smart POS Analytics',
      desc: 'IoT devices near POS for sales insights, energy savings, and footfall estimates. Simple data aggregation.',
    },
  ];

  return (
    <section id="solutions" ref={ref} className="py-24 sm:py-28 lg:py-32 relative bg-gradient-to-b from-[#F8F8F5] to-[#FAFAF8] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#2D5A3D]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#E07B00]/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F0EA] text-[#2D5A3D] text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            IoT Solutions
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Affordable, accessible technology for Indian agriculture and retail sectors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group p-7 rounded-2xl bg-white border border-gray-100/80 card-hover cursor-pointer relative overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.08}s`, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              {/* Icon with animation */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E8F0EA] to-[#d4e5d8] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg">
                <solution.icon className="w-7 h-7 text-[#2D5A3D] group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#2D5A3D] transition-colors duration-300">{solution.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{solution.desc}</p>
              
              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#F5F5F0] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#2D5A3D]" />
              </div>
              
              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D5A3D] to-[#E07B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Digital Transformation Section with enhanced animations
const TransformationSection = () => {
  const [ref, isInView] = useInView();

  const steps = [
    { num: 1, title: 'Assessment', desc: 'Analyze current farm processes' },
    { num: 2, title: 'IoT Setup', desc: 'Deploy affordable sensors' },
    { num: 3, title: 'Automation', desc: 'Connect to mobile app' },
    { num: 4, title: 'Growth', desc: 'Scale with insights' },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-28 lg:py-32 relative bg-[#FAFAF8] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#2D5A3D]/5 to-transparent rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF4E6] text-[#E07B00] text-sm font-medium mb-4">Transform Your Farm</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Digital Transformation for Farmers
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Learn step-by-step how digital IoT tools can increase efficiency, reduce costs, and boost productivity for local farmers. Mobile-first, SMS/WhatsApp alerts, low-cost sensors.
            </p>
            
            {/* Steps Grid with enhanced hover */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100/80 hover:border-[#2D5A3D]/30 hover:shadow-md cursor-pointer group transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E8F0EA] to-[#d4e5d8] text-[#2D5A3D] flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#2D5A3D] transition-colors duration-300">{step.title}</h4>
                    <p className="text-xs text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#E07B00] to-[#F59E0B] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#E07B00]/30 transition-all duration-300 group btn-ripple cursor-pointer">
              <span>Book Consultation for ₹250</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Right Video with enhanced effects */}
          <div className={`relative transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <video
                src="https://res.cloudinary.com/dmhabztbf/video/upload/v1768755656/Farmer_s_Digital_Transformation_Video_xtg0pt.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E07B00]/10 rounded-full blur-xl animate-float-slow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2D5A3D]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section - matching the image design
const PortfolioSection = () => {
  const [ref, isInView] = useInView();

  const projects = [
    {
      category: 'AGRITECH IOT • SAAS',
      title: 'Smart Irrigation Dashboard',
      desc: 'Automated irrigation system with soil moisture sensors. Saved 40% water for 200+ small farms in Gujarat. SMS/App control...',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      live: true,
    },
    {
      category: 'RETAILTECH • LOGISTICS',
      title: 'Cold Chain Monitor',
      desc: 'Temperature tracking for dairy and vegetable transport across Maharashtra. Real-time alerts reduced spoilage by...',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
      live: true,
    },
    {
      category: 'AGRITECH • DRONE',
      title: 'Crop Health AI',
      desc: 'Drone-based crop health monitoring with AI analysis. Early disease detection for cotton and wheat farmers.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&h=400&fit=crop',
      live: false,
    },
    {
      category: 'RETAILTECH • RFID',
      title: 'Kirana Store Tracker',
      desc: 'Smart inventory tracking for small retail shops. Bluetooth tags with low-stock alerts and theft prevention.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      live: true,
    },
    {
      category: 'PROCESS AUTOMATION',
      title: 'RPA Workflow Automation',
      desc: 'Robotic process automation for agricultural cooperatives. Automated loan processing and subsidy applications.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      live: true,
    },
    {
      category: '2D ANIMATION',
      title: 'AgriTech Explainer Videos',
      desc: 'Educational animation series teaching farmers about digital tools. Available in Hindi, Gujarati, and Marathi.',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
      live: true,
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="py-24 sm:py-28 lg:py-32 relative bg-[#FAFAF8] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2D5A3D]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8F0EA] text-[#2D5A3D] text-sm font-medium mb-4">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real solutions making real impact for Indian farmers and retailers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden bg-white border border-gray-100/80 card-hover cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.08}s`, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A3D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {project.live && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#E07B00] animate-pulse"></span>
                    Live Preview
                  </div>
                )}
                {/* View button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="px-5 py-2 bg-white rounded-full text-sm font-medium text-[#2D5A3D] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">View Project</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-[#E07B00] tracking-wide">{project.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#2D5A3D] transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section with enhanced animations
const TestimonialsSection = () => {
  const [ref, isInView] = useInView();

  const testimonials = [
    {
      quote: "The smart irrigation system saved us 40% water and increased our crop yield. The SMS alerts are perfect for farmers like me who are always in the field.",
      name: "Ramesh Patel",
      role: "Cotton Farmer, Gujarat",
      rating: 5,
    },
    {
      quote: "Cold chain monitoring helped us reduce vegetable spoilage by 60%. Real-time temperature alerts saved lakhs of rupees in just 3 months.",
      name: "Priya Sharma",
      role: "Logistics Manager, FreshKart",
      rating: 5,
    },
    {
      quote: "The inventory tracking system transformed our kirana store. No more manual counting - everything is automated with low-stock alerts.",
      name: "Vijay Mehta",
      role: "Store Owner, Mumbai",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 sm:py-28 lg:py-32 relative bg-gradient-to-b from-[#F8F8F5] to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#E07B00]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-[#2D5A3D]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-100 text-gray-600 text-sm font-medium mb-4 shadow-sm">
            <Users className="w-4 h-4 inline mr-1.5 -mt-0.5 text-[#2D5A3D]" />Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real feedback from farmers and retailers using our IoT solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-7 sm:p-8 rounded-2xl bg-white border border-gray-100/80 card-hover group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.12}s`, transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              {/* Quote icon with rotation on hover */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#E8F0EA] to-[#d4e5d8] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Quote className="w-5 h-5 text-[#2D5A3D]" />
              </div>
              
              {/* Rating with stagger animation */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E07B00] text-[#E07B00] group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 0.05}s` }} />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author with avatar */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2D5A3D] to-[#3d7a52] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-[#2D5A3D] transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2D5A3D] to-[#E07B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm text-gray-500 mb-6">Trusted by farmers and businesses across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">NABARD</div>
            <div className="text-2xl font-bold text-gray-400">FPO India</div>
            <div className="text-2xl font-bold text-gray-400">AgriStack</div>
            <div className="text-2xl font-bold text-gray-400">Kisan App</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section with enhanced animations
const FAQSection = () => {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the minimum investment to get started?",
      answer: "Our solutions start at just ₹250 for a consultation. Basic sensor kits start from ₹2,500, and full IoT setups with monthly SaaS subscriptions start from ₹5,000/month. We offer flexible payment plans for farmers."
    },
    {
      question: "Do I need internet connectivity on my farm?",
      answer: "Not necessarily! Our smart irrigation and monitoring systems work with SMS/WhatsApp alerts. For real-time dashboard access, basic 2G connectivity is sufficient. We also offer offline-first solutions that sync when connectivity is available."
    },
    {
      question: "How quickly can I see ROI on IoT investment?",
      answer: "Most farmers see positive ROI within 2-3 crop cycles. Water savings of 30-40% and reduced crop loss typically offset the investment cost. Retail store owners usually see benefits within the first month through better inventory management."
    },
    {
      question: "Is training provided for farmers?",
      answer: "Yes! We provide on-site training in Hindi, Gujarati, Marathi, and English. Our mobile app is designed with simple interfaces and voice assistance. We also have WhatsApp support for quick queries."
    },
    {
      question: "What happens if a sensor stops working?",
      answer: "All our sensors come with a 1-year warranty. We provide free replacement for manufacturing defects. Our support team monitors device health remotely and proactively alerts you before issues occur."
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-24 sm:py-28 lg:py-32 relative bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F5F0] text-gray-600 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 inline mr-1.5 -mt-0.5" />FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about our AgriTech solutions
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-gray-100/80 bg-[#FAFAF8] overflow-hidden transition-all duration-500 hover:border-gray-200 ${openIndex === index ? 'shadow-md' : ''} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F5F5F0] transition-colors duration-300 group"
              >
                <span className={`font-semibold pr-4 transition-colors duration-300 ${openIndex === index ? 'text-[#2D5A3D]' : 'text-gray-900'}`}>{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-[#2D5A3D] rotate-90' : 'bg-white border border-gray-200 group-hover:border-[#2D5A3D]/30'}`}>
                  <ChevronRight className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-[#2D5A3D]'}`} />
                </div>
              </button>
              <div className={`grid transition-all duration-500 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA with enhanced design */}
        <div className={`mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] text-white text-center transition-all duration-1000 delay-500 hover:shadow-xl hover:shadow-[#2D5A3D]/20 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg mb-5">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2D5A3D] rounded-full font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <a href="https://wa.me/919876543210" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section - matching the image design with consultation pricing
const CTASection = () => {
  const [ref, isInView] = useInView();

  const benefits = [
    '1-hour strategy session',
    'Farm/Store process analysis',
    'Custom IoT solution roadmap',
    'ROI estimation',
  ];

  return (
    <section ref={ref} className="py-24 sm:py-28 lg:py-32 relative bg-gradient-to-b from-[#F5F5F0] to-[#FAFAF8] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E07B00]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl shadow-gray-200/50 border border-gray-100/80 text-center transition-all duration-1000 hover:shadow-2xl hover:shadow-gray-200/60 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF4E6] text-[#E07B00] text-sm font-medium mb-6">Limited Time Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Ready to Transform?
          </h2>
          <p className="text-gray-500 mb-8">Book your consultation today</p>
          
          <div className="mb-8">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#E07B00] to-[#F59E0B] bg-clip-text text-transparent">₹250</span>
            <span className="text-gray-400 text-lg ml-2">/ Consultation Fee</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F8F8F5] border border-gray-100/80 text-sm text-gray-600 hover:bg-[#E8F0EA] hover:border-[#2D5A3D]/20 transition-all duration-300 cursor-default ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#E07B00] to-[#F59E0B] text-white rounded-full font-medium hover:shadow-xl hover:shadow-[#E07B00]/30 transition-all duration-300 group btn-ripple transform hover:scale-105 cursor-pointer">
            <span>Book Now</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', farmSize: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      subtext: 'Mon-Sat, 9am-6pm IST',
      color: 'from-[#2D5A3D] to-[#3d7a52]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@bytecitadel.com',
      subtext: 'We reply within 24 hours',
      color: 'from-[#E07B00] to-[#F59E0B]'
    },
    {
      icon: MapPinned,
      title: 'Visit Us',
      details: 'Ahmedabad, Gujarat',
      subtext: 'India - 380015',
      color: 'from-[#2D5A3D] to-[#3d7a52]'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9AM - 6PM',
      subtext: 'Sunday: Closed',
      color: 'from-[#E07B00] to-[#F59E0B]'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-28 lg:py-32 relative bg-gradient-to-b from-white to-[#F5F5F0] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D5A3D]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E07B00]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0EA] text-[#2D5A3D] text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Start Your <span className="bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about our IoT solutions? We're here to help you transform your farm or retail business.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info Cards */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="group p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#2D5A3D]/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">{item.title}</h4>
                    <p className="text-lg font-bold text-gray-900 group-hover:text-[#2D5A3D] transition-colors duration-300">{item.details}</p>
                    <p className="text-sm text-gray-500">{item.subtext}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-medium text-gray-500 mb-3">Follow us on</p>
              <div className="flex gap-3">
                {['WhatsApp', 'LinkedIn', 'Twitter', 'YouTube'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#2D5A3D] hover:text-white hover:border-[#2D5A3D] transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ramesh Patel"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#2D5A3D] focus:ring-2 focus:ring-[#2D5A3D]/10 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#2D5A3D] focus:ring-2 focus:ring-[#2D5A3D]/10 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ramesh@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#2D5A3D] focus:ring-2 focus:ring-[#2D5A3D]/10 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Farm/Store Size</label>
                  <select
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#2D5A3D] focus:ring-2 focus:ring-[#2D5A3D]/10 outline-none transition-all duration-300 text-gray-900 bg-white"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (0-5 acres / 1 store)</option>
                    <option value="medium">Medium (5-20 acres / 2-5 stores)</option>
                    <option value="large">Large (20+ acres / 5+ stores)</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your farm/store and what challenges you're facing..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#2D5A3D] focus:ring-2 focus:ring-[#2D5A3D]/10 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2D5A3D] to-[#3d7a52] text-white rounded-xl font-semibold shadow-lg shadow-[#2D5A3D]/20 hover:shadow-xl hover:shadow-[#2D5A3D]/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgriculturePage;
