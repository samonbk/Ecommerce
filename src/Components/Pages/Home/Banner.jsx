import React from "react";
import smile_man from "../../../assets/Image/smile-man.webp";
import apple_product from "../../../assets/image/apple-product.webp";

const Banner = () => {
  return (
    <section className="max-w-[1690px] mx-auto lg:p-8 p-3 text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div
          className="rounded-2xl w-full h-[230px] lg:bg-right bg-center"
          style={{
            backgroundImage: `url(${smile_man})`,
            backgroundSize: "cover",
          }}
        >
          <div className="space-y-4 flex flex-col justify-center h-full p-10">
            <h2 className="text-2xl">
              <p>Smiley Man With</p>
              <p>Shot Virtual Glasses</p>
            </h2>
            <h2 className="text-2xl">
              From <span className="text-3xl">$99.00</span>
            </h2>
            <button className="underline uppercase text-sm block font-bold text-start">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="rounded-2xl w-full h-[230px] text-gray-700 font-semibold lg:bg-right bg-center"
          style={{
            backgroundImage: `url(${apple_product})`,
            backgroundSize: "cover",
          }}
        >
          <div className="space-y-4 flex flex-col justify-center h-full p-10">
            <h2 className="text-2xl">
              <p>MacBook Pro</p>
              <p>With Smart Phone</p>
            </h2>
            <h2 className="text-2xl">
              From <span className="text-3xl">$129.00</span>
            </h2>
            <button className="underline uppercase text-sm block font-bold text-start">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
