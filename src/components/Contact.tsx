import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'Sumantsunny63@gmail.com',
      link: 'mailto:Sumantsunny63@gmail.com',
      gradient: 'from-red-600 to-pink-600',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8789927623',
      link: 'tel:8789927623',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'sumantkumar63',
      link: 'https://www.linkedin.com/in/sumantkumar63',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'sumantsunny',
      link: 'https://github.com/sumantsunny',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`p-4 bg-gradient-to-r ${info.gradient} rounded-lg group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{info.label}</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}

              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Location</div>
                    <div className="text-lg font-semibold text-gray-900">
                      New Delhi, India
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Open to remote opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all outline-none resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Whether you have a project in mind or just want to chat about tech,
              I'd love to hear from you!
            </p>
            <a
              href="mailto:Sumantsunny63@gmail.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2025 Sumant Kumar. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
