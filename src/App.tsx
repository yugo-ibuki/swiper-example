import "swiper/css";
import "swiper/css/effect-cube";
import { Pagination, Mousewheel, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideNextButton } from "./components/SlideNextButton.tsx";
import { SlidePrevButton } from "./components/SlidePrevButton.tsx";

const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

function App() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Mousewheel, EffectCube]}
        effect="cube"
      >
        {data.map((d) => (
          <SwiperSlide key={d}>
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
