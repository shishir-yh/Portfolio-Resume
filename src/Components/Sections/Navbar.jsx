import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link import করুন
import logo from "../../assets/Profilepic/logo-shishir.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-12 h-10">
                        <img className="rounded" src={logo} alt="shishir logo" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-primary">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary">
                            About
                        </Link>
                        <Link to="/skills" className="text-gray-700 hover:text-primary">
                            Skills
                        </Link>
                        <Link to="/education" className="text-gray-700 hover:text-primary">
                            Education
                        </Link>
                        <Link to="/projects" className="text-gray-700 hover:text-primary">
                            Projects
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary">
                            Contact
                        </Link>
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
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-2 mt-2">
                            <Link to="/" className="text-gray-700 hover:text-primary">
                                Home
                            </Link>
                            <Link to="/about" className="text-gray-700 hover:text-primary">
                                About
                            </Link>
                            <Link to="/skills" className="text-gray-700 hover:text-primary">
                                Skills
                            </Link>
                            <Link to="/education" className="text-gray-700 hover:text-primary">
                                Education
                            </Link>
                            <Link to="/projects" className="text-gray-700 hover:text-primary">
                                Projects
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:text-primary">
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;



// import React, { useState } from "react";
// import logo from '../../assets/Profilepic/logo-shishir.jpg'

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 w-12 h-10 ">
//                         <img className="rounded" src={logo} alt="shishir logo" />
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex space-x-4">
//                         <a href="/" className="text-gray-700 hover:text-primary">
//                             Home
//                         </a>
//                         <a href="/about" className="text-gray-700 hover:text-primary">
//                             About
//                         </a>
//                         <a href="/services" className="text-gray-700 hover:text-primary">
//                             Services
//                         </a>
//                         <a href="/contact" className="text-gray-700 hover:text-primary">
//                             Contact
//                         </a>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={toggleMenu}
//                             className="text-gray-700 hover:text-primary focus:outline-none"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isOpen && (
//                     <div className="md:hidden">
//                         <div className="flex flex-col space-y-2 mt-2">
//                             <a href="/" className="text-gray-700 hover:text-primary">
//                                 Home
//                             </a>
//                             <a href="/about" className="text-gray-700 hover:text-primary">
//                                 About
//                             </a>
//                             <a
//                                 href="/services"
//                                 className="text-gray-700 hover:text-primary"
//                             >
//                                 Services
//                             </a>
//                             <a href="/contact" className="text-gray-700 hover:text-primary">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
