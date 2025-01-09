import React, { useState } from "react";
import Typography from "./ui/typography";
import Input from "./ui/input";
import TextArea from "./ui/textarea";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import ComboBox from "./ui/combobox";
import ItemBox from "./ui/itemsbox";

const InvoiceDetailsStep = () => {
  const [optionDrawer, setOptionDrawer] = useState<Boolean>(false);
  const [itemList, setItemList] = useState([0]);
  const handleAddItem = () => {
    setItemList((prev) => [...prev, prev.length]);
  };
  return (
    <form className="flex flex-col flex-1 pt-24 w-full">
      <Typography variant="label" size="xl" className="tracking-[-0.24] pb-3">
        Invoice details
      </Typography>
      <ComboBox />

      <div className="mb-7 mt-10">
        <Typography className="text-label pb-2" size="base">
          Items
        </Typography>
        {itemList.map((item) => (
          <ItemBox key={item} />
        ))}
        <button
          type="button"
          onClick={handleAddItem}
          className="flex items-center h-[3.375rem] border-b w-full border-[#ebebeb] focus-within:border-invoiceBlue [&:hover:not(:focus-within)]:border-black/20 transition-all text-[#0167ff]"
        >
          <Plus className="w-[15px] h-[15px] mr-2" />
          <Typography>Add item</Typography>
        </button>
        <Typography className="text-label pb-2 mt-6" size="base">
          Note
        </Typography>
        <TextArea placeholder="Add a note" />
      </div>

      <button
        className="flex justify-between items-center text-label pb-2 hover:bg-black/[0.02] hover:text-black/80 rounded-md px-3 py-3 -mx-3 transition-all"
        onClick={() => setOptionDrawer((prev) => !prev)}
        type="button"
      >
        <Typography>More options</Typography>
        <ChevronDown
          className={cn(
            "w-[15px] h-[15px] transition-all",
            optionDrawer && "rotate-180"
          )}
        />
      </button>

      <div className={cn("pt-4 transition-all", !optionDrawer && "opacity-0")}>
        <Input label="Discount" placeholder="0.00" />
        <Input label="Taxes" placeholder="0 %" />
      </div>
    </form>
  );
};

export default InvoiceDetailsStep;
