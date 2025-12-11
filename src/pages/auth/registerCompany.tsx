import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BuildingOffice2Icon, 
  DocumentTextIcon, 
  GlobeAltIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';

const RegisterCompany = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [companyData, setCompanyData] = useState({
    basicInfo: {
      companyName: '',
      industry: '',
      size: '',
      website: '',
      foundedYear: '',
    },
    contactInfo: {
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
    },
    description: '',
    cvTemplate: {
      sections: ['personal', 'education', 'experience', 'skills'],
      customFields: [],
    }
  });

  // ⭐ FIXED VERSION — NEVER THROWS SPREAD ERROR
  const handleInputChange = (section: string, field: string, value: any) => {
    setCompanyData(prev => {
      const sectionData = prev[section as keyof typeof prev];

      return {
        ...prev,
        [section]: {
          ...(typeof sectionData === "object" && sectionData !== null ? sectionData : {}),
          [field]: value,
        }
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Company registration:', companyData);
      navigate('/dashboard/company');
    }
  };

  const industries = [
    'Technology', 'Finance', 'Healthcare', 'Education',
    'Manufacturing', 'Retail', 'Consulting', 'Other'
  ];

  const companySizes = [
    '1-10 employees', '11-50 employees', '51-200 employees',
    '201-500 employees', '501-1000 employees', '1000+ employees'
  ];

  const StepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {[1, 2, 3].map((stepNumber) => (
          <React.Fragment key={stepNumber}>
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                step === stepNumber 
                  ? 'bg-blue-600 text-white'
                  : step > stepNumber 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {stepNumber}
              </div>
              <span className="text-xs mt-2">
                {stepNumber === 1 && 'Basic Info'}
                {stepNumber === 2 && 'Contact'}
                {stepNumber === 3 && 'CV Template'}
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Company Information</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={companyData.basicInfo.companyName}
                onChange={(e) => handleInputChange('basicInfo', 'companyName', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry *
              </label>
              <select
                value={companyData.basicInfo.industry}
                onChange={(e) => handleInputChange('basicInfo', 'industry', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Select industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Size
                </label>
                <select
                  value={companyData.basicInfo.size}
                  onChange={(e) => handleInputChange('basicInfo', 'size', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Select size</option>
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year Founded
                </label>
                <input
                  type="number"
                  min="1900"
                  max="2024"
                  value={companyData.basicInfo.foundedYear}
                  onChange={(e) => handleInputChange('basicInfo', 'foundedYear', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border bg-gray-50 rounded-l-lg">
                  <GlobeAltIcon className="h-5 w-5 text-gray-500" />
                </span>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={companyData.basicInfo.website}
                  onChange={(e) => handleInputChange('basicInfo', 'website', e.target.value)}
                  className="flex-1 px-4 py-3 border rounded-r-lg"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border bg-gray-50 rounded-l-lg">
                    <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                  </span>
                  <input
                    type="email"
                    required
                    value={companyData.contactInfo.email}
                    onChange={(e) => handleInputChange('contactInfo', 'email', e.target.value)}
                    className="flex-1 px-4 py-3 border rounded-r-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border bg-gray-50 rounded-l-lg">
                    <PhoneIcon className="h-5 w-5 text-gray-500" />
                  </span>
                  <input
                    type="tel"
                    required
                    value={companyData.contactInfo.phone}
                    onChange={(e) => handleInputChange('contactInfo', 'phone', e.target.value)}
                    className="flex-1 px-4 py-3 border rounded-r-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                value={companyData.contactInfo.address}
                onChange={(e) => handleInputChange('contactInfo', 'address', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={companyData.contactInfo.city}
                  onChange={(e) => handleInputChange('contactInfo', 'city', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={companyData.contactInfo.country}
                  onChange={(e) => handleInputChange('contactInfo', 'country', e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Description
              </label>
              <textarea
                rows={4}
                value={companyData.description}
                onChange={(e) =>
                  setCompanyData(prev => ({ ...prev, description: e.target.value }))
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">CV Template Requirements</h3>

            {/* DEFAULT SECTIONS */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900">Default CV Sections</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    These sections will be required for all candidates.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Personal Information", badge: "Required", color: "green" },
                { title: "Education", badge: "Customizable", color: "blue" },
                { title: "Work Experience", badge: "Customizable", color: "blue" },
                { title: "Skills", badge: "Weighted", color: "purple" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600"></p>
                  </div>
                  <span className={`px-3 py-1 bg-${item.color}-100 text-${item.color}-800 text-xs rounded-full`}>
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* CUSTOM SECTION INPUT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add Custom Sections (Optional)
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="e.g., Certifications, Projects, Publications"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
              <BuildingOffice2Icon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Company Registration</h1>
          <p className="mt-2 text-gray-600">
            Register your company to create CV templates and connect with mentors.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <StepIndicator />

          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                className={`ml-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 ${step === 1 ? 'w-full' : ''}`}
              >
                {step < 3 ? 'Continue' : 'Complete Registration'}
              </button>
            </div>
          </form>

          {/* FOOTER */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterCompany;
