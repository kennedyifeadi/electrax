import plane1 from "../assets/Images/careers.avif";
import values from "../assets/Images/values abstract 2.avif";
import Carousel from "../components/layout/carousel";
import Button from "../components/ui/Buttons";
import { PositionCard } from "../components/ui/PositionCard";
import landingImage from "../assets/Images/plane black background.avif";
import { DynamicBackground } from "../components/ui/DynamicBackground";
const coreValues = [
  {
    title: "Innovation",
    body: "We push the boundaries of aviation, integrating advanced technology to enhance performance and safety.",
  },
  {
    title: "Craftsmanship",
    body: "Our focus on precision engineering and attention to detail ensures top-tier quality in every aircraft.",
  },
  {
    title: "Heritage",
    body: "We honor aviation’s legacy by blending classic design with modern engineering for a timeless flying experience.",
  },
  {
    title: "Excellence",
    body: "We strive for excellence in every detail, from the materials we use to the performance of our planes.",
  },
  {
    title: "Customer-Centricity",
    body: "Our customers are our priority. We provide tailored solutions and exceptional service to meet their needs.",
  },
  {
    title: "Performance-Driven",
    body: "Every decision we make is geared toward maximizing the performance and reliability of our aircraft.",
  },
];
const perks = [
  {
    title: "Flexible Work Hours",
    body: "Embrace work-life balance with our flexible scheduling options, allowing you to adjust your work hours to fit your lifestyle.",
  },
  {
    title: "Remote Work Opportunities",
    body: "Enjoy the freedom to work from anywhere, with support and infrastructure designed for effective remote collaboration.",
  },
  {
    title: "Annual Wellness Stipend",
    body: "Invest in your health and wellbeing with a yearly allowance for gym memberships, fitness classes, or wellness apps.",
  },
  {
    title: "Professional Development",
    body: "Further your career with access to a dedicated fund for courses, certifications, and conferences relevant to your role.",
  },
  {
    title: "Generous Parental Leave",
    body: "Support for new parents with extended leave policies, ensuring you have ample time to spend with your newest family member.",
  },
  {
    title: "Company Retreats",
    body: "Bond with your team during all-expenses-paid retreats, blending relaxation, team-building, and strategic planning in exciting locales.",
  },
];
export const Careers = () => {
  return (
    <div className="">
      <div className="py-20  px-8 bg-[#f1f1f1] w-full">
        <section className="grid grid-cols-2 gap-4 w-full ">
          <span className="flex flex-col items-start justify-center pr-8 mx-8">
            <h1 className="text-[3.7rem] font-normal text-[#333333] mb-3">
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
        <h1 className="capitalize text-[2.5rem] font-semibold text-[#333333] px- ">
          We make cool things
        </h1>
        <Carousel />
      </div>
      {/* section 3 */}
      <div className="grid grid-cols-2 h-screen px-8 my-[10rem] text-[#333333] ">
        <span className="flex  items-center">
          <img
            src={values}
            alt="core values"
            className=" rounded-[2rem] w-[80%] h-[98%] "
          />
        </span>
        <div className="mt-10 flex flex-col ">
          <h1 className="font-semibold text-[2.6rem]">Our Core Values</h1>
          <section className="grid grid-cols-2 gap-4 ">
            {coreValues.map((item, index) => (
              <span key={index} className="flex flex-col gap-2 mt-8">
                <h1 className="font-semibold text-[1.3rem] ">{item.title}</h1>
                <p className="text-[#333333] text-[1.1rem] font-semibold">
                  {item.body}
                </p>
              </span>
            ))}
          </section>
        </div>
      </div>
      {/* section 4 */}
      <div className="h-screen bg-[#f1f1f1] text-[#333333] px-8 py-20 flex flex-col ">
        <h1 className="font-normal text-[3.3rem]">Our Perks</h1>
        <section className="grid grid-cols-3 gap-4  mt-10">
          {perks.map((item, index) => (
            <span key={index} className="flex flex-col gap-2 mt-8">
              <h1 className="font-[500] text-[1.2rem] ">{item.title}</h1>
              <p className="text-[#333333] text-[1rem]/8 font-[400] ">
                {item.body}
              </p>
            </span>
          ))}
        </section>
      </div>
      {/* section 5 */}
      <div className="px-8 my-20 grid grid-cols-3 gap-4 fit-content text-[#333333]">
        <section>
          <h1 className="font-semibold text-[2.5rem]">Open positions</h1>
          <p className="text-[1.2rem]/8 font-semibold">
            We’re always looking for talented individuals who share our passion
            for aviation and innovation. Explore our current opportunities and
            find the role that’s right for you:
          </p>
        </section>
        <section className="flex flex-col gap-16 col-span-2">
          <PositionCard
            Position="Aerospace Engineer"
            Team="Design"
            Location="Remote"
            workTime="Full Time"
          />
          <PositionCard
            Position="Industrial Designer"
            Team="Software Development"
            Location="In-house"
            workTime="Full Time"
          />
          <PositionCard
            Position="Sales Associative"
            Team="Sales"
            Location="In-house, Remote"
            workTime="Part Time"
          />
          <PositionCard
            Position="Marketing and Communication Lead"
            Team="Marketing"
            Location="In-house, Remote"
            workTime="Part Time"
          />
        </section>
      </div>
      {/* section 6 */}
      <div></div>
      {/* section 7 */}
      <div
        className="h-screen text-white bg-center flex flex-row items-center px-8"
        style={{
          backgroundImage: `url(${landingImage})`,
        }}
      >
        <section className="grid grid-cols-3 w-full  ">
          <span className="col-span-2">
            <h1 className="text-[1.5rem] ">The Future of Personal Aviation</h1>
            <h1 className="text-[4.5rem] font-normal ">Experience the Next Era of Flight</h1>
          </span>
          <span>
            <Button text="Discover the ElectraX" />
          </span>
        </section>
      </div>
    </div>
  );
};
