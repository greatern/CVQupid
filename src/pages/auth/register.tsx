import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BuildingOffice2Icon, 
  UserGroupIcon, 
  UserIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const Register = () => {
  const registrationOptions = [
    {
      title: 'Company',
      description: 'Register your company to create CV templates and connect with mentors',
      icon: BuildingOffice2Icon,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      link: '/register/company',
      features: [
        'Create custom CV templates',
        'Access to mentor network',
        'Find qualified candidates',
        'Manage company profile'
      ]
    },
    {
      title: 'Mentor',
      description: 'Share your expertise and guide aspiring professionals',
      icon: UserGroupIcon,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      link: '/register/mentor',
      features: [
        'Set your availability',
        'Define expertise areas',
        'Connect with mentees',
        'Earn recognition badges'
      ]
    },
    {
      title: 'Candidate',
      description: 'Get personalized mentorship and career guidance',
      icon: UserIcon,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      link: '/register/candidate',
      features: [
        'CV optimization',
        'Mentor matching',
        'Skill development',
        'Job recommendations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Join MentorMatch</h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose how you want to participate in our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {registrationOptions.map((option) => (
            <div
              key={option.title}
              className={`${option.bgColor} rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`h-2 bg-gradient-to-r ${option.color}`} />
              
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${option.color}`}>
                    <option.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  {option.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`h-2 w-2 rounded-full ${option.bgColor.replace('bg-', 'bg-').replace('-50', '-500')} mr-3`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={option.link}
                  className={`block w-full py-3 px-4 rounded-lg bg-gradient-to-r ${option.color} text-white font-medium text-center hover:opacity-90 transition-opacity flex items-center justify-center`}
                >
                  Register as {option.title}
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;