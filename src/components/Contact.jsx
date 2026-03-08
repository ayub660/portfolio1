import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [focused, setFocused] = useState(null);
  const [isSending, setIsSending] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        toast.success('Message sent successfully! 🚀');
        setFormData({ user_name: "", user_email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        toast.error('Something went wrong. Please try again.');
        console.error("EmailJS Error:", error);
        setIsSending(false);
      });
  };

  const contactInfo = [
    { icon: MapPin, label: "Dhaka, Bangladesh", sub: "Location", href: "#" },
    { icon: Mail, label: "md.ayub0070@gmail.com", sub: "Email Me", href: "mailto:md.ayub0070@gmail.com" },
    { icon: Phone, label: "+8801701000467", sub: "Call Me", href: "tel:+8801701000467" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ayub660", color: "hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-12 relative overflow-hidden bg-background-light dark:bg-[#0a0a0a]">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Get in touch</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 text-text-main-light dark:text-white">
            Contact <span className="text-orange-500">M</span><span className="text-blue-400">e</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left Side: Info Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white/5 dark:bg-gray-800/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gray-200 dark:border-gray-700/50 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-text-main-light dark:text-white">
                Let's talk about <br /><span className="text-blue-400 italic">everything!</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-sm">
                I'm currently available for freelance work or full-time positions. Let's build something amazing together!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 group/item"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gray-500/10 flex items-center justify-center text-primary border border-gray-200 dark:border-gray-700 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-orange-500 mb-0.5">{item.sub}</p>
                      <span className="text-text-main-light dark:text-gray-200 font-medium">{item.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-gray-500">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-11 h-11 rounded-xl bg-gray-500/10 flex items-center justify-center text-gray-400 ${social.color} border border-gray-200 dark:border-gray-700 transition-all`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form Glass Card */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 dark:bg-gray-800/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-gray-200 dark:border-gray-700/50 shadow-2xl space-y-6 flex flex-col justify-center"
            onSubmit={sendEmail}
          >
            {/* Name Input */}
            <div className="relative group">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${focused === "user_name" || formData.user_name ? "-top-3 text-xs text-primary bg-white dark:bg-[#1a1a1a] px-2 rounded-md" : "top-4 text-gray-500"}`}>Name</label>
              <input
                required
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                onFocus={() => setFocused("user_name")}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent border-2 border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-4 text-text-main-light dark:text-white focus:border-primary focus:outline-none transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${focused === "user_email" || formData.user_email ? "-top-3 text-xs text-primary bg-white dark:bg-[#1a1a1a] px-2 rounded-md" : "top-4 text-gray-500"}`}>Email</label>
              <input
                required
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                onFocus={() => setFocused("user_email")}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent border-2 border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-4 text-text-main-light dark:text-white focus:border-primary focus:outline-none transition-all"
              />
            </div>

            {/* Message Input */}
            <div className="relative group">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${focused === "message" || formData.message ? "-top-3 text-xs text-primary bg-white dark:bg-[#1a1a1a] px-2 rounded-md" : "top-4 text-gray-500"}`}>Message</label>
              <textarea
                required
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent border-2 border-gray-100 dark:border-gray-700 rounded-2xl px-4 pt-4 pb-2 text-text-main-light dark:text-white focus:border-primary focus:outline-none transition-all resize-none"
              />
            </div>

            <motion.button
              disabled={isSending}
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/20 transition-all duration-300 ${isSending ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSending ? (
                "Sending..."
              ) : (
                <> <Send size={18} /> Send Message </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;