import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pic1 from "../../assest/images/pic1.jpg";



const keyMoments = () => {
    const images = [
        pic1,
        pic1,pic1,pic1,pic1,
    ];

    return (
        <div className="relative py-12 bg-primary-500">
            <h2 className="text-white text-center text-3xl font-bold mb-6">
                Key Moments
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1} // Show partial images on the sides
                centeredSlides={true}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                className="w-full max-w-5xl mx-auto"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="relative p-3 bg-white rounded-lg shadow-lg">
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="rounded-lg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default keyMoments;
