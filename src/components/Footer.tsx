import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const GradientText = ({ children, className }) => (
    <span
      className={`font-bold font-inter ${className}`}
      style={{
        background: "linear-gradient(90deg, #818CF8, #C084FC)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "about" },
    { name: "Competitions", path: "competitions" },
    { name: "Register", path: "register" },
    { name: "Contact", path: "contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/diuroboticsclub",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/diu_robotics_club/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/diuroboticsclub/?viewAsMember=true",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@diuroboticsclub6018",
      label: "YouTube",
    },
  ];

  return (
    <footer className="b border-t  bg-gradient-to-br from-black via-gray-900 to-blue-950 p-6 border-gray-700/50 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <div className="flex items-center">
                <img
                  src="./navlogocopy.png"
                  alt="RoboSpark logo"
                  className="h-10 w-auto object-contain mr-3"
                />

                <GradientText className="font-orbitron text-xl md:text-2xl">
                  RoboSpark
                </GradientText>
              </div>
            </h3>
            <p className="text-gray-400 mb-4">
              Igniting Innovation Through Technology & Competition
            </p>
            <p className="text-sm text-gray-500 leading-6">
              Organized by the DIU Robotics Club
              <br />
              In collaboration with the DIU Robotics Lab
              <br />
              Department of Software Engineering
              <br />
              Daffodil International University
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-indigo-400 mb-4 font-inter">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-indigo-400 mb-4 font-inter">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <Mail
                  size={18}
                  className="text-indigo-400 flex-shrink-0 mt-1"
                />
                <span>diurc@diu.edu.bd</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Phone
                  size={18}
                  className="text-indigo-400 flex-shrink-0 mt-1"
                />
                <span>+8801740-064708 </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  to={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700/50 text-gray-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            © {currentYear} RoboSpark. All rights reserved. | DIU Robotics Club
          </p>

          <p className="mt-1">
            Developed by{" "}
            <a
              href="https://kazinayeem.site"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Mohammad Ali Nayeem
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="flex flex-col font-inter">
      <Footer />
    </div>
  );
};

export default App;
