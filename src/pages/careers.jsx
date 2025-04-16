import plane1 from "../assets/Images/careers.avif";
import values from "../assets/Images/values abstract 2.avif";
import Carousel from "../components/layout/carousel";
import Button from "../components/ui/Buttons";
export const Careers = () => {
  return (
    <div className="">
      <div className="py-20  px-8 bg-[#f1f1f1] w-full">
        <section className="grid grid-cols-2 gap-4 w-full ">
          <span className="flex flex-col items-start justify-center pr-8 mx-8">
            <h1 className="text-[3.7rem] font-semibold text-[#333333] mb-3">
              Join the ElectraX Team
            </h1>
            <p className="text-md/8 font-semibold text-[#333333] mb-8">
              At ElectraX, we&apos;re not just building aircraft—we&apos;re
              shaping the future of personal aviation. If you&apos;re ready to
              take your career to new heights and be part of something truly
              innovative, ElectraX could be the perfect place for you.
            </p>
            <Button text="See our open positions" />
          </span>
          <img src={plane1} alt="plane image" className="rounded-3xl" />
        </section>
      </div>
      {/* section 2 */}
      <div className=" px-8 py-20 w-full flex flex-col gap-8">
        <h1 className="capitalize text-[2.5rem] font-semibold text-[#333333] px- ">We make cool things</h1>
        <Carousel />
      </div>
      {/* section 3 */}
      <div className="grid grid-cols-2">
        <img src={values} alt="core values" />
        <div>
            <h1>Our Core Values</h1>
            <section>
              <span>
                 <img src={values} alt="core values" />
              </span>
            </section>
        </div>
      </div>
    </div>
  );
};
