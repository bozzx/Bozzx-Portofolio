import React, { useState } from 'react';
import { Menu, X, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function BozzxPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const experiences = [
    {
      title: 'Content Creator',
      company: 'PiP World',
      period: '2025 – 2026',
      type: 'Full-time',
      description: 'Produced daily content (tweets, threads, campaigns) on X/Twitter to grow project awareness and community engagement. Developed project narrative and personal branding strategy aligned with Web3 market positioning. Drove measurable growth in follower engagement through consistent, on-brand content cadence. Collaborated with marketing team on digital campaigns and token/event launches.'
    },
    {
      title: 'Community Moderator',
      company: 'PiP World',
      period: '2025 – 2026',
      type: 'Full-time',
      description: 'Managed and moderated active communities across Discord and X, ensuring positive user experience. Responded to user inquiries, resolved technical and platform-related issues in real time. Maintained community health metrics (activity, retention) through structured engagement initiatives. Supported AMA events, giveaways, and community activations.'
    },
    {
      title: 'Telemarketing Staff',
      company: 'PT. Tupai Solusi Pintar',
      period: 'Aug 2024 – Nov 2024',
      type: 'Contract',
      description: 'Conducted outbound calls to prospective clients and delivered persuasive product presentations. Handled objections, provided tailored solutions, and achieved consistent conversion targets. Maintained accurate CRM records and managed follow-up pipeline. Collected customer feedback to support product and service improvements.'
    },
    {
      title: 'Sales & Finance Staff (Pramuniaga)',
      company: 'Pusat Gadai Indonesia',
      period: 'Jul 2023 – Jul 2024',
      type: 'Full-time',
      description: 'Managed daily financial records including inflow and outflow transactions. Processed reporting and reconciliation via Microsoft Excel and internal web systems. Supported daily branch operations and administrative functions.'
    },
    {
      title: 'Staff Accounting',
      company: 'Koperasi Syariah Benteng Mikro Indonesia',
      period: '2021 – 2023',
      type: 'Full-time',
      description: 'Acquired and served members, explained financial products, and processed loan disbursements. Managed installment collection and handled delinquent account resolution. Responsible for all branch-level administrative and financial reporting.'
    }
  ];

  const skills = [
    ['Web3 Content Creation', 'Community Management', 'Discord & X Strategy'],
    ['Narrative & Branding', 'Engagement Growth', 'Campaign Execution'],
    ['Finance & Accounting', 'Customer Handling', 'Microsoft Excel / Office'],
    ['Public Speaking', 'Problem Solving', 'Teamwork & Communication']
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            Bozzx
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#resume" className="text-gray-700 hover:text-green-700 font-medium transition">Resume</a>
            <a href="#experience" className="text-gray-700 hover:text-green-700 font-medium transition">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-green-700 font-medium transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
            <a href="#resume" className="text-gray-700 hover:text-green-700 font-medium">Resume</a>
            <a href="#experience" className="text-gray-700 hover:text-green-700 font-medium">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-green-700 font-medium">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Photo */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 border-green-700 overflow-hidden bg-gradient-to-br from-orange-50 to-green-50">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23f3e5ab' width='200' height='200'/%3E%3Ccircle cx='100' cy='50' r='30' fill='%23d4a574'/%3E%3Crect x='40' y='100' width='120' height='80' fill='%236b8e23'/%3E%3Crect x='60' y='90' width='20' height='30' fill='%23ff8c42'/%3E%3Crect x='120' y='90' width='20' height='30' fill='%23ff8c42'/%3E%3C/svg%3E"
                  alt="Bozzx Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Intro */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Bozzx
              </h1>
              <h2 className="text-xl md:text-2xl text-green-700 font-semibold mb-6">
                Web3 Content Creator & Community Specialist
              </h2>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Web3-native content creator and community specialist with hands-on experience building narrative, managing Discord & X communities, and driving engagement for blockchain projects. Known for disciplined execution, fast adaptability, and clear communication.
              </p>

              <div className="space-y-2 text-gray-700 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-green-700" />
                  <span>Kabupaten Tangerang, Banten, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-green-700" />
                  <a href="tel:+628569221481" className="hover:text-green-700">+62 856 9221 4817</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-green-700" />
                  <a href="mailto:ikbalfauzy1308@gmail.com" className="hover:text-green-700">ikbalfauzy1308@gmail.com</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://x.com/bozzxyz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition font-medium">
                  <Twitter size={18} />
                  Twitter
                </a>
                <a href="https://t.me/Bozxx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition font-medium">
                  <span>Telegram</span>
                </a>
                <a href="https://www.linkedin.com/in/ikbal-faozi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition font-medium">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Professional Summary</h2>
          
          <div className="bg-white rounded-lg border-l-4 border-green-700 p-8 mb-12 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed">
              Web3-native content creator and community specialist with hands-on experience building narrative, managing Discord & X communities, and driving engagement for blockchain projects. Background in finance, customer handling, and administration provides a strong operational foundation. Known for disciplined execution, fast adaptability, and clear communication — both on-chain and in traditional corporate environments.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.map((skill, sidx) => (
                      <span 
                        key={sidx}
                        className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-900">MA Miftahul Khaer</h4>
                <span className="text-gray-600 font-medium">2015 – 2018</span>
              </div>
              <p className="text-gray-700">Social Sciences (IPS)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Work Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-500 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-green-700 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">{exp.period}</p>
                    <span className="inline-block mt-1 px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-green-50 border-l-4 border-green-700 rounded-lg">
            <p className="text-gray-900 font-semibold text-lg">
              💼 Open to Web3 full-time roles, remote contracts, and DAOs
            </p>
            <p className="text-gray-700 mt-2">Available immediately</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Interested in collaborating? Reach out through any of these channels. I'm available for discussions about Web3 projects, partnerships, and opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="mailto:ikbalfauzy1308@gmail.com"
              className="bg-green-700 hover:bg-green-800 transition rounded-lg p-8 flex items-center gap-4"
            >
              <Mail size={32} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-green-100 text-sm">ikbalfauzy1308@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://t.me/Bozxx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 transition rounded-lg p-8 flex items-center gap-4"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold">Telegram</p>
                <p className="text-orange-100 text-sm">@Bozxx</p>
              </div>
            </a>

            <a 
              href="https://x.com/bozzxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 transition rounded-lg p-8 flex items-center gap-4"
            >
              <span className="text-2xl">𝕏</span>
              <div>
                <p className="font-semibold">Twitter</p>
                <p className="text-gray-300 text-sm">@bozzxyz</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>© 2024 Bozzx. All rights reserved. | Web3 Content Creator & Community Specialist</p>
        </div>
      </footer>
    </div>
  );
}