import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Lock, Users, Repeat, BarChart3, Clock, Target } from 'lucide-react';

export default function TaimourAbidWebsite() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const metrics = [
    { label: "Lead Response Time", before: "4-6 hours", after: "< 2 minutes", impact: "340% more qualified conversations" },
    { label: "Conversion Rate", before: "12%", after: "34%", impact: "Built automated qualification that filtered $2M+ pipeline" },
    { label: "Onboarding Time", before: "5-7 days", after: "24 hours", impact: "Eliminated 80% of manual handoffs" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-xl tracking-tight">Taimour Abid</div>
          <a 
            href="#contact" 
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              Revenue Systems Architect • $100M+ in Pipeline Built
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            I build the{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
              revenue engine
            </span>{' '}
            behind scalable businesses
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl">
            Whether you're chasing your first $10K or scaling past $10M—most founders scale revenue before they scale their{' '}
            <span className="font-semibold bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
              infrastructure
            </span>
            . Then everything breaks. 
            I architect the revenue systems, automation frameworks, and operational backbone that generate predictable growth at{' '}
            <span className="font-semibold text-gray-900">every stage</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Let's Build Your Revenue Engine
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button
              onClick={() => setShowCalendlyModal(true)}
              className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-medium hover:border-gray-300 transition-colors"
            >
              See What I Build
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Infrastructure isn't optional. It's the difference between{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
              scaling and breaking
            </span>.
          </h2>
          
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Most businesses run on duct tape and hope. Lead forms dumping to email. Spreadsheets tracking deals. 
              Manual follow-ups. Sales calls booked on personal calendars. No CRM. No automation. No real system.
            </p>
            <p>
              If you're just starting—this chaos costs you your first deals. Slow responses. Forgotten leads. 
              No follow-up system. You're leaving money on the table before you even get traction.
            </p>
            <p>
              If you're scaling—it gets worse. You hit $50K/month and suddenly you're drowning. Leads falling through cracks. 
              Team asking "where's this deal?" No visibility. No process. No infrastructure.
            </p>
            <p className="font-semibold text-gray-900">
              I build the systems that prevent both problems.
            </p>
            <p>
              Revenue systems. Qualification automation. Conversion pipelines. Onboarding workflows. 
              Backend dashboards. The entire operational backbone that turns your business—whether you're at 
              $0 or $10M—into a{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
                revenue engine
              </span>.
            </p>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              What I{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
                Build
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">End-to-end revenue infrastructure for founders who refuse to scale chaos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Revenue Systems Architecture",
                description: "The full lead-to-customer journey. Capture, qualification, routing, nurture, conversion, onboarding. Every touchpoint automated and tracked."
              },
              {
                icon: <Repeat className="w-6 h-6" />,
                title: "Marketing & Sales Automation",
                description: "Intelligent workflows that respond, qualify, and convert leads while you sleep. AI-powered conversation flows, dynamic follow-up sequences, appointment automation."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Pipeline & CRM Architecture",
                description: "Custom-built pipelines that match your actual process. Deal stages that make sense. Automations that move deals forward. Visibility into what's working."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Client Onboarding Systems",
                description: "Turn new clients from a 7-day manual nightmare into a 24-hour automated experience. Document collection, payment processing, kick-off scheduling—fully systematized."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Attribution & Tracking Infrastructure",
                description: "Know exactly which traffic source, campaign, or referral partner generated each lead. Multi-touch attribution across VSLs, Typeforms, calendars, and landing pages."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Operational Dashboards",
                description: "Real-time visibility into pipeline health, conversion rates, bottlenecks, and team performance. Internal tools that give you control of your business."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Real Systems.{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
                Real Outcomes.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Infrastructure investments that show up in revenue</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {metrics.map((metric, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMetric(idx)}
                  className={`text-left p-4 rounded-lg transition-all ${
                    activeMetric === idx 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-sm font-medium mb-2 opacity-80">{metric.label}</div>
                  <div className="text-2xl font-bold">
                    {metric.before} → {metric.after}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-900">
              <p className="text-lg font-medium text-gray-900">
                {metrics[activeMetric].impact}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">How We Work Together</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diagnose</h3>
                <p className="text-gray-600 leading-relaxed">
                  We map your entire revenue process. Lead sources. Qualification criteria. Sales stages. 
                  Onboarding steps. I identify every bottleneck, leak, and manual handoff that's costing you growth.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Architect</h3>
                <p className="text-gray-600 leading-relaxed">
                  I design the complete system—pipeline architecture, automation logic, data flows, integration map. 
                  You see exactly what we're building and why before a single workflow goes live.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Build</h3>
                <p className="text-gray-600 leading-relaxed">
                  I implement the entire infrastructure. CRM pipelines. Automation workflows. Landing pages. 
                  Integrations. AI conversation flows. Backend dashboards. Everything gets built, tested, and deployed.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Optimize</h3>
                <p className="text-gray-600 leading-relaxed">
                  We monitor performance, identify friction points, and continuously refine. Your system gets 
                  smarter as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">$100M+</div>
              <div className="text-sm sm:text-base text-gray-600">Pipeline Attributed & Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">150+</div>
              <div className="text-sm sm:text-base text-gray-600">Complete Systems Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">80%</div>
              <div className="text-sm sm:text-base text-gray-600">Average Reduction in Manual Work</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
            <h3 className="font-bold text-lg mb-8 text-center">Trusted By</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <a 
                href="https://munozghezlan.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-white"
              >
                <img 
                  src="/munozghezlan-logo.png" 
                  alt="Munoz Ghezlan" 
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </a>
              <a 
                href="https://jewelrybox.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-white"
              >
                <img 
                  src="/jewelrybox-logo.webp" 
                  alt="Jewelrybox.ai" 
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </a>
              <a 
                href="https://drdlawllc.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-white"
              >
                <img 
                  src="/drd-logo.webp" 
                  alt="DRD Law" 
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </a>
              <a 
                href="https://www.breathmasters.academy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-white"
              >
                <img 
                  src="/breathmasters-logo.webp" 
                  alt="Breath Masters" 
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </a>
              <a 
                href="https://smogking.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-white"
              >
                <img 
                  src="/smogking-logo.png" 
                  alt="Smog King" 
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </a>
              <a 
                href="https://section8training.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-gray-900"
              >
                <img 
                  src="/section8-logo.png" 
                  alt="Section 8 Training" 
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <a 
                href="https://donebyone.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-gray-900"
              >
                <img 
                  src="/donebyone-logo.png" 
                  alt="Done By One" 
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <a 
                href="https://fikor.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-all hover:shadow-sm bg-gray-900"
              >
                <img 
                  src="/fikor-logo.jpg" 
                  alt="Fikor" 
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">This Is For You If...</h2>
          
          <div className="space-y-4">
            {[
              "You have a great idea and want infrastructure built right from day one",
              "You're launching and need a revenue system that captures every lead and converts",
              "You're suffering from low lead flow and need better qualification and follow-up",
              "You're generating leads but losing them to slow response times and manual chaos",
              "Your team keeps asking 'where is this deal?' because nothing's tracked properly",
              "You're hitting revenue goals but onboarding new clients feels like a nightmare",
              "You know you need systems but don't have time to figure out what to build",
              "You want to scale revenue without scaling headcount 1:1",
              "You're tired of duct-taping tools together and want real infrastructure"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              I'm Taimour Abid. I architect revenue systems for founders who know infrastructure 
              isn't optional—it's competitive advantage.
            </p>
            <p>
              I've spent years at the intersection of marketing automation, sales operations, and 
              technical implementation. I've built complete revenue engines for financial services 
              firms, AI platforms, consulting businesses, legal practices, and service companies.
            </p>
            <p>
              What makes me different: I don't just implement tools. I design the entire operational 
              backbone—pipelines, automations, data flows, dashboards, integrations. The full system 
              that turns your business from reactive chaos into a{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
                predictable revenue machine
              </span>.
            </p>
            <p>
              Co-founder of{' '}
              <a href="https://graydots.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-gray-600">
                Graydots
              </a>
              {' '}with{' '}
              <a href="https://waleedsajid.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-gray-600">
                Waleed Sajid
              </a>
              —a systems and automation agency serving U.S.-based founders who want world-class infrastructure.
            </p>
            <p className="font-semibold text-gray-900">
              If you're ready to build infrastructure that scales, let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to build{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
              real infrastructure
            </span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Book a free 30-minute strategy call. We'll diagnose where your systems are breaking and map out a solution.
          </p>
          
          {/* Calendly Embed */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/taimourabid/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=06b6d4" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Prefer email?</p>
            <a href="mailto:taimour@graydots.com" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
              taimour@graydots.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-semibold text-2xl mb-4">Taimour Abid</div>
          <div className="text-gray-400 text-sm mb-8">
            Co-founder,{' '}
            <a href="https://graydots.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              Graydots
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
            © 2026 Taimour Abid. Building the revenue engines behind scalable businesses.
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendlyModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCalendlyModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-cyan-500 to-amber-500 p-6 sm:p-8 text-white text-center relative">
              <button
                onClick={() => setShowCalendlyModal(false)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Book a call to see what systems I've built
              </h3>
              <p className="text-base sm:text-lg opacity-90">
                Which generate $1,000,000+ per month
              </p>
            </div>
            <div className="relative">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/taimourabid/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=06b6d4" 
                style={{ minWidth: '320px', height: '600px' }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
