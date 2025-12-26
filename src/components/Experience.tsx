import { Briefcase, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experience = {
    company: 'Cubastion Consulting Pvt. Ltd.',
    role: 'Associate Consultant',
    period: 'Dec 2021 - Present',
    description:
      'Developed and deployed user-friendly web applications for enterprise clients across the automotive and government domains.',
    highlights: [
      'Built reusable React components reducing development time by 30%',
      'Optimized application performance with code splitting and lazy loading',
      'Implemented secure role-based access control (RBAC) using JWT',
      'Achieved 98% reduction in data entry errors through robust validation',
      'Collaborated with UI/UX designers and backend engineers',
    ],
  };

  const education = {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Technology',
    institution: 'Barkatullah University Institute of Technology, Bhopal',
    cgpa: '8.05/10',
  };

  return (
    <section id="experience" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">
                    {experience.company}
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{experience.description}</p>

              <div className="space-y-3">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
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
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-green-600 font-semibold mb-2">
                    {education.field}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{education.institution}</p>

              <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
                <div className="text-sm text-gray-600 mb-1">CGPA</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  {education.cgpa}
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">
                  Core Competencies
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Component Architecture',
                    'API Integration',
                    'UI/UX Collaboration',
                    'Agile Methodologies',
                    'Code Optimization',
                    'Team Leadership',
                  ].map((competency, index) => (
                    <div
                      key={index}
                      className="bg-white px-4 py-2 rounded-lg text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {competency}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
