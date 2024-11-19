import { Carousel } from "antd";

const CustomCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <div className="h-[40rem] text-[#fff} leading-[40rem] text-center">
          <img
            src="carousel1.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <div className="h-[40rem] text-[#fff} leading-[40rem] text-center">
          <img
            src="carousel2.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <div className="h-[40rem] text-[#fff} leading-[40rem] text-center">
          <img
            src="carousel3.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <div className="h-[40rem] text-[#fff} leading-[40rem] text-center">
          <img
            src="carousel4.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
