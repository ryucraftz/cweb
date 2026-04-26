import CourseNavbar from "./CourseNavbar";
import HeroSection from "./HeroSection";
import LearnSection from "./LearnSection";
import CourseModules from "./CourseModules";
import heroImg from "../src/assets/course-img.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 font-sans overflow-hidden relative">
      {/* Global Background Glows */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 mix-blend-multiply rounded-full filter blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-500/10 mix-blend-multiply rounded-full filter blur-[150px] pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <CourseNavbar />
        <HeroSection heroImg={heroImg} />
        <LearnSection />
        <CourseModules />
      </div>
    </div>
  );
};

export default Dashboard;
