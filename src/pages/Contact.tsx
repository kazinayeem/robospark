import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Loader2,
} from "lucide-react";
import { SponsorSection } from "@/components/Sponsor";

const CustomStyles = () => (
  <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

      .font-orbitron {
        font-family: 'Orbitron', sans-serif;
      }
      .text-primary-neon {
        color: #8b5cf6;
      }
      .text-secondary-neon {
        color: #38bdf8;
      }
      .gradient-text {
        background: linear-gradient(90deg, #a78bfa, #38bdf8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 15px rgba(167, 139, 250, 0.7);
      }
      .neon-card-base {
        background: rgba(18, 24, 47, 0.45);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(139, 92, 246, 0.2);
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.1);
      }
      .neon-border {
        box-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
      }
      .hover\\:glow-border:hover {
        border-color: rgba(56, 189, 248, 0.7);
        box-shadow: 0 0 25px rgba(56, 189, 248, 0.5);
      }
      .neon-input {
        background-color: rgba(30, 41, 59, 0.6);
        border: 1px solid #4f46e5;
        color: #e5e7eb;
        transition: border-color 0.3s, box-shadow 0.3s;
      }
      .neon-input:focus {
        outline: none;
        border-color: #38bdf8;
        box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.5);
      }
    `}</style>
);

const NeonInput = (props) => (
  <input
    {...props}
    className={`w-full p-3 rounded-lg neon-input mt-1 ${props.className}`}
  />
);

const NeonTextarea = (props) => (
  <textarea
    {...props}
    className={`w-full p-3 rounded-lg neon-input mt-1 ${props.className}`}
  />
);

const NeonLabel = (props) => (
  <label
    {...props}
    className={`block text-sm font-medium mb-1 text-indigo-300 ${props.className}`}
  />
);

const NeonButton = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`
        p-3 rounded-lg font-orbitron font-semibold transition-all duration-300 
        flex items-center justify-center space-x-2
        bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800
        shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/70
        disabled:opacity-50 disabled:shadow-none ${className}
    `}
  >
    {children}
  </button>
);

const ToastContainer = ({ message, type }) => {
  if (!message) return null;

  const baseStyle =
    "fixed bottom-4 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-2xl z-50 max-w-sm w-full text-center font-semibold transition-all duration-300";
  const successStyle = "bg-green-600 text-white shadow-green-500/50";
  const errorStyle = "bg-red-600 text-white shadow-red-500/50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`${baseStyle} ${
        type === "success" ? successStyle : errorStyle
      }`}
    >
      {message}
    </motion.div>
  );
};

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      showNotification("Error: Please fill in all fields.", "error");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification("Error: Invalid email format.", "error");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      showNotification("Message sent successfully!", "success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Transmission Link",
      content: "diurc@diu.edu.bd",
      href: "mailto:diurc@diu.edu.bd",
    },
    {
      icon: <Phone size={24} />,
      title: "Direct Comm",
      content: "+8801740-064708",
      href: "tel:+8801740-064708",
    },
    {
      icon: <MapPin size={24} />,
      title: "Coordinates",
      content: "Daffodil International University (Permanent Campus)",
      href: "https://maps.app.goo.gl/HM2X9FvSLdPxFfM58",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={24} />,
      label: "Facebook Nexus",
      href: "https://www.facebook.com/diuroboticsclub",
    },
    {
      icon: <Instagram size={24} />,
      label: "Instagram Feed",
      href: "https://www.instagram.com/diu_robotics_club/",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn Grid",
      href: "https://www.linkedin.com/company/diuroboticsclub/?viewAsMember=true",
    },
    {
      icon: <Youtube size={24} />,
      label: "YouTube Archive",
      href: "https://www.youtube.com/@diuroboticsclub6018",
    },
  ];

  return (
    <>
      <CustomStyles />

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-900 to-black text-gray-100 pb-16">
        <ToastContainer
          message={notification.message}
          type={notification.type}
        />

        {/* HERO */}
        <section className="pt-32 pb-16">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-orbitron font-extrabold gradient-text uppercase">
              Contact
            </h1>
            <p className="text-xl md:text-2xl text-indigo-300 mt-4">
              Establish direct link with the RoboSpark Command Center
            </p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-card-base rounded-xl p-6 text-center hover:glow-border transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-secondary-neon mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-primary-neon">
                  {info.title}
                </h3>
                <p className="text-gray-300 mt-2">{info.content}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CONTACT FORM + MAP + SOCIAL */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-orbitron font-bold mb-6 gradient-text">
                Initiate Secure Transmission
              </h2>

              <form
                onSubmit={handleSubmit}
                className="neon-card-base neon-border p-6 rounded-xl space-y-6"
              >
                <div>
                  <NeonLabel>Your Name / Designation</NeonLabel>
                  <NeonInput
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <NeonLabel>Encrypted Email Address</NeonLabel>
                  <NeonInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <NeonLabel>Message Payload (Max 500 characters)</NeonLabel>
                  <NeonTextarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={500}
                  />
                </div>

                <NeonButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Transmitting...
                    </>
                  ) : (
                    <>
                      <Send /> Send Message
                    </>
                  )}
                </NeonButton>
              </form>
            </motion.div>

            {/* MAP + SOCIAL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              {/* MAP FIXED HERE */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-secondary-neon mb-3">
                  Locate Nexus Point
                </h2>

                <div className="neon-card-base neon-border rounded-xl overflow-hidden shadow-2xl h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58373.739359028805!2d90.24394154863282!3d23.8768956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1763224125093!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DIU Location"
                  />
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div>
                <h3 className="text-2xl font-orbitron text-primary-neon mb-4">
                  Social Matrix Interlink
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      whileHover={{ scale: 1.25, rotate: 5 }}
                      className="w-14 h-14 rounded-full bg-indigo-700/40 flex items-center justify-center hover:bg-secondary-neon hover:text-black transition-all shadow-xl"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SponsorSection />
      </div>
    </>
  );
};

export default App;
