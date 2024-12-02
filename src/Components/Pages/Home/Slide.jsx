import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slide1 from "../../../assets/image/slide-1.jfif";
import slide2 from "../../../assets/image/slide-2.jfif";
import slide3 from "../../../assets/image/slide-3.jfif";

const Slide = () => {
  return (
    <>
      {/* Slider */}
      <div className="w-full font-semibold">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <div
              className="lg:h-[650px] h-[450px] flex items-center"
              style={{
                backgroundImage: `url(${slide1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full px-4">
                <div className="lg:space-y-8 space-y-4 max-w-[1690px] mx-auto">
                  <div>
                    <p className="text-4xl">Flat 30% Discount</p>
                  </div>
                  <div className="text-5xl">
                    <h2>Oculus Rift With</h2>
                    <h2>Touch Virtual Reality</h2>
                  </div>
                  <div className="text-4xl">
                    <h3>
                      From{" "}
                      <span className="text-cyan-500 text-5xl">$149.99</span>
                    </h3>
                  </div>
                  <div>
                    <button className="w-44 py-3 bg-cyan-500 text-white rounded-xl items-center justify-center">
                      shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="lg:h-[650px] h-[450px] flex items-center"
              style={{
                backgroundImage: `url(${slide2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full px-4">
                <div className="space-y-6 max-w-[1690px] mx-auto">
                  <div>
                    <p className="text-4xl">Flat 40% Discount</p>
                  </div>
                  <div className="text-5xl">
                    <h2>Boat Rockerz 510</h2>
                    <h2>Wireless Headphones</h2>
                  </div>
                  <div className="text-4xl">
                    <h3>
                      From{" "}
                      <span className="text-cyan-500 text-5xl">$120.36</span>
                    </h3>
                  </div>
                  <div>
                    <button className="w-44 py-3 bg-cyan-500 text-white rounded-xl items-center justify-center">
                      shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="lg:h-[650px] h-[450px] flex items-center"
              style={{
                backgroundImage: `url(${slide3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full px-4">
                <div className="lg:space-y-8 space-y-4 max-w-[1690px] mx-auto">
                  <div>
                    <p className="text-4xl">Flat 30% Discount</p>
                  </div>
                  <div className="text-5xl">
                    <h2>Google Unveils</h2>
                    <h2>Home Mini & Speaker</h2>
                  </div>
                  <div className="text-4xl">
                    <h3>
                      From{" "}
                      <span className="text-cyan-500 text-5xl">$99.89</span>
                    </h3>
                  </div>
                  <div>
                    <button className="w-44 py-3 bg-cyan-500 text-white rounded-xl items-center justify-center">
                      shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slide;
