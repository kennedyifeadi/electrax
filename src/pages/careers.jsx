import plane1 from "../assets/Images/careers.avif";
import values from "../assets/Images/values abstract 2.avif";
import Carousel from "../components/layout/carousel";
import Button from "../components/ui/Buttons";
const coreValues = [{
  title:"Innovation",
  body:"We push the boundaries of aviation, integrating advanced technology to enhance performance and safety."
},{
  title:"Craftsmanship",
  body:"Our focus on precision engineering and attention to detail ensures top-tier quality in every aircraft."
},{
  title:"Heritage",
  body:"We honor aviation’s legacy by blending classic design with modern engineering for a timeless flying experience."
},{
  title:"Excellence",
  body:"We strive for excellence in every detail, from the materials we use to the performance of our planes."
},{
  title:"Customer-Centricity",
  body:"Our customers are our priority. We provide tailored solutions and exceptional service to meet their needs."
},{
  title:"Performance-Driven",
  body:"Every decision we make is geared toward maximizing the performance and reliability of our aircraft."
},]
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
        <h1 className="capitalize text-[2.5rem] font-semibold text-[#333333] px- ">
          We make cool things
        </h1>
        <Carousel />
      </div>
      {/* section 3 */}
      <div className="grid grid-cols-2 h-screen px-8 ">
        <span className="flex  items-center">
          <img src={values} alt="core values" className=" rounded-[2rem] w-[80%] h-[98%] " />

        </span>
        <div className="mt-10 flex flex-col gap-8 ">
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
    </div>
  );
};
