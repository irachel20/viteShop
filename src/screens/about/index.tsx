import {
  AuthenticIconSvg,
  DeliveryIconSvg,
  TwentyfoursevenIconSvg,
} from "@/assets/svgs";
import { Card } from "@/components";
import { Title } from "@/components/headingTitle";
import "./index.css";

const teamDetails = [
  { src: "/prof1.png" },
  { src: "/prof2.png" },
  { src: "/prof3.png" },
  { src: "/prof4.png" },
  { src: "/prof5.png" },
  { src: "/prof6.png" },
  { src: "/prof7.png" },
  { src: "/prof8.png" },
  { src: "/prof9.png" },
  { src: "/prof10.png" },
  { src: "/prof11.png" },
  { src: "/prof12.png" },
];

const modelsDetails = [
  { src: "/aboutmodel4.png" },
  { src: "/aboutmodel1.png" },
  { src: "/aboutmodel2.png" },
  { src: "/aboutmodel3.png" },
  { src: "/aboutmodel4.png" },
  { src: "/aboutmodel2.png" },
];

export function About() {
  return (
    <div>
      <video src="/fashion.webm" className="w-screen" autoPlay loop></video>
      <div className="bg-blue-100 gap-10 justify-center flex service-provided py-3 flex-wrap">
        <DeliveryIconSvg className="w-48" />
        <AuthenticIconSvg className="w-48" />
        <TwentyfoursevenIconSvg className="w-48" />
      </div>
      <Title
        top="if you're curious"
        main="HERE EVERYTHING ABOUT US"
        bottom="read about our team and our goals"
      ></Title>
      <div className="flex flex-col text-center items-center gap-5">
        <h3 className="w-3/4">
          our models When we started Avion, the idea was simple. Make high
          quality furniture affordable and available for the mass market.
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </h3>
        <div className="flex flex-wrap justify-center gap-5 px-3">
          {modelsDetails.map((modelsDetails) => (
            <Card
              className="cursor-pointer"
              {...modelsDetails}
              key={modelsDetails.src}
            />
          ))}
        </div>
      </div>
      <div className="flex bg-gray-50 mt-10 flex-col items-center justify-center">
      <Title top="if you're curious" className="!mt-5" main="OUR TEAM MEMBERS"></Title>
      <div className="flex flex-col text-center  items-center gap-8">
        <h3 className="w-3/4">
          our models When we started Avion, the idea was simple. Make high
          quality furniture affordable and available for the mass market.
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </h3>
        <div className="flex team flex-wrap justify-center gap-5 px-auto mb-8 w-1/2">
          {teamDetails.map((teamDetails) => (
            <img
              className="cursor-pointer"
              {...teamDetails}
              key={teamDetails.src}
            />
          ))}
        </div>
      </div>

      </div>
      <Title
        top="if you're curious"
        main="OUR FUTURE GOALS"
        bottom="you wanna know our secrets here you are"
      ></Title>
      <div className="goal-section justify-center flex flex-wrap px-12 mb-12">
        <div className="w-1/4 goals flex flex-col items-center">
          <h1 className="font-extrabold text-xl me-auto ms-10">1.</h1>
          <p className="w-3/4 text-start">
            furniture and homeware is what we live, breathe and design so our
            Chelsea boutique become the hotbed for the London interior.
          </p>
        </div>
        <div className="w-1/4 goals flex flex-col items-center">
          <h1 className="font-extrabold text-xl me-auto ms-10">2.</h1>
          <p className="w-3/4 text-start">
            furniture and homeware is what we live, breathe and design so our
            Chelsea boutique become the hotbed for the London interior design .
          </p>
        </div>
        <div className="w-1/4 goals flex flex-col items-center">
          <h1 className="font-extrabold text-xl me-auto ms-10">3.</h1>
          <p className="w-3/4 text-start">
            furniture and homeware is what we live, breathe and design so our
            Chelsea boutique become the hotbed.
          </p>
        </div>
        <div className="w-1/4 goals flex flex-col items-center">
          <h1 className="font-extrabold text-xl me-auto ms-10">4.</h1>
          <p className="w-3/4 text-start">
            furniture and homeware is what we live, breathe and design so our
            Chelsea boutique become the hotbed for the London interior design
            community.
          </p>
        </div>
      </div>
    </div>
  );
}
