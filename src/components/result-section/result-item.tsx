import Image from "next/image";
import React from "react";

const ResultItem = (props: any) => {
  return (
    <div className="w-full mb-5">
      {props.id < 3 && (
        <div className="font-bold text-[0.875rem] text-[#202124] mb-1">
          Sponsored
        </div>
      )}
      <div className="flex gap-[12px] mb-1">
        <div>
          <div className="text-[0.875rem] text-[#202124]">{props.domain}</div>
          <div className="text-[0.75rem] text-[#4d5156]">
            {props.breadcrumb}
          </div>
        </div>
      </div>
      <div className="max-w-[535px]">
        <a
          href={props.url}
          className="text-[#1A0DAB] text-[1.25rem] hover:underline"
        >
          {props.title}
        </a>
      </div>
      <div className="max-w-[600px] text-[#4d5156] text-[0.875rem]">
        {props.description}
      </div>
    </div>
  );
};

export default ResultItem;
