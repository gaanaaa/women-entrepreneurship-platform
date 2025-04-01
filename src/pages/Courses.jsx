// src/pages/Courses.jsx
import React, { useState } from "react";
import coursesData from "../data/courses.json";

function Courses() {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === filter);

  return (
    <div className="courses-page">
      <section className="page-header">
        <h1>Our Courses</h1>
        <p>
          Comprehensive skill-building programs tailored for women entrepreneurs
        </p>
      </section>

      <section className="course-filters">
        <h2>Browse by Category</h2>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Courses
          </button>
          <button
            className={filter === "business" ? "active" : ""}
            onClick={() => setFilter("business")}
          >
            Business Planning
          </button>
          <button
            className={filter === "finance" ? "active" : ""}
            onClick={() => setFilter("finance")}
          >
            Financial Management
          </button>
          <button
            className={filter === "digital" ? "active" : ""}
            onClick={() => setFilter("digital")}
          >
            Digital Skills
          </button>
          <button
            className={filter === "leadership" ? "active" : ""}
            onClick={() => setFilter("leadership")}
          >
            Leadership
          </button>
        </div>
      </section>

      <section className="course-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-img">
              <img
                src={course.image || "https://via.placeholder.com/300x200"}
                alt={course.title}
              />
            </div>
            <div className="course-content">
              <span className="course-category">{course.category}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-footer">
                <span className="course-duration">{course.duration}</span>
                <a href={`/courses/${course.id}`} className="btn-course">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Courses;
