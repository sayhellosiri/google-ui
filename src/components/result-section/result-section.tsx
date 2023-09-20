import React from "react";
import { resultArray } from "./result-array";
import ResultItem from "./result-item";

const ResultSection = () => {
  return (
    <div className="lg:pl-[230px] w-full pt-12 pb-12">
      {resultArray.items.map((item: any, index: any) => {
        return (
          <ResultItem
            key={item.rank_group}
            id={index}
            title={item.title}
            domain={item.domain}
            breadcrumb={item.breadcrumb}
            url={item.url}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default ResultSection;
