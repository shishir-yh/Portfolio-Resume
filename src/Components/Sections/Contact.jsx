

import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ex5srnd",
            "template_wpm960j",
            form.current,
            "tg45P-oaHwN4scBKm"

        )

            .then(
                (result) => {
                    console.log("Success:", result.text);
                    Swal.fire({
                        title: "Success!",
                        text: "Your email has been sent successfully!",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                    e.target.reset();

                },
                (error) => {
                    console.error("Error:", error);
                    alert("Failed to send email. Please try again.");
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to send email. Please try again.",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                }
            );

        e.target.reset();
    };


    return (
        <div className="bg-gray-50">
            <div className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl border border-gray-200">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
                >
                    Get in Touch
                </motion.h2>

                {/* Contact Options */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Send Me an Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl text-gray-900 font-semibold mb-4">Send Me an Email</h3>

                        <form ref={form} onSubmit={sendEmail}>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                className="w-full text-gray-900 p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                className="w-full text-gray-900 p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="w-full text-gray-900 p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
                                rows="4"
                                required
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                                Send Email
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact With Me */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="border p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <FaLinkedin className="text-blue-700 text-2xl" />
                                <a href="https://www.linkedin.com/in/yeasir-hossain-shishir-131488329/" target="_blank" className="text-blue-700 font-medium hover:underline">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaFacebook className="text-blue-600 text-2xl" />
                                <a href="https://www.facebook.com/y.h.shishir" target="_blank" className="text-blue-600 font-medium hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaWhatsapp className="text-green-500 text-2xl" />
                                <a href="https://wa.me/01686213461" target="_blank" className="text-green-500 font-medium hover:underline">
                                    WhatsApp: 01686213461
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Contact() {
//     return (

//         <div className="bg-gray-50">
//             <div className="w-full max-w-3xl mx-auto  bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl border border-gray-200">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 mt-12">Get in Touch</h2>

//                 {/* Contact Options */}
//                 <div className="grid md:grid-cols-2 gap-12">
//                     {/* Send Me an Email */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="border p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
//                         <h3 className="text-xl text-gray-900 font-semibold mb-4">Send Me an Email</h3>

//                         <form action="mailto:your-email@example.com" method="POST" encType="text/plain">
//                             <input
//                                 type="text"
//                                 placeholder="Your Name"
//                                 className="w-full text-gray-900 p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Your Email"
//                                 className="w-full text-gray-900 p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
//                                 required
//                             />
//                             <textarea
//                                 placeholder="Your Message"
//                                 className="w-full text-gray-900 p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
//                                 rows="4"
//                                 required
//                             />
//                             <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
//                                 Send Email
//                             </button>
//                         </form>
//                     </motion.div>

//                     {/* Contact With Me */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                         className="border p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
//                         <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h3>
//                         {/* <ul className="space-y-4"> */}
//                             <li className="flex items-center space-x-3">
//                                 <FaLinkedin className="text-blue-700 text-2xl" />
//                                 <a href="https://www.linkedin.com/in/yeasir-hossain-shishir-131488329/" target="_blank" className="text-blue-700 font-medium hover:underline">
//                                     LinkedIn
//                                 </a>
//                             </li>
//                             <li className="flex items-center space-x-3">
//                                 <FaFacebook className="text-blue-600 text-2xl" />
//                                 <a href="https://www.facebook.com/y.h.shishir" target="_blank" className="text-blue-600 font-medium hover:underline">
//                                     Facebook
//                                 </a>
//                             </li>
//                             <li className="flex items-center space-x-3">
//                                 <FaWhatsapp className="text-green-500 text-2xl" />
//                                 <a href="https://wa.me/01686213461" target="_blank" className="text-green-500 font-medium hover:underline">
//                                     WhatsApp: 01686213461
//                                 </a>
//                             </li>
//                         </ul>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// }