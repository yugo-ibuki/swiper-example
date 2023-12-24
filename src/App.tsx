import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideNextButton } from "./components/SlideNextButton.tsx";
import { SlidePrevButton } from "./components/SlidePrevButton.tsx";

const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
      >
        {data.map((d) => (
          <SwiperSlide>
            <div style={{ background: "grey", height: "300px" }}>{d}</div>
          </SwiperSlide>
        ))}
        <div>
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </>
  );
}

export default App;
