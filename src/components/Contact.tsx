import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Loader2,
  Phone
} from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Message sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
          form.current?.reset();
        },
        (err) => {
          setLoading(false);
          toast.error('Failed to send message.');
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="heading-xl inline-block relative">
            Get In Touch
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-text-primary/30 rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Let's Connect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-4xl font-bold text-text-primary mb-6">Let's Connect</h3>
              <p className="text-xl text-text-secondary leading-relaxed">
                Have a project in mind or just want to chat? Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone Card */}
              <div className="glass-card p-6 bg-surface-strong/30 flex items-center gap-6 group hover:border-text-primary/30 transition-all">
                <div className="p-4 bg-surface-muted/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-tertiary mb-1">Phone</p>
                  <p className="text-lg font-bold text-text-primary">{import.meta.env.VITE_PHONE_NUMBER}</p>
                </div>
              </div>

              {/* Email Card */}
              <a 
                href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`} 
                className="glass-card p-6 bg-surface-strong/30 flex items-center gap-6 group hover:border-text-primary/30 transition-all block"
              >
                <div className="p-4 bg-surface-muted/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-tertiary mb-1">Email</p>
                  <p className="text-lg font-bold text-text-primary">{import.meta.env.VITE_EMAIL_ADDRESS}</p>
                </div>
              </a>
            </div>

            <div className="pt-8">
              <p className="text-sm text-text-tertiary mb-6">Connect with me</p>
              <div className="flex gap-4">
                <a href={import.meta.env.VITE_GITHUB_URL as string} target="_blank" rel="noopener noreferrer" className="p-4 glass-card bg-surface-muted/20 text-text-primary hover:scale-110 transition-transform">
                  <Github size={24} />
                </a>
                <a href={import.meta.env.VITE_LINKEDIN_URL as string} target="_blank" rel="noopener noreferrer" className="p-4 glass-card bg-surface-muted/20 text-text-primary hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-tertiary mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-surface-strong/30 border border-text-primary/10 rounded-xl text-text-primary focus:border-text-primary/50 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-tertiary mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-surface-strong/30 border border-text-primary/10 rounded-xl text-text-primary focus:border-text-primary/50 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-tertiary mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-surface-strong/30 border border-text-primary/10 rounded-xl text-text-primary focus:border-text-primary/50 outline-none transition-all resize-none"
                    placeholder="Enter your message"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg group"
              >
                {loading ? (
                  <Loader2 size={24} className="animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
