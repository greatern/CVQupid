// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/login';
import RegisterCompany from './pages/registerCompany';
import ExploreCareerPaths from './pages/exploreCareerPaths';
import ChatRoom from './pages/chatroom';
import CourseLibrary from "./pages/CourseLibrary";
import MentorMatching from "./pages/MentorMatching";
import { Header, Footer } from './components/Layout';

// DASHBOARDS
import CandidateDashboard from "./pages/dashboard/candidateDashboard";
import CompanyDashboard from "./pages/dashboard/companyDashboard";
import MentorDashboard from "./pages/dashboard/mentordashboard";

import CandidateProfile from './pages/profile/candidateProfile';
import PsychometricResults from './pages/profile/psychometricResults';
import BadgesPage from './pages/BadgesPage';
import MentorCandidateProfile from './pages/mentorCandidateprofile';
import CandidateList from './pages/candidateList';


export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/dashboard/candidate" element={<CandidateDashboard />} />
        <Route path="/dashboard/company" element={<CompanyDashboard />} />
        <Route path="/dashboard/mentor" element={<MentorDashboard />} />
        <Route path="/explore" element={<ExploreCareerPaths />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="*" element={<div style={{padding:40}}>Page not found</div>} />
        <Route path="/courses" element={<CourseLibrary />} />
        <Route path="/mentor-matching" element={<MentorMatching />} />
        <Route path="/candidate-profile" element={<CandidateProfile />} />
        <Route path="/psychometrics" element={<PsychometricResults />} />
        <Route path="/badge" element={<BadgesPage/>} />
        <Route path="/mentor-candidateprofile" element={<MentorCandidateProfile/>} />
        <Route path="/candidateList" element={<CandidateList/>} />
       </Routes>
      <Footer />
    </BrowserRouter>
  );
}
