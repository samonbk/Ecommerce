import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import best_laptop from "../../../assets/image/best-sell-laptop.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useProductStore } from "../../../assets/Data/product.js";

const BestSelling = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const { products, setProducts, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function newPrice(price, disscount) {
    let newPrice = price - (price * disscount) / 100;
    return newPrice;
  }

  return (
    <section className="max-w-[1690px] mx-auto lg:p-8 p-3">
      <div className="flex items-center justify-between border-b">
        <h2 className="text-3xl font-semibold lg:py-5 py-2 border-b border-cyan-500">
          Best Selling
        </h2>
        <Link className="underline uppercase text-sm ">View all products</Link>
      </div>
      <div className="flex flex-col lg:grid grid-cols-12 lg:gap-8 gap-4 mt-4">
        <div
          className="col-span-4 flex justify-end lg:p-8 p-3 bg-cover lg:h-auto h-[250px]"
          style={{
            backgroundImage: `url(${best_laptop})`,
          }}
        >
          <div className="w-[43%] flex flex-col justify-center h-full lg:gap-3 gap-1">
            <h2 className="text-2xl font-semibold">Galaxy Book3 Laptop</h2>
            <p className="text-lg font-semibold">
              from <span className="text-3xl text-cyan-500">$199.00</span>
            </p>
            <button className="bg-cyan-500 lg:w-32 text-white px-3 lg:px-5 py-2 rounded mt-5">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-span-8">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.params.navigation.prevEl = prevButtonRef.current;
            }}
            // loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation]}
            className="mySwiper w-full"
          >
            {products.map((pro) => (
              <SwiperSlide key={pro.id} className="space-y-3 group">
                <Link className="lg:space-y-3 space-y-2 relative">
                  <div className="w-full h-[200px] overflow-hidden relative">
                    <div className="flex items-center w-full h-full absolute top-0 left-0  group-hover:opacity-0 opacity-100 transition-all duration-500">
                      <img
                        className="w-full"
                        src={pro.image[0]}
                        alt={pro.name}
                      />
                    </div>
                    <div className="flex items-center w-full h-full absolute top-0 left-0  opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <img
                        className="w-full"
                        src={pro.image[1]}
                        alt={pro.name}
                      />
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm font-semibold inline-block">
                    {pro.brand}
                  </span>
                  <div className="lg:space-y-2 space-y-1">
                    <h2 className="text-lg font-semibold group-hover:text-cyan-500">
                      {pro.name}
                    </h2>
                    <p>
                      <span
                        className={` font-bold text-xl pr-4 ${
                          pro.disscount > 0
                            ? "line-through text-gray-500"
                            : "text-cyan-500"
                        }`}
                      >
                        ${pro.price}
                      </span>
                      <span
                        className={`text-cyan-500 font-bold text-xl pr-4 ${
                          pro.disscount <= 0 ? "hidden" : ""
                        }`}
                      >
                        ${newPrice(pro.price, pro.disscount)}
                      </span>
                    </p>
                  </div>
                  <div className="absolute top-0 left-0">
                    <span
                      className={`py-1 px-3 bg-red-500 text-sm text-white rounded-2xl ${
                        pro.disscount < 1 ? "hidden" : ""
                      }`}
                    >
                      {pro.disscount}%
                    </span>
                  </div>
                  <button className="w-full h-10 flex items-center justify-center rounded-lg bg-cyan-500 text-white">
                    Shop now
                  </button>
                </Link>
              </SwiperSlide>
            ))}
            <div
              ref={prevButtonRef}
              className="custom-button prev-button bg-cyan-500 z-50 w-6 md:h-8 h-6 md:w-8 rounded-full flex items-center justify-center text-white absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <GrFormPreviousLink />
            </div>
            <div
              ref={nextButtonRef}
              className="custom-button next-button bg-cyan-500 z-50 w-6 md:h-8 h-6 md:w-8 rounded-full flex items-center justify-center text-white absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <GrFormNextLink />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
