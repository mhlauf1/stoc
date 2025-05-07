import type { IndustryProps } from "@/utils/types";

const Industry = ({ id, title, tags, badge, desc1, desc2 }: IndustryProps) => {
  return (
    <div
      key={id}
      className="flex flex-col md:flex-row gap-16 justify-between items-start"
    >
      <div className="flex flex-col items-start flex-1">
        <h3 className="text-2xl md:text-4xl font-gambetta tracking-tighter mb-6">
          {title}
        </h3>
        <div className="bg-white rounded-2xl shadow-sm h-[400px] w-full">
          box
        </div>
        <div className="flex mt-4 flex-row gap-4 items-center">
          {tags.map((tag) => (
            <p key={tag} className="text-sm text-neutral-500">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start flex-1">
        <div className="flex mb-6 items-center flex-row gap-3">
          <div className="h-[6px] w-[6px] bg-green-900 rotate-45"></div>
          <span className=" text-neutral-600">{badge}</span>
        </div>
        <p className="text-neutral-600 leading-7 mb-4">{desc1}</p>
        {desc2 ? <p className="text-neutral-600 leading-7 ">{desc2}</p> : null}
      </div>
    </div>
  );
};

export default Industry;
