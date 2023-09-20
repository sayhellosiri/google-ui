import Image from "next/image";
import React from "react";

const SearchTab = (props: any) => {
  return (
    <div
      className={`bg-white flex w-full lg:w-[690px] border rounded-[24px] items-center justify-between ${
        props.scrollDown
          ? "border-[#dfe1e5] min-h-[32px]"
          : "shadow-[0_2px_5px_1px_rgba(64,60,67,0.16)] min-h-[44px] border-transparent"
      }`}
    >
      <div className="relative w-[16px] h-[16px] block lg:hidden ml-4">
        <Image src="/google-search-gray.png" alt="google-search" fill />
      </div>
      <div className="text-black ml-5">รับจัดสวน</div>
      <div className="flex items-center">
        <div className="relative w-[14px] h-[14px] mr-4 hidden lg:block">
          <Image src="/multiply-1.png" alt="close-icon" fill />
        </div>
        <div className="w-[2px] h-[24px] bg-[#dadce0] hidden lg:block" />
        <div className="flex items-center gap-[16px] pr-3 pl-2">
          <div
            className={`relative ${
              props.scrollDown ? "w-[20px] h-[20px]" : "w-[24px] h-[24px]"
            }`}
          >
            <Image src="/google-voice.png" alt="google-voice" fill />
          </div>
          <div
            className={`relative ${
              props.scrollDown ? "w-[23px] h-[22px]" : "w-[28px] h-[28px]"
            }`}
          >
            <Image src="/google-lens-1.png" alt="google-lens" fill />
          </div>
          <div
            className={`relative hidden lg:block ${
              props.scrollDown ? "w-[14px] h-[14px]" : "w-[16px] h-[16px]"
            }`}
          >
            <Image src="/google-search.png" alt="google-search" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
