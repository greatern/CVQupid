import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  UserIcon, 
  AcademicCapIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

const RegisterCandidate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [candidateData, setCandidateData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      idNumber: '',
      dateOfBirth: '',
    },
    education: {
      nqfLevel: '',
      degree: '',
      institution: '',
      graduationYear: '',
      fieldOfStudy: '',
    },
    career: {
      interestedFields: [] as string[],
      skills: [] as string[],
      experienceLevel: '',
      careerGoal: '',
    },
    cv: {
      file: null as File | null,
      parsedData: null as any,
    }
  });

  const nqfLevels = [
    'NQF Level 1 - Grade 9',
    'NQF Level 2 - Grade 10',
    'NQF Level 3 - Grade 11',
    'NQF Level 4 - Grade 12/Matric',
    'NQF Level 5 - Higher Certificate',
    'NQF Level 6 - Diploma/Advanced Certificate',
    'NQF Level 7 - Bachelor\'s Degree/Advanced Diploma',
    'NQF Level 8 - Honours Degree/Postgraduate Diploma',
    'NQF Level 9 - Master\'s Degree',
    'NQF Level 10 - Doctoral Degree'
  ];

  const careerFields = [
    'Software Development',
    'Data Science',
    'Cybersecurity',
    'Cloud Computing',
    'Artificial Intelligence',
    'Digital Marketing',
    'Finance & Accounting',
    'Human Resources',
    'Project Management',
    'Healthcare',
    'Education',
    'Engineering',
    'Sales',
    'Consulting',
    'Research',
    'Entrepreneurship'
  ];

  const skillsList = [
    'JavaScript',
    'Python',
    'Java',
    'React',
    'Node.js',
    'SQL',
    'Data Analysis',
    'Machine Learning',
    'Project Management',
    'Communication',
    'Problem Solving',
    'Teamwork',
    'Leadership',
    'Time Management',
    'Critical Thinking'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
      // Here you would typically parse the CV file
      console.log('CV uploaded:', file.name);
    }
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.personalInfo.firstName}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, firstName: e.target.value }
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.personalInfo.lastName}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, lastName: e.target.value }
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.personalInfo.email}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, email: e.target.value }
                  }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.personalInfo.phone}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, phone: e.target.value }
                  }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.personalInfo.idNumber}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, idNumber: e.target.value }
                  }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.personalInfo.dateOfBirth}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, dateOfBirth: e.target.value }
                  }))}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Education Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                NQF Level *
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={candidateData.education.nqfLevel}
                onChange={(e) => setCandidateData(prev => ({
                  ...prev,
                  education: { ...prev.education, nqfLevel: e.target.value }
                }))}
              >
                <option value="">Select NQF Level</option>
                {nqfLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Degree/Qualification
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.education.degree}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    education: { ...prev.education, degree: e.target.value }
                  }))}
                  placeholder="e.g., Bachelor of Science"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Field of Study
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.education.fieldOfStudy}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    education: { ...prev.education, fieldOfStudy: e.target.value }
                  }))}
                  placeholder="e.g., Computer Science"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={candidateData.education.institution}
                onChange={(e) => setCandidateData(prev => ({
                  ...prev,
                  education: { ...prev.education, institution: e.target.value }
                }))}
                placeholder="University or College name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Year
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={candidateData.education.graduationYear}
                onChange={(e) => setCandidateData(prev => ({
                  ...prev,
                  education: { ...prev.education, graduationYear: e.target.value }
                }))}
              >
                <option value="">Select year</option>
                {Array.from({ length: 20 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year.toString()}>{year}</option>;
                })}
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Career Interests & Skills</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Career Fields You're Interested In *
              </label>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {careerFields.map(field => (
                  <div key={field} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`field-${field}`}
                      checked={candidateData.career.interestedFields.includes(field)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setCandidateData(prev => ({
                          ...prev,
                          career: {
                            ...prev.career,
                            interestedFields: isChecked
                              ? [...prev.career.interestedFields, field]
                              : prev.career.interestedFields.filter(f => f !== field)
                          }
                        }));
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`field-${field}`} className="ml-2 text-sm text-gray-700">
                      {field}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Skills *
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {skillsList.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => {
                      const isSelected = candidateData.career.skills.includes(skill);
                      setCandidateData(prev => ({
                        ...prev,
                        career: {
                          ...prev.career,
                          skills: isSelected
                            ? prev.career.skills.filter(s => s !== skill)
                            : [...prev.career.skills, skill]
                        }
                      }));
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      candidateData.career.skills.includes(skill)
                        ? 'bg-blue-100 text-blue-800 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Add custom skill"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const input = e.target as HTMLInputElement;
                      if (input.value.trim() && !candidateData.career.skills.includes(input.value.trim())) {
                        setCandidateData(prev => ({
                          ...prev,
                          career: {
                            ...prev.career,
                            skills: [...prev.career.skills, input.value.trim()]
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
                    if (input.value.trim() && !candidateData.career.skills.includes(input.value.trim())) {
                      setCandidateData(prev => ({
                        ...prev,
                        career: {
                          ...prev.career,
                          skills: [...prev.career.skills, input.value.trim()]
                        }
                      }));
                      input.value = '';
                    }
                  }}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.career.experienceLevel}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    career: { ...prev.career, experienceLevel: e.target.value }
                  }))}
                >
                  <option value="">Select level</option>
                  <option value="student">Student/Recent Graduate</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="junior">Junior (2-4 years)</option>
                  <option value="mid">Mid-Level (4-7 years)</option>
                  <option value="senior">Senior (7+ years)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Career Goal
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={candidateData.career.careerGoal}
                  onChange={(e) => setCandidateData(prev => ({
                    ...prev,
                    career: { ...prev.career, careerGoal: e.target.value }
                  }))}
                  placeholder="e.g., Become a Senior Developer"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Upload Your CV</h3>
            
            <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
              <CloudArrowUpIcon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Upload your CV (PDF or DOCX)</h4>
                <p className="text-sm text-gray-600 mb-4">
                  We'll parse your CV to extract skills and experience automatically
                </p>
                
                <label className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                  />
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700">
                    <DocumentTextIcon className="h-5 w-5 mr-2" />
                    Choose CV File
                  </div>
                </label>
              </div>
              
              {cvFile && (
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-8 w-8 text-green-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{cvFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCvFile(null)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-4">
                Supported formats: PDF, DOC, DOCX (Max 10MB)
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <AcademicCapIcon className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Don't have a CV yet?</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    You can create one using our template builder after registration
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Quick Profile Preview</h4>
                  <p className="text-sm text-gray-600">Based on your inputs</p>
                </div>
                <button
                  type="button"
                  onClick={() => console.log('Preview profile')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Full Preview
                </button>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Education Level</p>
                  <p className="font-medium">{candidateData.education.nqfLevel || 'Not specified'}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Career Fields</p>
                  <p className="font-medium">{candidateData.career.interestedFields.length} selected</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Skills</p>
                  <p className="font-medium">{candidateData.career.skills.length} skills</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">CV Status</p>
                  <p className="font-medium">{cvFile ? 'Uploaded' : 'Pending'}</p>
                </div>
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
        {[1, 2, 3, 4].map((stepNumber) => (
          <React.Fragment key={stepNumber}>
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                step === stepNumber 
                  ? 'bg-blue-600 text-white' 
                  : step > stepNumber 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {stepNumber}
              </div>
              <span className="text-xs mt-2 whitespace-nowrap">
                {stepNumber === 1 && 'Personal'}
                {stepNumber === 2 && 'Education'}
                {stepNumber === 3 && 'Career'}
                {stepNumber === 4 && 'CV Upload'}
              </span>
            </div>
            {stepNumber < 4 && (
              <div className={`h-1 w-12 ${
                step > stepNumber ? 'bg-blue-100' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
              <UserIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Candidate Registration</h1>
          <p className="mt-2 text-gray-600">
            Start your journey to career success with personalized mentorship
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <StepIndicator />
          
          <form onSubmit={(e) => {
            e.preventDefault();
            if (step < 4) {
              setStep(step + 1);
            } else {
              console.log('Candidate registration:', candidateData);
              navigate('/dashboard/candidate');
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
                className={`ml-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 ${step === 1 ? 'w-full' : ''}`}
              >
                {step < 4 ? 'Continue' : 'Complete Registration'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              By registering, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCandidate;