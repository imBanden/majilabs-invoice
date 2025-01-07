import React from "react";
import Typography from "./typography";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="flex justify-between items-center h-[3.375rem] border-b w-full border-[#ebebeb] focus-within:border-invoiceBlue [&:hover:not(:focus-within)]:border-black/20 transition-all">
      <Typography className="whitespace-nowrap mr-2 ">{label}</Typography>
      <input
        className="outline-none w-full text-sm text-invoiceBlue text-right"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
