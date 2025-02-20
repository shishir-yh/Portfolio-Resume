import React from "react";
import { motion } from "framer-motion";

const fadeInFromSide = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const EducationTimeline = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
                >
                    Education
                </motion.h2>
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20%] md:left-[20%] w-1 h-full bg-primary"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {/* East West University */}
                        <motion.div
                            className="flex w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInFromSide}
                        >
                            <div className="w-[20%] pr-4 text-right relative">
                                <div className="w-4 h-4 bg-primary rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
                            </div>
                            <div className="w-[60%] pl-4">
                                <h3 className="text-2xl font-semibold text-primary">East West University</h3>
                                <p className="text-gray-700">A/2, Jahurul Islam City Gate, Dhaka.</p>
                                <p className="text-gray-700">B.Sc in Computer Science and Engineering, CGPA - 3.18</p>
                                <p className="text-gray-700">Year of passing: 2023</p>
                            </div>
                        </motion.div>

                        {/* HSC */}
                        <motion.div
                            className="flex w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInFromSide}
                        >
                            <div className="w-[20%] pr-4 text-right relative">
                                <div className="w-4 h-4 bg-primary rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
                            </div>
                            <div className="w-[80%] pl-4">
                                <h3 className="text-2xl font-semibold text-primary">Shyampur Govt. Model School and College</h3>
                                <p className="text-gray-700">Shyampur, Dhaka-1204</p>
                                <p className="text-gray-700">HSC (Science), Dhaka Board, GPA - 4.58</p>
                            </div>
                        </motion.div>

                        {/* SSC */}
                        <motion.div
                            className="flex w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInFromSide}
                        >
                            <div className="w-[20%] pr-4 text-right relative">
                                <div className="w-4 h-4 bg-primary rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
                            </div>
                            <div className="w-[80%] pl-4">
                                <h3 className="text-2xl font-semibold text-primary">Shyampur Govt. Model School and College</h3>
                                <p className="text-gray-700">Shyampur, Dhaka-1204</p>
                                <p className="text-gray-700">SSC (Science), Dhaka Board, GPA - 5</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationTimeline;


// import React from "react";

// const EducationTimeline = () => {
//     return (
//         <section className="py-16 bg-base-100">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
//                     Education
//                 </h2>

//                 <div className="relative">

//                     {/* Vertical Line */}
//                     <div className="absolute left-4 md:left-1/2 w-1 h-full bg-primary transform md:-translate-x-1/2"></div>

//                     {/* Timeline Items */}
//                     <div className="space-y-8">
//                         {/* East West University */}
//                         <div className="flex flex-col md:flex-row items-center w-full">

//                             <div className="w-full md:w-1/2 md:pr-8 md:text-right">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     East West University
//                                 </h3>

//                                 <p className="text-gray-700">
//                                     A/2, Jahurul Islam City Gate, 1212 Aftab Nagar Main Road, Dhaka.
//                                 </p>
//                                 <p className="text-gray-700">
//                                     B.Sc in Computer Science and Engineering, CGPA - 3.18 on a scale of 4.
//                                 </p>
//                                 <p className="text-gray-700">Year of passing: 2023</p>
//                             </div>
//                             <div className="w-full md:w-1/2 md:pl-8">
//                                 {/* Arrow */}
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Shyampur Govt. Model School and College - HSC */}
//                         <div className="flex flex-col md:flex-row items-center w-full">
//                             <div className="w-full md:w-1/2 md:pr-8 md:text-right">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     Shyampur Govt. Model School and College
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     Shyampur, Dhaka-1204
//                                 </p>
//                                 <p className="text-gray-700">
//                                     HSC (Science group), Dhaka Board, GPA - 4.58 on a scale of 5.
//                                 </p>
//                             </div>
//                             <div className="w-full md:w-1/2 md:pl-8">
//                                 {/* Arrow */}
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Shyampur Govt. Model School and College - SSC */}
//                         <div className="flex flex-col md:flex-row items-center w-full">
//                             <div className="w-full md:w-1/2 md:pr-8 md:text-right">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     Shyampur Govt. Model School and College
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     Shyampur, Dhaka-1204
//                                 </p>
//                                 <p className="text-gray-700">
//                                     SSC (Science group), Dhaka Board, GPA - 5 on a scale of 5.
//                                 </p>
//                             </div>
//                             <div className="w-full md:w-1/2 md:pl-8">
//                                 {/* Arrow */}
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default EducationTimeline;




// import React from "react";

// const EducationTimeline = () => {
//     return (
//         <section className="py-16 bg-base-100">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
//                     Education
//                 </h2>
//                 <div className="relative">
//                     {/* Vertical Line */}
//                     <div className="absolute left-1/2 w-1 h-full bg-primary transform -translate-x-1/2"></div>

//                     {/* Timeline Items */}
//                     <div className="space-y-8">
//                         {/* East West University */}
//                         <div className="flex items-center w-full">
//                             <div className="w-1/2 pr-8 text-right">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     East West University
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     A/2, Jahurul Islam City Gate, 1212 Aftab Nagar Main Road, Dhaka.
//                                 </p>
//                                 <p className="text-gray-700">
//                                     B.Sc in Computer Science and Engineering, CGPA - 3.18 on a scale of 4.
//                                 </p>
//                                 <p className="text-gray-700">Year of passing: 2023</p>
//                             </div>
//                             <div className="w-1/2 pl-8">
//                                 {/* Arrow */}
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Shyampur Govt. Model School and College - HSC */}
//                         <div className="flex items-center w-full">
//                             <div className="w-1/2 pr-8 text-right">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     Shyampur Govt. Model School and College
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     Shyampur, Dhaka-1204
//                                 </p>
//                                 <p className="text-gray-700">
//                                     HSC (Science group), Dhaka Board, GPA - 4.58 on a scale of 5.
//                                 </p>
//                             </div>
//                             <div className="w-1/2 pl-8">
//                                 {/* Arrow */}
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Shyampur Govt. Model School and College - SSC */}
//                         <div className="flex items-center w-full">
//                             <div className="w-1/2 pr-8 text-right">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     Shyampur Govt. Model School and College
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     Shyampur, Dhaka-1204
//                                 </p>
//                                 <p className="text-gray-700">
//                                     SSC (Science group), Dhaka Board, GPA - 5 on a scale of 5.
//                                 </p>
//                             </div>
//                             <div className="w-1/2 pl-8">
//                                 {/* Arrow */}
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default EducationTimeline;


// import React from "react";

// const EducationTimeline = () => {
//     return (
//         <section className="py-16 bg-base-100">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
//                     Education
//                 </h2>
//                 <div className="relative">
//                     {/* Vertical Line */}
//                     <div className="absolute left-[20%] md:left-[20%] w-1 h-full bg-primary"></div>

//                     {/* Timeline Items */}
//                     <div className="space-y-8">
//                         {/* East West University */}
//                         <div className="flex w-full">
//                             {/* Left Side (20%) */}
//                             <div className="w-[20%] pr-4 text-right">
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-primary absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                             {/* Right Side (80%) */}
//                             <div className="w-[60%] pl-4">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     East West University
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     A/2, Jahurul Islam City Gate, 1212 Aftab Nagar Main Road, Dhaka.
//                                 </p>
//                                 <p className="text-gray-700">
//                                     B.Sc in Computer Science and Engineering, CGPA - 3.18 on a scale of 4.
//                                 </p>
//                                 <p className="text-gray-700">Year of passing: 2023</p>
//                             </div>
//                         </div>

//                         {/* Shyampur Govt. Model School and College - HSC */}
//                         <div className="flex w-full">
//                             {/* Left Side (20%) */}
//                             <div className="w-[20%] pr-4 text-right">
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-primary absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                             {/* Right Side (80%) */}
//                             <div className="w-[80%] pl-4">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     Shyampur Govt. Model School and College
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     Shyampur, Dhaka-1204
//                                 </p>
//                                 <p className="text-gray-700">
//                                     HSC (Science group), Dhaka Board, GPA - 4.58 on a scale of 5.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Shyampur Govt. Model School and College - SSC */}
//                         <div className="flex w-full">
//                             {/* Left Side (20%) */}
//                             <div className="w-[20%] pr-4 text-right">
//                                 <div className="relative">
//                                     <div className="w-4 h-4 bg-primary rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
//                                     <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-primary absolute -right-2 top-1/2 transform -translate-y-1/2"></div>
//                                 </div>
//                             </div>
//                             {/* Right Side (80%) */}
//                             <div className="w-[80%] pl-4">
//                                 <h3 className="text-2xl font-semibold text-primary">
//                                     Shyampur Govt. Model School and College
//                                 </h3>
//                                 <p className="text-gray-700">
//                                     Shyampur, Dhaka-1204
//                                 </p>
//                                 <p className="text-gray-700">
//                                     SSC (Science group), Dhaka Board, GPA - 5 on a scale of 5.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default EducationTimeline;



// // import React from "react";

// // const EducationTimeline = () => {
// //     return (
// //         <section className="py-16 bg-base-100">
// //             <div className="container mx-auto px-4">
// //                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
// //                     Education
// //                 </h2>

// //                 <div className="relative">

// //                     {/* Vertical Line */}
// //                     <div className="absolute left-4 md:left-1/2 w-1 h-full bg-primary transform md:-translate-x-1/2"></div>

// //                     {/* Timeline Items */}
// //                     <div className="space-y-8">
// //                         {/* East West University */}
// //                         <div className="flex flex-col md:flex-row items-center w-full">

// //                             <div className="w-full md:w-1/2 md:pr-8 md:text-right">
// //                                 <h3 className="text-2xl font-semibold text-primary">
// //                                     East West University
// //                                 </h3>

// //                                 <p className="text-gray-700">
// //                                     A/2, Jahurul Islam City Gate, 1212 Aftab Nagar Main Road, Dhaka.
// //                                 </p>
// //                                 <p className="text-gray-700">
// //                                     B.Sc in Computer Science and Engineering, CGPA - 3.18 on a scale of 4.
// //                                 </p>
// //                                 <p className="text-gray-700">Year of passing: 2023</p>
// //                             </div>
// //                             <div className="w-full md:w-1/2 md:pl-8">
// //                                 {/* Arrow */}
// //                                 <div className="relative">
// //                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Shyampur Govt. Model School and College - HSC */}
// //                         <div className="flex flex-col md:flex-row items-center w-full">
// //                             <div className="w-full md:w-1/2 md:pr-8 md:text-right">
// //                                 <h3 className="text-2xl font-semibold text-primary">
// //                                     Shyampur Govt. Model School and College
// //                                 </h3>
// //                                 <p className="text-gray-700">
// //                                     Shyampur, Dhaka-1204
// //                                 </p>
// //                                 <p className="text-gray-700">
// //                                     HSC (Science group), Dhaka Board, GPA - 4.58 on a scale of 5.
// //                                 </p>
// //                             </div>
// //                             <div className="w-full md:w-1/2 md:pl-8">
// //                                 {/* Arrow */}
// //                                 <div className="relative">
// //                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Shyampur Govt. Model School and College - SSC */}
// //                         <div className="flex flex-col md:flex-row items-center w-full">
// //                             <div className="w-full md:w-1/2 md:pr-8 md:text-right">
// //                                 <h3 className="text-2xl font-semibold text-primary">
// //                                     Shyampur Govt. Model School and College
// //                                 </h3>
// //                                 <p className="text-gray-700">
// //                                     Shyampur, Dhaka-1204
// //                                 </p>
// //                                 <p className="text-gray-700">
// //                                     SSC (Science group), Dhaka Board, GPA - 5 on a scale of 5.
// //                                 </p>
// //                             </div>
// //                             <div className="w-full md:w-1/2 md:pl-8">
// //                                 {/* Arrow */}
// //                                 <div className="relative">
// //                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default EducationTimeline;




// // import React from "react";

// // const EducationTimeline = () => {
// //     return (
// //         <section className="py-16 bg-base-100">
// //             <div className="container mx-auto px-4">
// //                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
// //                     Education
// //                 </h2>
// //                 <div className="relative">
// //                     {/* Vertical Line */}
// //                     <div className="absolute left-1/2 w-1 h-full bg-primary transform -translate-x-1/2"></div>

// //                     {/* Timeline Items */}
// //                     <div className="space-y-8">
// //                         {/* East West University */}
// //                         <div className="flex items-center w-full">
// //                             <div className="w-1/2 pr-8 text-right">
// //                                 <h3 className="text-2xl font-semibold text-primary">
// //                                     East West University
// //                                 </h3>
// //                                 <p className="text-gray-700">
// //                                     A/2, Jahurul Islam City Gate, 1212 Aftab Nagar Main Road, Dhaka.
// //                                 </p>
// //                                 <p className="text-gray-700">
// //                                     B.Sc in Computer Science and Engineering, CGPA - 3.18 on a scale of 4.
// //                                 </p>
// //                                 <p className="text-gray-700">Year of passing: 2023</p>
// //                             </div>
// //                             <div className="w-1/2 pl-8">
// //                                 {/* Arrow */}
// //                                 <div className="relative">
// //                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Shyampur Govt. Model School and College - HSC */}
// //                         <div className="flex items-center w-full">
// //                             <div className="w-1/2 pr-8 text-right">
// //                                 <h3 className="text-2xl font-semibold text-primary">
// //                                     Shyampur Govt. Model School and College
// //                                 </h3>
// //                                 <p className="text-gray-700">
// //                                     Shyampur, Dhaka-1204
// //                                 </p>
// //                                 <p className="text-gray-700">
// //                                     HSC (Science group), Dhaka Board, GPA - 4.58 on a scale of 5.
// //                                 </p>
// //                             </div>
// //                             <div className="w-1/2 pl-8">
// //                                 {/* Arrow */}
// //                                 <div className="relative">
// //                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Shyampur Govt. Model School and College - SSC */}
// //                         <div className="flex items-center w-full">
// //                             <div className="w-1/2 pr-8 text-right">
// //                                 <h3 className="text-2xl font-semibold text-primary">
// //                                     Shyampur Govt. Model School and College
// //                                 </h3>
// //                                 <p className="text-gray-700">
// //                                     Shyampur, Dhaka-1204
// //                                 </p>
// //                                 <p className="text-gray-700">
// //                                     SSC (Science group), Dhaka Board, GPA - 5 on a scale of 5.
// //                                 </p>
// //                             </div>
// //                             <div className="w-1/2 pl-8">
// //                                 {/* Arrow */}
// //                                 <div className="relative">
// //                                     <div className="w-4 h-4 bg-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                     <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary absolute -left-2 top-1/2 transform -translate-y-1/2"></div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default EducationTimeline;