import ForecastElement from "../elements/ForecastElement";
import WeatherImage from "../elements/WeatherImage";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HourlyForecast({ weather }: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 760 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 760, min: 0 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
  };

  return (
    <div>
      <h2 className="uppercase border-b  mb-8">hourly forecast</h2>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {weather.hourly.map((item: any) => {
          return (
            <ForecastElement
              title={item.title}
              icon={<WeatherImage weather={item} />}
              temperature={`${item.temp.toFixed()}°`}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
