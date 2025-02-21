import React from 'react';
import './acedemic.css'; 
import Header from '../../common/header/Header';

const Academic = () => {
  return (
    <>
      <Header />
      <div className="academic-container">
        <h1>Academic Programs</h1>
        <p>Welcome to <strong>Green Valley International School</strong> academic programs page. Here you will find information about our curriculum, courses, and academic achievements.</p>
        
        <section className="curriculum">
          <h2>Curriculum</h2>
          <p>Our curriculum is designed to provide a comprehensive education that prepares students for success in their future endeavors. We offer a wide range of subjects including:</p>
          <ul>
            <li>Mathematics</li>
            <li>Science</li>
            <li>English</li>
            <li>Social Studies</li>
            <li>Physical Education</li>
            <li>Arts and Music</li>
          </ul>
        </section>

        {/* <section className="courses">
          <h2>Courses</h2>
          <p>We offer a variety of courses to cater to the diverse interests and needs of our students. Some of our popular courses include:</p>
          <ul>
            <li>Advanced Placement (AP) Courses</li>
            <li>Honors Courses</li>
            <li>Elective Courses</li>
            <li>Extracurricular Activities</li>
          </ul>
        </section> */}

        <section className="achievements">
          <h2>Academic Achievements</h2>
          <p>Our students consistently achieve high academic standards and excel in various competitions and examinations. Some of our recent achievements include:</p>
          <ul>
            <li>Top scores in 10th and 12th-grade exams</li>
            <li>Winning science and math competitions at school</li>
            <li>Outstanding performance in arts and music festivals</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Academic;