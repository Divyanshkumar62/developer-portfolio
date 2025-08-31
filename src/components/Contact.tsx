import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Sparkles,
  Loader2
} from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
    company: '' // honeypot field
  });
  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      user_name: '',
      user_email: '',
      message: ''
    };

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const isFormValid = formData.user_name.trim() && 
                     formData.user_email.trim() && 
                     validateEmail(formData.user_email) && 
                     formData.message.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (loading) return;
    
    // Check honeypot
    if (formData.company) {
      toast.error('Spam detected. Submission blocked.');
      return;
    }

    if (!validateForm()) {
      toast.error('Please fix the errors below');
      return;
    }

    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_4rkbl8m",
        "template_smwo4n9",
        form.current,
        "jYLYO9TNWMbPQSRfV"
      )
      .then(
        () => {
          setLoading(false);
          toast.success('✨ Message sent successfully! I\'ll get back to you soon.', {
            duration: 3000,
            position: 'top-center',
          });
          setFormData({ user_name: '', user_email: '', message: '', company: '' });
          form.current?.reset();
        },
        (err) => {
          setLoading(false);
          toast.error('❌ Failed to send message. Please try again.', {
            duration: 3000,
            position: 'top-center',
          });
          console.error("EmailJS Error:", err);
        }
      );
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/Divyanshkumar62/",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/divyansh-1-kumar/",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      href: "https://twitter.com/divyansh",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:kumardivyansh62@gmail.com",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20 relative overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-4"
          >
            Let's Build Something Amazing Together
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-48 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mx-auto mb-8 relative"
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Feel free to reach out for collaborations, projects, or just a friendly chat.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900/30 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-500 relative overflow-hidden">
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
              
              <div className="relative z-10">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                      }}
                      transition={{ duration: 0.2 }}
                      className={`w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-gray-800/70 transition-all duration-300 ${
                        errors.user_name ? 'border-red-400/50 focus:border-red-400' : 'border-gray-600/30 focus:border-cyan-400 focus:shadow-cyan-400/20'
                      }`}
                      placeholder="Your Name"
                    />
                    <AnimatePresence>
                      {errors.user_name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-400 text-sm mt-2 ml-2"
                        >
                          {errors.user_name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                      }}
                      transition={{ duration: 0.2 }}
                      className={`w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-gray-800/70 transition-all duration-300 ${
                        errors.user_email ? 'border-red-400/50 focus:border-red-400' : 'border-gray-600/30 focus:border-cyan-400 focus:shadow-cyan-400/20'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    <AnimatePresence>
                      {errors.user_email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-400 text-sm mt-2 ml-2"
                        >
                          {errors.user_email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                      }}
                      transition={{ duration: 0.2 }}
                      className={`w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-gray-800/70 transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-400/50 focus:border-red-400' : 'border-gray-600/30 focus:border-cyan-400 focus:shadow-cyan-400/20'
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-400 text-sm mt-2 ml-2"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={loading || !isFormValid}
                    whileHover={
                      isFormValid && !loading 
                        ? { 
                            scale: 1.05, 
                            boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
                            borderColor: 'rgba(6, 182, 212, 0.8)'
                          } 
                        : {}
                    }
                    whileTap={
                      isFormValid && !loading 
                        ? { 
                            scale: 0.95,
                            boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                          } 
                        : {}
                    }
                    animate={
                      loading 
                        ? { 
                            boxShadow: [
                              '0 0 20px rgba(6, 182, 212, 0.3)',
                              '0 0 30px rgba(6, 182, 212, 0.5)',
                              '0 0 20px rgba(6, 182, 212, 0.3)'
                            ]
                          }
                        : {}
                    }
                    transition={{ 
                      duration: loading ? 1.5 : 0.2,
                      repeat: loading ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className={`w-full group relative px-8 py-4 text-lg font-semibold backdrop-blur-sm border-2 rounded-xl transition-all duration-500 overflow-hidden ${
                      isFormValid && !loading
                        ? 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border-cyan-400/50 text-cyan-400 hover:text-white cursor-pointer' 
                        : 'bg-gray-800/30 border-gray-600/30 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {loading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center space-x-3"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Loader2 size={20} className="text-cyan-400" />
                          </motion.div>
                          <span className="text-cyan-400">Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center space-x-3"
                        >
                          <Send size={20} />
                          <span>Send Message</span>
                          {isFormValid && (
                            <motion.div
                              animate={{ 
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Sparkles size={16} />
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Animated background gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-400/0 rounded-xl"
                      animate={
                        isFormValid && !loading
                          ? {
                              background: [
                                'linear-gradient(to right, rgba(6, 182, 212, 0), rgba(147, 51, 234, 0))',
                                'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))',
                                'linear-gradient(to right, rgba(6, 182, 212, 0), rgba(147, 51, 234, 0))'
                              ]
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gray-900/30 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-500 relative overflow-hidden">
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
              
              <div className="relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-8 text-center"
                >
                  Connect With Me
                </motion.h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex flex-col items-center space-y-4 p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
                      
                      <div className={`relative p-4 bg-gradient-to-r ${social.color} bg-opacity-20 rounded-full group-hover:scale-110 transition-all duration-500`}>
                        <div className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {social.icon}
                        </div>
                      </div>
                      
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </span>
                      
                      {/* Floating animation indicator */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '16px',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)',
            padding: '16px 20px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
            style: {
              border: '1px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(16, 185, 129, 0.3)',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
            style: {
              border: '1px solid rgba(239, 68, 68, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(239, 68, 68, 0.3)',
            },
          },
        }}
      />
    </section>
  );
};

export default Contact;
