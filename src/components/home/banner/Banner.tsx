import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <div className="py-[65px]">
      <div className="max-w-[1170px] flex ml-auto mr-auto relative">
        <div className="flex w-6/12">
          <div className="flex relative w-full flex-wrap items-start p-[15px]"></div>
        </div>
        <div className="flex w-6/12">
          <div className="flex relative w-full flex-wrap items-start p-[15px]">
            <div className="w-full">
              <div className="bg-[#d99ca4] p-[30px]">
                <h1 className="text-[76px] text-[#211F19]">For your true beauty</h1>
              </div>
              <div className="bg-[#6f4a4f] p-[30px]">
                <div className="flex">
                    <div className="w-[69.332%]">
                        <div className="pr-10">

                        <p className="mb-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis. </p>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <div className="w-full flex items-start justify-center border-[#d99ca4] border-solid border leading-4 text-xs px-6 py-3">
                        <Link href={"/"} ><span className="text-white uppercase font-bold">Shop now</span></Link>

                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
