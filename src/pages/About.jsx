import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiUser,
  FiAward,
  FiGlobe,
  FiDollarSign,
} from "react-icons/fi";

function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Maya Wilson",
      role: "Founder & CEO",
      bio: "Former business professor with 15 years of experience empowering women entrepreneurs through education and mentorship.",
      imageUrl: "/images/team/maya.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Chief Program Officer",
      bio: "Serial entrepreneur who has founded three successful startups and is passionate about sharing her knowledge with emerging business leaders.",
      imageUrl: "/images/team/sophia.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Amara Okafor",
      role: "Director of Community",
      bio: "Community building expert with extensive experience creating supportive networks for underrepresented entrepreneurs.",
      imageUrl: "/images/team/amara.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Jessica Patel",
      role: "Head of Education",
      bio: "Educational designer specializing in adult learning and skills development for the modern business landscape.",
      imageUrl: "/images/team/jessica.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const impactMetrics = [
    { id: 1, number: "25,000+", label: "Women Empowered", icon: <FiUser /> },
    { id: 2, number: "75%", label: "Business Success Rate", icon: <FiAward /> },
    { id: 3, number: "85+", label: "Countries Reached", icon: <FiGlobe /> },
    {
      id: 4,
      number: "$50M+",
      label: "Funding Secured by Alumni",
      icon: <FiDollarSign />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "EmpowerHer completely transformed my approach to business. The skills I gained helped me secure funding and grow my company by 300% in just two years.",
      author: "Danielle Taylor",
      business: "Founder, EcoStyle Fashion",
      image: "/images/testimonials/danielle.jpg",
    },
    {
      id: 2,
      quote:
        "The community aspect of EmpowerHer has been invaluable. I've found mentors, collaborators, and lifelong friends who understand the unique challenges women face in entrepreneurship.",
      author: "Maria Gonzalez",
      business: "CEO, TechSolutions Inc.",
      image: "/images/testimonials/maria.jpg",
    },
  ];

  const partners = [
    { id: 1, name: "Global Women's Fund", logo: "/images/partners/gwf.png" },
    { id: 2, name: "SheStarts", logo: "/images/partners/shestarts.png" },
    { id: 3, name: "Women in Tech", logo: "/images/partners/wit.png" },
    { id: 4, name: "Future Founders", logo: "/images/partners/ff.png" },
    {
      id: 5,
      name: "The Entrepreneur Network",
      logo: "/images/partners/ten.png",
    },
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Story of <span className="highlight">Empowerment</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The journey, values, and passionate team behind our mission to
            uplift women entrepreneurs worldwide
          </motion.p>
        </div>
      </section>

      <div className="container">
        {/* Mission & Values */}
        <section className="mission-section">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "mission" ? "active" : ""}`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={`tab ${activeTab === "vision" ? "active" : ""}`}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
            <button
              className={`tab ${activeTab === "values" ? "active" : ""}`}
              onClick={() => setActiveTab("values")}
            >
              Core Values
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "mission" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Driving Change Through Education</h2>
                <p className="mission-statement">
                  We're committed to creating a world where women entrepreneurs
                  have equal access to opportunities, resources, and support
                  networks needed to build thriving businesses and lead with
                  confidence.
                </p>
                <div className="mission-image">
                  <img src="/images/mission.jpg" alt="Women collaborating" />
                </div>
              </motion.div>
            )}

            {activeTab === "vision" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>The Future We're Building</h2>
                <p className="vision-statement">
                  By 2030, we envision a global ecosystem where women-led
                  businesses are equally represented in all industries, with
                  access to capital, markets, and leadership opportunities.
                </p>
                <div className="vision-image">
                  <img src="/images/vision.jpg" alt="Women in leadership" />
                </div>
              </motion.div>
            )}

            {activeTab === "values" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="values-grid"
              >
                {[
                  {
                    title: "Empowerment",
                    icon: "💪",
                    description:
                      "Equipping women with knowledge, skills, and confidence to succeed on their own terms.",
                  },
                  {
                    title: "Community",
                    icon: "🤝",
                    description:
                      "Fostering meaningful connections that provide support, inspiration, and collaboration.",
                  },
                  {
                    title: "Innovation",
                    icon: "✨",
                    description:
                      "Embracing new ideas to solve unique challenges women entrepreneurs face.",
                  },
                  {
                    title: "Inclusivity",
                    icon: "🌍",
                    description:
                      "Welcoming entrepreneurs from all backgrounds, industries, and growth stages.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="value-card"
                    whileHover={{ y: -5 }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="timeline-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            {[
              {
                year: "2019",
                title: "The Beginning",
                description:
                  "Founded by Dr. Maya Wilson after identifying gaps in business education for women entrepreneurs.",
              },
              {
                year: "2020",
                title: "Going Digital",
                description:
                  "Launched online courses reaching women in 25 countries.",
              },
              {
                year: "2022",
                title: "Community Growth",
                description:
                  "Expanded our platform and launched mentorship programs.",
              },
              {
                year: "2024",
                title: "Global Impact",
                description:
                  "25,000 graduates and major funding partnerships established.",
              },
              {
                year: "2025",
                title: "The Future",
                description:
                  "Continuing to innovate and expand our global reach.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet The Visionaries</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="member-image">
                  <img src={member.imageUrl} alt={member.name} />
                  <div className="social-links">
                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} Twitter`}
                    >
                      <FiTwitter />
                    </a>
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FiLinkedin />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="impact-section">
          <h2>The Difference We Make</h2>
          <div className="metrics-grid">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                className="metric-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="metric-icon">{metric.icon}</div>
                <span className="number">{metric.number}</span>
                <span className="label">{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2>Voices of Change</h2>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`testimonial ${
                  index === activeTestimonial ? "active" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeTestimonial ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div className="quote-mark">"</div>
                  <div className="author-info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.business}</span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <blockquote>{testimonial.quote}</blockquote>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeTestimonial ? "active" : ""}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </section>
        {/* Partners */}
        <section className="partners-section">
          <h2>Trusted By</h2>
          <motion.div
            className="partners-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="partner-logo"
                whileHover={{ scale: 1.1 }}
              >
                <img src={partner.logo} alt={partner.name} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <h2>Join Our Movement</h2>
            <p>
              We'd love to hear from you - whether you're interested in our
              programs, partnerships, or just want to connect.
            </p>

            <div className="contact-methods">
              <div className="contact-card">
                <FiMail className="contact-icon" />
                <h3>Email Us</h3>
                <a href="mailto:info@empowerher.com">info@empowerher.com</a>
              </div>
              <div className="contact-card">
                <FiPhone className="contact-icon" />
                <h3>Call Us</h3>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </div>
              <div className="contact-card">
                <FiMapPin className="contact-icon" />
                <h3>Visit Us</h3>
                <address>
                  123 Entrepreneur Way, Innovation City, EC 10001
                </address>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Send Us a Message</h3>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FiArrowRight />
            </motion.button>
          </motion.form>
        </section>
      </div>
    </motion.div>
  );
}

export default About;
