import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const LastProduct = () => {
  const product = [
    {
      id: 1,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 0,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
    {
      id: 2,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 6,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
    {
      id: 3,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 5,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
    {
      id: 4,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 0,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
    {
      id: 5,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 0,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
    {
      id: 6,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 0,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
    {
      id: 7,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 0,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
    {
      id: 8,
      name: "Macbook pro 2024",
      price: 1000,
      desc: "Apple’s new MacBook Pro features the incredibly powerful M4 family of chips and ushers in a new era with Apple Intelligence",
      brand: "Apple",
      disscount: 0,
      image: [
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916305295",
        "https://media.wired.com/photos/672107771a715d099fb8e041/16:9/w_3840,h_2160,c_limit/Apple-MacBook-Pro-M4-lineup.png",
      ],
    },
  ];

  function handleHover() {}

  return (
    <section className="">
      <div className="max-w-[1690px] mx-auto lg:space-y-6 space-y-3 lg:p-8 p-3">
        <div className="flex items-center justify-between border-b">
          <h2 className="text-3xl lg:py-5 py-2 border-b border-cyan-500">
            Last Product
          </h2>
          <Link className="underline uppercase text-sm ">
            View all products
          </Link>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          loop={true}
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          className="mySwiper w-full"
        >
          {product.map((pro) => (
            <SwiperSlide key={pro.id} className="space-y-3 group">
              <Link className="lg:space-y-3 space-y-2 relative">
                <div className="w-full h-[200px] overflow-hidden relative">
                  <div className="flex items-center w-full h-full absolute top-0 left-0  group-hover:opacity-0 opacity-100 transition-all duration-500">
                    <img className="w-full" src={pro.image[0]} alt={pro.name} />
                  </div>
                  <div className="flex items-center w-full h-full absolute top-0 left-0  opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <img className="w-full" src={pro.image[1]} alt={pro.name} />
                  </div>
                </div>
                <span className="text-gray-500 text-sm font-semibold inline-block">
                  {pro.brand}
                </span>
                <div className="lg:space-y-2 space-y-1">
                  <h2 className="text-lg font-semibold group-hover:text-cyan-500">
                    {pro.name}
                  </h2>
                  <p className="text-gray-500 text-[16px]">
                    {pro.desc.slice(0, 40)}...
                  </p>
                  <span className="text-cyan-500 font-bold text-lg">
                    ${pro.price}
                  </span>
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
        </Swiper>
      </div>
    </section>
  );
};

export default LastProduct;
