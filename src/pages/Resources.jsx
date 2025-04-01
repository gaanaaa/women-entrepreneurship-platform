import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FiSearch,
  FiArrowRight,
  FiDownload,
  FiCalendar,
  FiUsers,
  FiGlobe,
  FiBookOpen,
  FiTool,
} from "react-icons/fi";

function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const resourceCategories = [
    {
      id: 1,
      title: "E-Books & Guides",
      icon: <FiBookOpen className="category-icon" />,
      items: [
        {
          id: 1,
          title: "The Female Entrepreneur's Roadmap",
          description:
            "A comprehensive guide to starting and growing your business",
          type: "pdf",
          downloads: "12.5k",
        },
        {
          id: 2,
          title: "Financial Freedom: Money Management for Women in Business",
          description:
            "Practical financial advice specifically tailored for women entrepreneurs",
          type: "pdf",
          downloads: "8.2k",
        },
        {
          id: 3,
          title: "Marketing Mastery: Building Your Brand",
          description:
            "Learn how to create and grow a memorable brand that resonates with your audience",
          type: "pdf",
          downloads: "15.7k",
        },
      ],
    },
    {
      id: 2,
      title: "Templates & Tools",
      icon: <FiTool className="category-icon" />,
      items: [
        {
          id: 1,
          title: "Business Plan Template",
          description:
            "A customizable template to help you craft a compelling business plan",
          type: "excel",
          downloads: "9.3k",
        },
        {
          id: 2,
          title: "Financial Projection Spreadsheet",
          description:
            "Track your finances and project future growth with this easy-to-use tool",
          type: "excel",
          downloads: "6.8k",
        },
        {
          id: 3,
          title: "Social Media Content Calendar",
          description:
            "Plan and organize your content strategy with this comprehensive calendar",
          type: "google-doc",
          downloads: "11.4k",
        },
      ],
    },
    {
      id: 3,
      title: "Networking Opportunities",
      icon: <FiUsers className="category-icon" />,
      items: [
        {
          id: 1,
          title: "Women Entrepreneurs Alliance",
          description: "Join a global community of like-minded business owners",
          type: "community",
          members: "5.2k",
        },
        {
          id: 2,
          title: "Monthly Virtual Meetups",
          description:
            "Connect with peers in your industry through our facilitated online sessions",
          type: "event",
          attendees: "800+ monthly",
        },
        {
          id: 3,
          title: "Mentorship Program",
          description:
            "Get paired with an experienced entrepreneur in your field for personalized guidance",
          type: "program",
          participants: "1.3k",
        },
      ],
    },
  ];

  const upcomingWebinars = [
    {
      id: 1,
      date: "April 15, 2025",
      time: "2:00 PM EST",
      title: "Securing Funding: Strategies for Women-Owned Businesses",
      speaker: "Maria Rodriguez, Angel Investor",
      seats: "45/100 seats left",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
    },
    {
      id: 2,
      date: "April 22, 2025",
      time: "11:00 AM EST",
      title: "Work-Life Balance: Managing Business and Personal Life",
      speaker: "Dr. Sarah Johnson, Business Psychologist",
      seats: "22/100 seats left",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    },
    {
      id: 3,
      date: "May 5, 2025",
      time: "3:30 PM EST",
      title: "Building Resilience: Overcoming Setbacks in Business",
      speaker: "Michelle Lee, Serial Entrepreneur",
      seats: "78/100 seats left",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
  ];

  const filteredResources = resourceCategories
    .filter(
      (category) =>
        activeCategory === "all" || category.title.includes(activeCategory)
    )
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <motion.div
      className="resources-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <div className="page-banner">
        <div className="container">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Resource Hub
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Curated tools, guides, and connections to accelerate your
            entrepreneurial journey
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="banner-stats"
          >
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Resources</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Downloads</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">User Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        {/* Interactive Search & Filter */}
        <section className="search-section">
          <motion.div className="search-container" whileHover={{ scale: 1.01 }}>
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search resources, webinars, tools..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">
              <FiSearch />
            </button>
          </motion.div>

          <div className="category-filters">
            <button
              className={`filter-btn ${
                activeCategory === "all" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("all")}
            >
              All Resources
            </button>
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeCategory === category.title ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.title)}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>
        </section>

        {/* Resource Cards with Interactive Elements */}
        <section className="resource-categories">
          {filteredResources.length > 0 ? (
            filteredResources.map((category) => (
              <motion.div
                key={category.id}
                className="resource-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="category-header">
                  {category.icon}
                  <h2>{category.title}</h2>
                </div>
                <div className="resource-list">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="resource-card"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="resource-badge">{item.type}</div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="resource-meta">
                        <span>
                          <FiDownload />{" "}
                          {item.downloads || item.members || item.participants}
                        </span>
                        <Link to="#" className="resource-link">
                          {item.type === "community"
                            ? "Join Now"
                            : "Access Now"}{" "}
                          <FiArrowRight />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="no-results">
              <h3>No resources found matching your search</h3>
              <button
                className="btn-primary"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Interactive Webinar Cards */}
        <section className="webinars-section">
          <div className="section-header">
            <h2>
              <FiCalendar className="section-icon" />
              Upcoming Learning Opportunities
            </h2>
            <Link to="/webinars" className="view-all">
              View All Webinars <FiArrowRight />
            </Link>
          </div>

          <div className="webinar-list">
            {upcomingWebinars.map((webinar) => (
              <motion.div
                key={webinar.id}
                className="webinar-card"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="webinar-image"
                  style={{ backgroundImage: `url(${webinar.image})` }}
                >
                  <div className="webinar-date">
                    <span className="date-day">
                      {webinar.date.split(" ")[1].replace(",", "")}
                    </span>
                    <span className="date-month">
                      {webinar.date.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <div className="webinar-content">
                  <h3>{webinar.title}</h3>
                  <p className="webinar-speaker">
                    <span>Hosted by:</span> {webinar.speaker}
                  </p>
                  <div className="webinar-meta">
                    <span className="webinar-time">
                      <FiCalendar /> {webinar.time}
                    </span>
                    <span
                      className={`webinar-seats ${
                        parseInt(webinar.seats) < 30 ? "warning" : ""
                      }`}
                    >
                      {webinar.seats}
                    </span>
                  </div>
                  <div className="webinar-actions">
                    <button className="register-button">
                      Reserve Your Spot
                    </button>
                    <button className="reminder-button">Set Reminder</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Section with Animation */}
        <motion.section
          className="community-section"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
        >
          <div className="community-content">
            <h2>Join Our Global Network</h2>
            <p>
              Connect with thousands of women entrepreneurs across 50+
              countries, share experiences, and grow together through our
              exclusive programs.
            </p>

            <div className="community-stats">
              <div className="stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat">
                <FiGlobe className="stat-icon" />
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries Represented</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Annual Events</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="join-button pulse">
                Become a Member Today
              </button>
            </motion.div>
          </div>
          <div className="community-visual">
            <div className="globe-animation">
              {/* This would be an animated globe component in a real implementation */}
              <div className="network-dots">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="network-dot"
                    style={{
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Resources;
