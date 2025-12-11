import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  UserGroupIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const RegisterMentor = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [mentorData, setMentorData] = useState({
    basicInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      yearsExperience: '',
    },
    expertise: {
      industries: [] as string[],
      skills: [] as { name: string; weight: number }[],
      divisions: [] as string[],
    },
    availability: {
      timezone: 'UTC+2',
      weeklyHours: 5,
      preferredDays: [] as string[],
      sessionLength: 30,
    },
    preferences: {
      trainingModules: [] as string[],
      maxMentees: 3,
      meetingFrequency: 'weekly',
    }
  });

  const industries = [
    'Technology & IT',
    'Finance & Banking',
    'Healthcare',
    'Engineering',
    'Marketing',
    'Sales',
    'Human Resources',
    'Operations',
    'Consulting',
    'Education'
  ];

  const trainingModules = [
    'CV Optimization Workshop',
    'Interview Preparation',
    'Technical Skills Assessment',
    'Career Path Planning',
    'Industry Insights Session',
    'Networking Strategies',
    'Personal Branding',
    'Salary Negotiation'
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleSkillAdd = (skill: string) => {
    if (skill && !mentorData.expertise.skills.find(s => s.name === skill)) {
      setMentorData(prev => ({
        ...prev,
        expertise: {
          ...prev.expertise,
          skills: [...prev.expertise.skills, { name: skill, weight: 5 }]
        }
      }));
    }
  };

  const handleSkillWeightChange = (skillName: string, weight: number) => {
    setMentorData(prev => ({
      ...prev,
      expertise: {
        ...prev.expertise,
        skills: prev.expertise.skills.map(skill =>
          skill.name === skillName ? { ...skill, weight } : skill
        )
      }
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.basicInfo.firstName}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    basicInfo: { ...prev.basicInfo, firstName: e.target.value }
                  }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.basicInfo.lastName}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    basicInfo: { ...prev.basicInfo, lastName: e.target.value }
                  }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.basicInfo.email}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    basicInfo: { ...prev.basicInfo, email: e.target.value }
                  }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.basicInfo.phone}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    basicInfo: { ...prev.basicInfo, phone: e.target.value }
                  }))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Company
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={mentorData.basicInfo.company}
                onChange={(e) => setMentorData(prev => ({
                  ...prev,
                  basicInfo: { ...prev.basicInfo, company: e.target.value }
                }))}
                placeholder="Where do you currently work?"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position/Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.basicInfo.position}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    basicInfo: { ...prev.basicInfo, position: e.target.value }
                  }))}
                  placeholder="e.g., Senior Developer, HR Manager"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.basicInfo.yearsExperience}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    basicInfo: { ...prev.basicInfo, yearsExperience: e.target.value }
                  }))}
                >
                  <option value="">Select years</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Expertise & Skills</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry Expertise *
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {industries.map(industry => (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => {
                      const isSelected = mentorData.expertise.industries.includes(industry);
                      setMentorData(prev => ({
                        ...prev,
                        expertise: {
                          ...prev.expertise,
                          industries: isSelected
                            ? prev.expertise.industries.filter(i => i !== industry)
                            : [...prev.expertise.industries, industry]
                        }
                      }));
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      mentorData.expertise.industries.includes(industry)
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Divisions/Departments
              </label>
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  placeholder="e.g., Software Development, Marketing, HR"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const input = e.target as HTMLInputElement;
                      if (input.value.trim()) {
                        setMentorData(prev => ({
                          ...prev,
                          expertise: {
                            ...prev.expertise,
                            divisions: [...prev.expertise.divisions, input.value.trim()]
                          }
                        }));
                        input.value = '';
                      }
                    }
                  }}
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    if (input.value.trim()) {
                      setMentorData(prev => ({
                        ...prev,
                        expertise: {
                          ...prev.expertise,
                          divisions: [...prev.expertise.divisions, input.value.trim()]
                        }
                      }));
                      input.value = '';
                    }
                  }}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {mentorData.expertise.divisions.map((division, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center"
                  >
                    {division}
                    <button
                      type="button"
                      onClick={() => setMentorData(prev => ({
                        ...prev,
                        expertise: {
                          ...prev.expertise,
                          divisions: prev.expertise.divisions.filter((_, i) => i !== index)
                        }
                      }))}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills You're Looking For (with importance weight)
              </label>
              <div className="space-y-3">
                {mentorData.expertise.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <span className="flex-1 font-medium">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Importance:</span>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => handleSkillWeightChange(skill.name, num)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                              skill.weight >= num
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setMentorData(prev => ({
                          ...prev,
                          expertise: {
                            ...prev.expertise,
                            skills: prev.expertise.skills.filter(s => s.name !== skill.name)
                          }
                        }))}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add a skill (e.g., React.js, Project Management, Data Analysis)"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleSkillAdd(input.value.trim());
                        input.value = '';
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    onClick={(e) => {
                      const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                      handleSkillAdd(input.value.trim());
                      input.value = '';
                    }}
                  >
                    Add Skill
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Availability & Preferences</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <ClockIcon className="h-5 w-5 inline mr-1" />
                  Timezone
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.availability.timezone}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    availability: { ...prev.availability, timezone: e.target.value }
                  }))}
                >
                  <option value="UTC+2">South Africa Standard Time (UTC+2)</option>
                  <option value="UTC+0">GMT (UTC+0)</option>
                  <option value="UTC-5">EST (UTC-5)</option>
                  <option value="UTC-8">PST (UTC-8)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <ChartBarIcon className="h-5 w-5 inline mr-1" />
                  Weekly Availability (hours)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    className="flex-1"
                    value={mentorData.availability.weeklyHours}
                    onChange={(e) => setMentorData(prev => ({
                      ...prev,
                      availability: { ...prev.availability, weeklyHours: parseInt(e.target.value) }
                    }))}
                  />
                  <span className="text-lg font-semibold text-green-600">
                    {mentorData.availability.weeklyHours} hours
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <CalendarIcon className="h-5 w-5 inline mr-1" />
                Preferred Days for Sessions
              </label>
              <div className="grid grid-cols-7 gap-2">
                {daysOfWeek.map(day => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => {
                      const isSelected = mentorData.availability.preferredDays.includes(day);
                      setMentorData(prev => ({
                        ...prev,
                        availability: {
                          ...prev.availability,
                          preferredDays: isSelected
                            ? prev.availability.preferredDays.filter(d => d !== day)
                            : [...prev.availability.preferredDays, day]
                        }
                      }));
                    }}
                    className={`py-3 rounded-lg text-sm font-medium ${
                      mentorData.availability.preferredDays.includes(day)
                        ? 'bg-green-100 text-green-800 border-2 border-green-500'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {day.substring(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <BriefcaseIcon className="h-5 w-5 inline mr-1" />
                Training Modules You Can Offer
              </label>
              <div className="grid grid-cols-2 gap-3">
                {trainingModules.map(module => (
                  <div key={module} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`module-${module}`}
                      checked={mentorData.preferences.trainingModules.includes(module)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setMentorData(prev => ({
                          ...prev,
                          preferences: {
                            ...prev.preferences,
                            trainingModules: isChecked
                              ? [...prev.preferences.trainingModules, module]
                              : prev.preferences.trainingModules.filter(m => m !== module)
                          }
                        }));
                      }}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`module-${module}`} className="ml-2 text-sm text-gray-700">
                      {module}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Mentees
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.preferences.maxMentees}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, maxMentees: parseInt(e.target.value) }
                  }))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} mentee{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meeting Frequency Preference
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={mentorData.preferences.meetingFrequency}
                  onChange={(e) => setMentorData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, meetingFrequency: e.target.value }
                  }))}
                >
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const StepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3].map((stepNumber) => (
          <React.Fragment key={stepNumber}>
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                step === stepNumber 
                  ? 'bg-green-600 text-white' 
                  : step > stepNumber 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {stepNumber}
              </div>
              <span className="text-xs mt-2">
                {stepNumber === 1 && 'Personal Info'}
                {stepNumber === 2 && 'Expertise'}
                {stepNumber === 3 && 'Availability'}
              </span>
            </div>
            {stepNumber < 3 && (
              <div className={`h-1 w-16 ${
                step > stepNumber ? 'bg-green-100' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl">
              <UserGroupIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Mentor Registration</h1>
          <p className="mt-2 text-gray-600">
            Share your expertise and guide the next generation of professionals
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <StepIndicator />
          
          <form onSubmit={(e) => {
            e.preventDefault();
            if (step < 3) {
              setStep(step + 1);
            } else {
              console.log('Mentor registration:', mentorData);
              navigate('/dashboard/mentor');
            }
          }}>
            {renderStep()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
              )}
              
              <button
                type="submit"
                className={`ml-auto px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 ${step === 1 ? 'w-full' : ''}`}
              >
                {step < 3 ? 'Continue' : 'Complete Registration'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMentor;