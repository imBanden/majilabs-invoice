import React, { useState } from "react";
import Typography from "./typography";
import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";

const ItemBox = () => {
  const [isHovering, setIsHovering] = useState<boolean>();
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={cn(
          "absolute -left-10 flex justify-center items-center transition-all",
          !isHovering && "opacity-0"
        )}
      >
        <button
          type="button"
          className="hover:bg-label/10 rounded-md h-8 w-8 flex justify-center items-center transition-all"
        >
          <Trash className="w-[15px] h-[15px] text-label/50" />
        </button>
      </div>
      <div className="flex justify-between items-center w-full transition-all">
        <input
          className="outline-none w-full text-sm text-invoiceBlue text-left border-b  h-[3.375rem] focus-within:border-invoiceBlue [&:hover:not(:focus-within)]:border-black/20"
          placeholder="Item name"
        />
        <input
          className="outline-none w-full text-sm text-invoiceBlue text-left border-b  h-[3.375rem] focus-within:border-invoiceBlue [&:hover:not(:focus-within)]:border-black/20 max-w-[56px]"
          placeholder="Qty"
        />
        <input
          className="outline-none w-full text-sm text-invoiceBlue text-left border-b  h-[3.375rem] focus-within:border-invoiceBlue [&:hover:not(:focus-within)]:border-black/20 max-w-[76px]"
          placeholder="Price"
        />
      </div>
    </div>
  );
};

export default ItemBox;
