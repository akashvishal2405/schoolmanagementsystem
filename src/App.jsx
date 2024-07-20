import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChooseUser from "./components/ChooseUser";
import AdminSigin from "./components/AdminSigin";
import StudentSigin from "./components/StudentSigin";
import TeacherSigin from "./components/TeacherSigin";

// Import of the dashboard
import AdminDashboard from "./pages/Admin/Dashboard";
import StudentDashboard from "./pages/Students/Dashboard";
import TeacherDashboard from "./pages/Teachers/Dashboard";

// Import of the admin sections
import Classes from "./pages/Admin/Classes";
import Exam from "./pages/Admin/Exam";
import Attendance from "./pages/Admin/Attendance";
import Performance from "./pages/Admin/Performance";
import Teachers from "./pages/Admin/Teachers";
import Students from "./pages/Admin/Students";
import Assigments from "./pages/Admin/Assignment";
import Library from "./pages/Admin/Library";
import EventCalender from "./pages/Admin/EventCalendar";
import SettingProfile from "./pages/Admin/SettingProfile";
import Announcement from "./pages/Admin/Announcement";

// Import of the students sections
import StudentAssignment from "./pages/Students/Assignment";
import ExamSection from "./pages/Students/Exams";
import PerformanceSection from "./pages/Students/Performance";
import AttendanceSection from "./pages/Students/Attendance";
import LibrarySection from "./pages/Students/Library";
import ProfileSection from "./pages/Students/Profile";
import AnnouncementSection from "./pages/Students/Announcement";

// Import of the teacher sections

import ClassesSection from "./pages/Teachers/Classes";
import StudentSection from "./pages/Teachers/Students";
import TeacherSection from "./pages/Teachers/Teachers";
import CheckPerformanceSection from "./pages/Teachers/Performance";
import EventsSection from "./pages/Teachers/Events";
import TeacherProfileSection from "./pages/Teachers/Profile";
import CheckAnnoucementSection from "./pages/Teachers/Annoucement";
import AssignmentsSection from "./pages/Teachers/Assignments";
import CheckAttendanceSection from "./pages/Teachers/Attendance";
import CheckExamSection from "./pages/Teachers/Exams";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-user" element={<ChooseUser />} />

          {/* All the sign-in pages routes */}

          <Route exact path="/admin-sigin" element={<AdminSigin />} />
          <Route exact path="/teacher-sigin" element={<TeacherSigin />} />
          <Route exact path="/student-sigin" element={<StudentSigin />} />
         
          {/* All the dashboard section routes */}
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} /> 
          <Route exact path="/student/dashboard" element={<StudentDashboard />} /> 
          <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} /> 

          {/* Admin sections here */}
          <Route exact path="/admin/classes" element={<Classes />} /> 
          <Route exact path="/admin/exams" element={<Exam />} /> 
          <Route exact path="/admin/attendance" element={<Attendance />} /> 
          <Route exact path="/admin/teachers" element={<Teachers />} /> 
          <Route exact path="/admin/students" element={<Students />} /> 
          <Route exact path="/admin/assigments" element={<Assigments />} /> 
          <Route exact path="/admin/library" element={<Library />} /> 
          <Route exact path="/admin/events" element={<EventCalender />} /> 
          <Route exact path="/admin/setingprofile" element={<SettingProfile />} /> 
          <Route exact path="/admin/communication" element={<Announcement />} /> 
          <Route exact path="/admin/performance" element={<Performance />} /> 

          {/* Student sections here */}

          <Route exact path="/student/assignments" element={<StudentAssignment />} /> 
          <Route exact path="/student/exams" element={<ExamSection />} /> 
          <Route exact path="/student/performance" element={<PerformanceSection />} /> 
          <Route exact path="/student/attendance" element={<AttendanceSection />} /> 
          <Route exact path="/student/library" element={<LibrarySection />} /> 
          <Route exact path="/student/profile" element={<ProfileSection />} /> 
          <Route exact path="/student/announcement" element={<AnnouncementSection />} /> 

          {/* Student sections here */}

          <Route exact path="/teacher/classes" element={<ClassesSection />} />
          <Route exact path="/teacher/students" element={<StudentSection />} />
          <Route exact path="/teacher/teachers" element={<TeacherSection />} />
          <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
          <Route exact path="/teacher/events" element={<EventsSection />} />
          <Route exact path="/teacher/profile" element={<TeacherProfileSection />} />
          <Route exact path="/teacher/assignments" element={<AssignmentsSection />} />
          <Route exact path="/teacher/annoucement" element={<CheckAnnoucementSection />} />
          <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
          <Route exact path="/teacher/exams" element={<CheckExamSection />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
