import { Carousel } from "antd";

const CustomCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 className="h-[160px] text-[#fff} leading-[160px] text-center bg-[#364d79]">
          1
        </h3>
      </div>
      <div>
        <h3 className="h-[160px] text-[#fff} leading-[160px] text-center bg-[#364d79]">
          2
        </h3>
      </div>
      <div>
        <h3 className="h-[160px] text-[#fff} leading-[160px] text-center bg-[#364d79]">
          3
        </h3>
      </div>
      <div>
        <h3 className="h-[160px] text-[#fff} leading-[160px] text-center bg-[#364d79]">
          4
        </h3>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
