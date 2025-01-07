import React, { useState } from "react";
import Typography from "./ui/typography";
import Input from "./ui/input";
import TextArea from "./ui/textarea";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ComboBox from "./ui/combobox";

const InvoiceDetailsStep = () => {
  const [optionDrawer, setOptionDrawer] = useState<Boolean>(false);
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
        <Input label="Item" placeholder="Add your items"></Input>
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

      <div
        className={cn("pt-4 transition-all", !optionDrawer && "opacity-0 h-0")}
      >
        <Input label="Discount" placeholder="0.00" />
        <Input label="Taxes" placeholder="0 %" />
      </div>
    </form>
  );
};

export default InvoiceDetailsStep;
