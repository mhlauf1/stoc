import { industryData } from "@/utils/data";
import Industry from "./Industry";

const IndustryList = () => {
  return (
    <div className="bg-[#F7F7F7] py-20 md:py-36 px-8 sm:px-12 md:px-20">
      <div className="max-w-[80vw] mx-auto flex flex-col">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-gambetta leading-tight tracking-tight">
            Tailored Industry Solutions <br />
            <span className="italic font-gambetta">
              Delivered with Precision
            </span>
          </h2>
          <p className="tracking-tight w-full md:max-w-[84ch] text-lg text-neutral-800">
            STOC is a business advisory firm specializing in accounting,
            finance, and operations. We partner with our clients to successfully
            prepare and execute all aspects of changes experienced across the
            business.
          </p>
        </div>
        <div className="w-full h-[1px] bg-black/10 my-12"></div>

        <div className="flex items-start flex-col gap-12">
          {industryData.map((item, idx) => (
            <Industry
              Icon={item.Icon}
              key={item.id}
              src={item.src}
              supportText={item.supportText}
              id={item.id}
              title={item.title}
              tags={item.tags}
              badge={item.badge}
              desc1={item.desc1}
              desc2={item.desc2}
              reverse={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryList;
