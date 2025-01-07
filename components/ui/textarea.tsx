import React from "react";

interface TextAreaProps {
  placeholder: string;
}

const TextArea = ({ placeholder }: TextAreaProps) => {
  return (
    <div className="flex justify-between items-center h-[3.375rem] border-b w-full border-[#ebebeb] focus-within:border-invoiceBlue [&:hover:not(:focus-within)]:border-black/20 transition-all">
      <input
        className="outline-none w-full text-sm text-invoiceBlue text-left"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
