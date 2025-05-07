import { industryData } from "@/utils/data";
import Industry from "./Industry";

const IndustryList = () => {
  return (
    <div className="bg-[#F7F7F7] py-24 px-8 sm:px-12 md:px-20 flex items-start flex-col gap-32">
      {industryData.map((item) => (
        <div key={item.id}>
          <Industry
            id={item.id}
            title={item.title}
            tags={item.tags}
            badge={item.badge}
            desc1={item.desc1}
            desc2={item.desc2}
          />
        </div>
      ))}
    </div>
  );
};

export default IndustryList;
