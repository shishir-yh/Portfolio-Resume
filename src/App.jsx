import { useState, useEffect } from "react";
import "./App.css";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import Designation from "./Components/Sections/Designation";
import About from "./Components/Sections/About";
import SkillsSection from "./Components/Sections/SkillsSection";
import EducationTimeline from "./Components/Sections/EducationTimeline";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";
import logo from "./assets/Profilepic/logo-shishir.jpg";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 🔹 যখন লিঙ্ক ক্লিক হবে, তখন সেই সেকশনে স্ক্রল করবে
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {!isLoaded && <LoadingScreen />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      >

        {/* Navbar Start */}
        <nav className="sticky top-0 z-50 bg-base-100 shadow-md bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 w-12 h-10">
                <img className="rounded" src={logo} alt="shishir logo" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4">
                <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary">
                  Home
                </button>
                <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary">
                  About
                </button>
                <button onClick={() => scrollToSection("skills")} className="text-gray-700 hover:text-primary">
                  Skills
                </button>
                <button onClick={() => scrollToSection("education")} className="text-gray-700 hover:text-primary">
                  Education
                </button>
                <button onClick={() => scrollToSection("projects")} className="text-gray-700 hover:text-primary">
                  Projects
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary">
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-primary focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden">
                <div className="flex flex-col space-y-2 mt-2">
                  <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary">
                    Home
                  </button>
                  <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary">
                    About
                  </button>
                  <button onClick={() => scrollToSection("skills")} className="text-gray-700 hover:text-primary">
                    Skills
                  </button>
                  <button onClick={() => scrollToSection("education")} className="text-gray-700 hover:text-primary">
                    Education
                  </button>
                  <button onClick={() => scrollToSection("projects")} className="text-gray-700 hover:text-primary">
                    Projects
                  </button>
                  <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary">
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* Navbar End */}

        {/* Sections with IDs */}
        <div id="home"><Designation /></div>
        <div id="about"><About /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="education"><EducationTimeline /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>

        <Footer />
      </div>
    </div>
  );
}

export default App;



// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import "./App.css";
// import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
// import Designation from "./Components/Sections/Designation";
// import About from "./Components/Sections/About";
// import SkillsSection from "./Components/Sections/SkillsSection";
// import EducationTimeline from "./Components/Sections/EducationTimeline";
// import Projects from "./Components/Sections/Projects";
// import Contact from "./Components/Sections/Contact";
// import Footer from "./Components/Sections/Footer";
// import logo from "./assets/Profilepic/logo-shishir.jpg";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 2000); // 2 সেকেন্ড পর লোডিং শেষ হবে
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Router>
//       <div className="max-w-screen-xl mx-auto">
//         {!isLoaded && <LoadingScreen />}
//         <div
//           className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
//             } bg-black text-gray-100`}
//         >
//           {/* Navbar Start */}
//           <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex items-center justify-between h-16">
//                 {/* Logo */}
//                 <div className="flex-shrink-0 w-12 h-10">
//                   <img className="rounded" src={logo} alt="shishir logo" />
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex space-x-4">
//                   <Link to="/" className="text-gray-700 hover:text-primary">
//                     Home
//                   </Link>
//                   <Link to="/about" className="text-gray-700 hover:text-primary">
//                     About
//                   </Link>
//                   <Link to="/skills" className="text-gray-700 hover:text-primary">
//                     Skills
//                   </Link>
//                   <Link to="/education" className="text-gray-700 hover:text-primary">
//                     Education
//                   </Link>
//                   <Link to="/projects" className="text-gray-700 hover:text-primary">
//                     Projects
//                   </Link>
//                   <Link to="/contact" className="text-gray-700 hover:text-primary">
//                     Contact
//                   </Link>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden">
//                   <button
//                     onClick={toggleMenu}
//                     className="text-gray-700 hover:text-primary focus:outline-none"
//                   >
//                     <svg
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       {isOpen ? (
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       ) : (
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M4 6h16M4 12h16m-7 6h7"
//                         />
//                       )}
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Mobile Menu */}
//               {isOpen && (
//                 <div className="md:hidden">
//                   <div className="flex flex-col space-y-2 mt-2">
//                     <Link to="/" className="text-gray-700 hover:text-primary">
//                       Home
//                     </Link>
//                     <Link to="/about" className="text-gray-700 hover:text-primary">
//                       About
//                     </Link>
//                     <Link to="/skills" className="text-gray-700 hover:text-primary">
//                       Skills
//                     </Link>
//                     <Link to="/education" className="text-gray-700 hover:text-primary">
//                       Education
//                     </Link>
//                     <Link to="/projects" className="text-gray-700 hover:text-primary">
//                       Projects
//                     </Link>
//                     <Link to="/contact" className="text-gray-700 hover:text-primary">
//                       Contact
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </nav>
//           {/* Navbar End */}

//           <Designation />
//           <About />
//           <SkillsSection />
//           <EducationTimeline />
//           <Projects />
//           <Contact />
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;















// // import { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import "./App.css";
// // import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
// // import Navbar from "./Components/Sections/Navbar";
// // import Designation from "./Components/Sections/Designation";
// // import About from "./Components/Sections/About";
// // import SkillsSection from "./Components/Sections/SkillsSection";
// // import EducationTimeline from "./Components/Sections/EducationTimeline";
// // import Projects from "./Components/Sections/Projects";
// // import Contact from "./Components/Sections/Contact";
// // import Footer from "./Components/Sections/Footer";

// // function App() {
// //   const [isLoaded, setIsLoaded] = useState(false);

// //   return (
// //     <Router>
// //       <div className="max-w-screen-xl mx-auto">
// //         {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
// //         <div
// //           className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
// //             } bg-black text-gray-100`}
// //         >
// //           <Navbar />
// //           {/* <Routes>
// //             // <Route path="/" element={<Designation />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/skills" element={<SkillsSection />} />
// //             <Route path="/education" element={<EducationTimeline />} />
// //             <Route path="/projects" element={<Projects />} />
// //             <Route path="/contact" element={<Contact />} />
// //           </Routes> */}
// //           <Designation></Designation>
// //           <About></About>
// //           <SkillsSection></SkillsSection>
// //           <EducationTimeline></EducationTimeline>
// //           <Projects></Projects>
// //           <Contact></Contact>
// //           <Footer />
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// // // import { useState } from 'react'
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import './App.css'
// // // import LoadingScreen from './Components/LoadingScreen/LoadingScreen'
// // // import Navbar from './Components/Sections/Navbar';
// // // import Designation from './Components/Sections/Designation';
// // // import About from './Components/Sections/About';
// // // import SkillsSection from './Components/Sections/SkillsSection';
// // // import EducationTimeline from './Components/Sections/EducationTimeline';
// // // import Projects from './Components/Sections/Projects';
// // // import Contact from './Components/Sections/Contact';
// // // import Footer from './Components/Sections/Footer';

// // // function App() {

// // //   const [isLoaded, setIsLoaded] = useState(false);
// // //   return (
// // //     <>
// // //       <div className='max-w-screen-xl mx-auto'>
// // //         {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
// // //         <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
// // //           } bg-black text-gray-100`}>
// // // <Navbar></Navbar>
// // // <Designation></Designation>
// // // <About></About>
// // // <SkillsSection></SkillsSection>
// // // <EducationTimeline></EducationTimeline>
// // // <Projects></Projects>
// // // <Contact></Contact>
// // // <Footer></Footer>
// // //         </div>

// // //       </div>
// // //     </>
// // //   )
// // // }

// // // export default App
