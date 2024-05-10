import { Splide, SplideProps, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./index.css";

export function Slider(props: SplideProps) {
  return (
    <Splide
      {...props}
      options={{
        rewind: false,
        autoplay: true,
        pauseOnHover: true,
        interval: 3000,
        type: "loop",
      }}
      aria-label="React Splide Example"
    >
      <SplideSlide>
        <img
          src="/heromodelL1.jpg"
          className="w-screen h-full"
          alt="Image 1"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/heroO.png"
          className="w-screen bg-blue-200 h-full"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/heromodelL2.jpg"
          className="w-screen h-full"
          alt="Image 3"
        />
      </SplideSlide>
    </Splide>
  );
}
