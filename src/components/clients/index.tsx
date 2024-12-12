import Image from "next/image";
import RoadmapElement from "../ui/roadmap";

const ClientSection = () => {
  return (
    <section id="client" className=" bg-primary">
      <div className="md:px-[100px] px-[24px] py-[60px] mx-auto max-w-[1536px] tracking-[-1%] flex md:flex-row flex-col justify-between md:items-center">
        <div>
          <p className="uppercase text-[16px] pb-[10px]">The DDDM</p>
          <h2 className="md:text-[54px] text-[32px] font-bold leading-[100%]">
            We Design,
            <br />
            Develop, Deliver
            <br />
            and Maintain
          </h2>
        </div>

        <div className="md:w-[640px] w-full md:text-[20px] mt-[24px]  md:leading-[24px] leading-[18px] md:mt-0 text-[15px]">
          <p>
            From <span className="font-bold">concept to launch</span>, we
            provide reliable{" "}
            <span className="font-bold">full-stack development services</span>.
            Our team specializes in <span className="font-bold">designing</span>
            , <span className="font-bold">building</span>, and maintaining
            high-quality MVPs and scalable applications,{" "}
            <span className="font-bold">bringing your vision</span>to life
          </p>
        </div>
      </div>
      <div className="md:px-[100px] px-[24px] py-[60px] mx-auto max-w-[1536px] tracking-[-1%] flex md:flex-row flex-col justify-between md:items-center gap-4">
        <div>
          <h3 className="font-medium md:text-[27px] text-[16px] mb-6">
            The Roadmap
          </h3>
          <div className="flex flex-col flex-nowrap items-start">
            <RoadmapElement
              title="Day 1 · Brief"
              description="Share your goals and product details. Make sure were a good fit."
              indicatorClass="!bg-blue-400"
            />
            <RoadmapElement
              title="Day 2 · Book"
              description="Pay upfront, secure your spot and lock in your price."
              indicatorClass="!bg-yellow-400"
            />
            <RoadmapElement
              title="Week 2 to 3 · Design Delivery"
              description="We create your custom MVP design, a front-end prototype."
              indicatorClass="!bg-green-400"
            />
            <RoadmapElement
              title="Week 3 to 8 · Product Delivery"
              description="Receive your working customer ready MVP."
              indicatorClass="!bg-violet-400"
              endElement
            />
          </div>
        </div>
        <div className="md:w-[640px] w-full md:text-[20px] mt-[24px]  md:leading-[24px] leading-[18px] md:mt-0 text-[15px] flex items-center justify-center">
          <Image
            src={"/assets/project/project-4.webp"}
            width={897}
            height={966}
            alt="Keizer Roadmap"
            className="w-full max-w-[400px] h-auto aspect-[897/966] rounded-[20px] "
          />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ClientSection;
