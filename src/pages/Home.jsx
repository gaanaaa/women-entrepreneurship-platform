import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiDollarSign,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import AIMentor from "../components/AIMentor/AIMentor";

function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    {
      title: "Business Planning",
      icon: <FiTrendingUp className="feature-icon" />,
      description:
        "Learn how to create comprehensive business plans that set you up for success.",
    },
    {
      title: "Financial Management",
      icon: <FiDollarSign className="feature-icon" />,
      description:
        "Master the essentials of financial planning, budgeting, and investment strategies.",
    },
    {
      title: "Digital Marketing",
      icon: <FiUsers className="feature-icon" />,
      description:
        "Discover effective digital marketing techniques to grow your business online.",
    },
    {
      title: "Leadership Skills",
      icon: <FiAward className="feature-icon" />,
      description:
        "Develop the leadership qualities needed to inspire and manage teams effectively.",
    },
  ];

  const rotateFeature = useCallback(() => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  }, [features.length]);

  useEffect(() => {
    const interval = setInterval(rotateFeature, 4000);
    return () => clearInterval(interval);
  }, [rotateFeature]);

  return (
    <div className="home-page">
      {/* Hero Section with Animated Background */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empower<span className="highlight">Her</span>: Igniting Women's
            Entrepreneurial Spirit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building skills for success in business and leadership through our
            transformative programs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/courses" className="btn-primary pulse">
              Explore Courses <FiArrowRight className="btn-icon" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Animated Features Section */}
      <section className="features">
        <h2 className="section-title">Your Path to Success</h2>
        <div className="features-container">
          <div className="feature-display">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="active-feature"
            >
              {features[currentFeature].icon}
              <h3>{features[currentFeature].title}</h3>
              <p>{features[currentFeature].description}</p>
            </motion.div>
          </div>
          <div className="feature-selector">
            {features.map((_, index) => (
              <button
                key={index}
                className={`feature-dot ${
                  index === currentFeature ? "active" : ""
                }`}
                onClick={() => setCurrentFeature(index)}
                aria-label={`View ${features[index].title}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Mentor Section - NEW COMPONENT ADDED HERE */}
      <section className="ai-mentor-section">
        <div className="container">
          <h2 className="section-title">Your 24/7 Business Mentor</h2>
          <p className="section-subtitle">
            Get personalized guidance anytime through our AI assistant
          </p>
          <AIMentor />
        </div>
      </section>

      {/* Interactive Success Stories */}
      <section className="success-stories">
        <h2 className="section-title">Trailblazers Like You</h2>
        <div className="story-grid">
          <motion.div
            className="story-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="story-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24')",
              }}
            ></div>
            <div className="story-content">
              <h3>Priya's Craft Business</h3>
              <p>
                From a small home-based operation to employing 10 women artisans
                in her community.
              </p>
              <div className="stats">
                <span>+300% Revenue Growth</span>
                <span>10 Jobs Created</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="story-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="story-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586771107445-d3ca888129ce')",
              }}
            ></div>
            <div className="story-content">
              <h3>Lakshmi's Organic Farm</h3>
              <p>
                Transformed traditional farming practices into a profitable
                organic produce business.
              </p>
              <div className="stats">
                <span>5 Acres Cultivated</span>
                <span>Exporting to 3 Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/about" className="btn-secondary">
            Read More Inspiring Stories <FiArrowRight className="btn-icon" />
          </Link>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Join our community of ambitious women entrepreneurs today</p>
          <div className="cta-buttons">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/signup" className="btn-primary">
                Sign Up Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
