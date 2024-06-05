import React from "react";
import { Link } from "react-router-dom";

export default function Breadcum(props) {
  return (
    <div className="gi-breadcrumb mb-[40px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="flex flex-wrap m-0 p-[15px] border-[1px] border-solid border-[#eee] rounded-b-[5px] border-t-[0] gi_breadcrumb_inner">
              <div className="min-[768px]:w-[50%] w-full px-[12px]">
                <h2 className="gi-breadcrumb-title text-[#4b5966] block text-[15px] font-Poppins leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                  {props.title}
                </h2>
              </div>
              <div className="min-[768px]:w-[50%] w-full px-[12px]">
                {/* gi-breadcrumb-list start */}
                <ul className="gi-breadcrumb-list text-right max-[767px]:text-center">
                  <li className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                    <Link to="/" className="relative text-[#4b5966]">
                      Home
                    </Link>
                  </li>
                  <li className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize active">
                    {props.title}
                  </li>
                </ul>
                {/* gi-breadcrumb-list end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
