import CourseNavbar from "./CourseNavbar";
import HeroSection from "./HeroSection";
import LearnSection from "./LearnSection";
import CourseModules from "./CourseModules";
import heroImg from "../src/assets/course-img.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-hidden relative">
      {/* Global Background Glows */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-teal-600/20 mix-blend-screen rounded-full filter blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-600/20 mix-blend-screen rounded-full filter blur-[150px] pointer-events-none z-0"></div>
      
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
