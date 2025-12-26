import { ExternalLink, Code } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Gen AI Fuso',
      description:
        'Customer-facing portal for Fuso enabling users to troubleshoot vehicle issues with AI assistance. Reduced issue processing time by 50%.',
      technologies: ['React', 'Redux', 'Node.js', 'JavaScript'],
      impact: 'Saved client over ₹500 million annually',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'XNET (HRMS Portal)',
      description:
        'Comprehensive HR management portal automating employee data, attendance, leave, and asset tracking with role-based access control.',
      technologies: ['React', 'Node.js', 'MySQL', 'JWT'],
      impact: 'Enhanced data processing speed significantly',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      title: 'MFTBC FUSO',
      description:
        'Internal knowledge base website for FUSO providing organized, detailed information on vehicle parts and specifications.',
      technologies: ['React', 'HTML', 'CSS', 'Node.js'],
      impact: 'Reduced information access time by 60%',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      title: 'Staff Selection Commission (SSC)',
      description:
        'High-traffic government exam portal for modules like CGLE, CHSL, and Constable GD with complex application forms.',
      technologies: ['JavaScript', 'CSS', 'HTML', 'Node.js'],
      impact: '98% reduction in error reading for Steno exam',
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the key projects I've worked on, showcasing my
            expertise in building scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                      <Code className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-700">
                          Impact:
                        </span>
                        <span className="text-sm text-gray-600 ml-2">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="https://github.com/sumantsunny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Code className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
