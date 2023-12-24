import "swiper/css";
import "swiper/css/bundle";
import { Pagination, Mousewheel, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideNextButton } from "./components/SlideNextButton.tsx";
import { SlidePrevButton } from "./components/SlidePrevButton.tsx";

const data: { title: string; img: string }[] = [
  {
    title: "Slide 1",
    img: "/1.jpeg",
  },
  {
    title: "Slide 2",
    img: "/2.jpeg",
  },
  {
    title: "Slide 3",
    img: "/3.jpeg",
  },
  {
    title: "Slide 4",
    img: "/4.jpeg",
  },
];

function App() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Mousewheel, Parallax]}
        parallax
      >
        {data.map((d) => (
          <SwiperSlide key={d.title}>
            <div
              style={{
                backgroundImage: `url(${d.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0",
                objectFit: "contain",
                height: "300px",
                width: "100%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquam animi nihil, optio perspiciatis quos sequi vitae. Adipisci
              animi atque eos et laboriosam magni natus vel? Autem consequuntur
              cum dolores eius impedit modi nobis optio sit sunt, unde? Atque
              dolor esse fuga minus quibusdam quis rem sapiente suscipit
              voluptatem voluptates?
            </div>
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
