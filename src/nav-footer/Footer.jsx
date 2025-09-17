import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';
import './Footer.css'

const Footer = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!email || !message) {
      alert('Please fill in both email and message fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent! Thank you for reaching out.');
      setMessage('');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/yourusername',
      color: 'white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'blue'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:your.email@example.com',
      color: 'red'
    }
  ];

  return (
    <footer className="footer-container">
      {/* Animated background */}
      <div className="footer-background">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="footer-content">
        {/* Main CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">LET'S WORK TOGETHER</h2>
          <div className="title-underline"></div>
          <p className="cta-subtitle">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        {/* Contact Form and Social Links */}
        <div className="contact-section">
          {/* Social Links */}
          <div className="social-links-container">
            <h3 className="social-title">CONNECT WITH ME</h3>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.color}`}
                >
                  <div className="social-icon">
                    {social.icon}
                  </div>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Message Form */}
          <div className="message-form-container">
            <div className="form-header">
              <MessageCircle className="form-icon" />
              <h3>SEND MESSAGE</h3>
            </div>
            
            <div className="message-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
              
              <div className="input-group">
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="form-textarea"
                />
              </div>
              
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="copyright-section">
          <div className="copyright-line"></div>
          <p className="copyright-text">
            © 2025 Your Name. All rights reserved. Built with passion and code.
          </p>
        </div>
      </div>
      </footer>
  )}
export default Footer

