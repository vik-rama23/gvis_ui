import React from 'react';
import './Facilities.css'; // Make sure to create this CSS file for styling
import Header from '../../common/header/Header';

const Facilities = () => {
  return (
    <>
      <Header />
      <div className="facilities-container">
        <h1>Our Facilities</h1>
        <p>Welcome to the <strong>Green Valley International School</strong> facilities page. Here you will find information about the various facilities we offer to our students.</p>
        
        <section className="library">
          <h2>Library</h2>
          <p>Our library is well-stocked with a wide range of books, journals, and digital resources to support the academic and personal growth of our students.</p>
        </section>

        <section className="auditoriumType-classroom">
          <h2>Auditorium-Type Classroom</h2>
          <p>Our auditorium-type classroom is designed to accommodate a large number of students with tiered seating arrangements. This setup ensures that every student has a clear view of the teacher and the board. The classroom is equipped with advanced audio-visual equipment, including projectors, microphones, and speakers, to facilitate effective teaching and presentations.</p>
        </section>

        <section className="laboratories">
          <h2>Laboratories</h2>
          <p>We have state-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science, providing hands-on learning experiences for our students.</p>
        </section>
        
        <section className="computer-class">
          <h2>Computer Class</h2>
          <p>Our computer class is equipped with the latest technology and software to provide students with hands-on experience in computer science and information technology. The class includes high-speed internet access, modern computers, and interactive learning tools to enhance the learning experience.</p>
        </section>

        <section className="sports">
          <h2>Sports Facilities</h2>
          <p>Our school offers excellent sports facilities, including a football field, badminton court, volleyball court, and indoor games, to promote physical fitness and teamwork.</p>
        </section>

        {/* <section className="cafeteria">
          <h2>Cafeteria</h2>
          <p>Our cafeteria provides healthy and nutritious meals and snacks, ensuring that our students have the energy they need to excel in their studies and activities.</p>
        </section> */}

        <section className="transport">
          <h2>Transport</h2>
          <p>We offer a safe and reliable transport service for our students, with a fleet of well-maintained buses covering various routes across the city/village.</p>
        </section>
      </div>
    </>
  );
};

export default Facilities;