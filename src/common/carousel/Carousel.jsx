import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const CarouselPage = ({ images }) => {
    return (
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
            className="carousel-image"
            src={image.image}
            alt={image.label}
          />
            <Carousel.Caption>
              <h3 className='text-label'>{image.label}</h3>
              <p className='text-description'>{image.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

export default CarouselPage;