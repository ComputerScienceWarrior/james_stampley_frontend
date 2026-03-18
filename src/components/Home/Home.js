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
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">My Projects</h1>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
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

                <div className="card-content">
                  <h3 className="card-title">{project.name}</h3>
                  <p className="card-caption">{project.caption}</p>
                  <p className="card-language">
                    <strong>Technologies:</strong> {project.language}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </div>


  );
};

export default Home;
