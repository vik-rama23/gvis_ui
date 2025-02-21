import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file for styling
import Header from '../../common/header/Header';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="aboutus-container">
        <h1>About Us</h1>
        <p><strong>Green Valley International School</strong> is a vibrant and wholesome Indian model of a Public School for Pre-
          Primary, Primary, Secondary and Senior Secondary Education, which is groomed under the guidance
          and command of leading educationists and professionals from all over the country.
          <strong>Green Valley International School</strong> focuses on cultivating a school of Leadership of Thought & Action
          with impetus on Leadership Education w i t h Efficiency, Discipline and Skill.</p>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>Our mission is to create a nurturing and stimulating environment where students can achieve their full potential. We strive to develop well-rounded individuals who are prepared to meet the challenges of the future.</p>
        </section>

        <section className="vision">
          <h2>Our Vision</h2>
          <p>Our vision is to be a leading educational institution that inspires and empowers students to become lifelong learners and responsible global citizens.</p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <p>We believe in the following core values:</p>
          <ul>
            <li>Excellence: Striving for the highest standards in everything we do.</li>
            <li>Integrity: Acting with honesty and transparency.</li>
            <li>Respect: Valuing diversity and treating everyone with dignity.</li>
            <li>Collaboration: Working together to achieve common goals.</li>
            <li>Innovation: Encouraging creativity and embracing new ideas.</li>
          </ul>
        </section>

        <section className="history">
          <h2>Our History</h2>
          <p>Green Valley International School was established in 2000 with the goal of providing a world-class education to students in our community. Over the years, we have grown and evolved, but our commitment to excellence has remained constant.</p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <p>Our dedicated team of educators and staff are passionate about helping students succeed. We are committed to creating a supportive and inclusive learning environment where every student can thrive.</p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;