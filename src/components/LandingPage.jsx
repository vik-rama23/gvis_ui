import React from 'react';
import Header from '../common/header/Header';
import CarouselPage from '../common/carousel/Carousel';
import image1 from '../assest/images/image1.jpg';
import image2 from '../assest/images/image2.jpg';
import image3 from '../assest/images/image3.png';
import StrengthText from './StrengthText';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import StrengthPage from './strength/StrengthPage';
import MessageToStudent from './MessageToStudent/MessageToStudent';
import Footer from './footer/Footer';

const LandingPage = () => {
    const images = [
        {
          text: "",
          label: "The Next World Changing Breakthrough Could Come from you.",
          caption: "We are creating leaders who will show the world, a New Path.",
          image: image1
        },
        {
          text: "",
          label: "Your Future Starts Here Discover your Limit",
          caption: "We are creating leaders who will show the world, a New Path.",
          image: image2
        },
        {
          text: "Third slide",
          label: "A World of Opportunity, Discovery & Community",
          caption: "Turitor is a place where people develop their own potential.",
          image: image3
        },
      ];
    return (
        <div>
          <Header />
          <CarouselPage images={images}  />
          <StrengthText />
          <NoticeBoard />
          <StrengthPage />
          <MessageToStudent/>
          {/* <KeyMoments/> */}
          <Footer />
        </div>
    );
}

export default LandingPage;