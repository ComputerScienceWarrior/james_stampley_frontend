import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProjectData from "../extras/ProjectData";
import './Home.css';

const Home = () => {
  const swiperRef = React.useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, [ProjectData]);

  return (
    <div className="container">
      <header className="header">
        <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="mySwiper"
        >
          {ProjectData.map((project, index) => (
            <SwiperSlide key={project.id || index}>
              <div className="card">
                <img
                  src={project.imageSource}
                  alt={`${project.name} preview`}
                  className="card-image"
                />
                <h3 className="card-title">{project.name}</h3>
                <p className="card-caption">{project.caption}</p>
                <p className="card-language">
                  <strong>Languages/Technologies:</strong> {project.language}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </div>
  );
};

export default Home;
