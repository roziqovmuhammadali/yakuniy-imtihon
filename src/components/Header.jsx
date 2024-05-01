import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const images = [
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400"
];
class Header extends React.Component {
  constructor(props) {
    super(props);
    // Your constructor logic here
  }

  render() {
    return (
      <div>
        {" "}
        <div className="relative">
          <Carousel
            autoPlay
            interval={5000} // Change slide every 5 seconds
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
          <div className="absolute inset-y-0 left-0 flex items-center justify-center">
            <ChevronLeftIcon className="h-10 w-10 text-white bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-center">
            <ChevronRightIcon className="h-10 w-10 text-white bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-70" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
