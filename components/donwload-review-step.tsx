import React from "react";
import Typography from "./ui/typography";
import Input from "./ui/input";
import { Download, RefreshCw, Send } from "lucide-react";

const DownloadReviewStep = () => {
  return (
    <form className="flex flex-col flex-[1_1_100%] pt-24 w-full h-full">
      <div className="flex flex-col justify-center">
        <Typography
          variant="label"
          className="tracking-[-2.5px] leading-[1.05] text-[56px] text-start pb-2 "
        >
          Your invoice is ready
        </Typography>
        <Typography className="text-[20px] text-[#666666] font-normal leading-[1.6] pb-7 ">
          Take a final look before downloading it.
        </Typography>
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center text-white bg-black hover:opacity-80 h-[48px] rounded-[10px] transition-all">
            <Send className="w-[15px] h-[15px] mr-[6px]" />
            Sent to client
          </button>
          <button className="flex items-center justify-center opacity-80 hover:opacity-50 transition-all h-[48px]">
            <Download className="w-[15px] h-[15px] mr-[6px]" />
            Download
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center mt-auto">
        <button className="flex items-center justify-center opacity-80 hover:opacity-50 transition-all h-[48px]">
          <RefreshCw className="w-[15px] h-[15px] mr-[6px]" />
          Create new
        </button>
      </div>
    </form>
  );
};

export default DownloadReviewStep;
