import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ImageCom from "../assets/ImageCom.png"

const testimonials = [
  {
    name: "Adedayo Olamide",
    comment:
      "As a vendor on Naija-Cart, I've been able to reach customers across Nigeria. The platform is user-friendly, and their support team is always there to help.",
    image: {ImageCom},
  },
  {
    name: "Chukwuemeka Uzo",
    comment:
      "I never imagined I could build a working prototype in 48 hours. The event pushed my limits and I'm grateful!",
    image: "https://source.unsplash.com/random/150x150?person2",
  },
  {
    name: "Fatima Bello",
    comment:
      "I met my co-founder at NaijaHacks! The community is so vibrant and full of opportunities.",
    image: "https://source.unsplash.com/random/150x150?person3",
  },
  {
    name: "Ifeanyi Okoro",
    comment:
      "Great mentorship and awesome teams. NaijaHacks is the best place to start building your tech journey.",
    image: "https://source.unsplash.com/random/150x150?person4",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const goToPrevious = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const goToNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full px-4 py-8 bg-muted rounded-lg text-muted-foreground">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        What Our Participants Say
      </h2>
      <p className="text-center pb-5">Don't just take our word for it - hear from our satisfied customers across Nigeria</p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6 w-full">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md bg-white text-center w-full h-[216px] md:w-1/2 max-w-md"
          >
            {/* Image & Name at Top */}
            <div className="flex   space-x-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500"
              />
              <span className="font-semibold text-naija-yellow text-lg">
                {testimonial.name}
              </span>
            </div>
             {/* 5 Golden Stars */}
             <div className="flex  text-yellow-500 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Comment */}
            <p className="text-left mb-4">{testimonial.comment}</p>

           
          </div>
        ))}
      </div>

      {/* Bottom Arrows */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={goToPrevious}
          className="w-[70px] h-[40px] rounded-md  font-bold text-xl"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={goToNext}
          className="w-[70px] h-[40px] rounded-md  font-bold text-xl"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
