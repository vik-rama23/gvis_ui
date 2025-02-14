import React from 'react';
import './Strength.css';

const StrengthPage = () => {
   const cards = [
       { id: 1, title: 'Safe Campus', content: 'Student Friendly Campus that renders the most congenial atmosphere for learning as safety of every child is our Priority.' },
       { id: 2, title: 'Best-in-class Infrastructure', content: 'The Infrastructure that Supports teaching and learning in the most suitable environment away from the hustle-bustle of urban areas where the students thrive.' },
       { id: 3, title: 'Holistic Development', content: `We incorporate effectively an education system with a holistic perspective to develop each child's intellectual , emotional , social , creative and spiritual potentials.`},
       { id: 4, title: 'Personal Attention', content: `Close Monitoring is Done to understand each child's academic skills and understand their drawbacks thus help them to face the learning challenges.` },
       { id: 5, title: 'Experienced Teachers', content: 'Our Teachers are our biggest strength. They are well educated and well experienced to guide children in the best way.' },
       { id: 6, title: 'Co-Curricular Activities', content: 'Allowing students to explore strengths and talents outside of academics , develop stronger time-management skills.' },
     ];
   
     return (
      <div className="strength">
        <h1>Our <span>Strengths</span></h1>
       <div className="grid-container">
         {cards.map(card => (
           <div key={card.id} className="cardStrength">
             <h3>{card.title}</h3>
             <p>{card.content}</p>
           </div>
         ))}
       </div>
       </div>
     );
}

export default StrengthPage;

