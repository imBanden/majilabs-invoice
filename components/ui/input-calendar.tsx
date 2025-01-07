import { format } from "date-fns";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "./typography";
import { useState } from "react";

interface InputCalendarProps {
  label: string;
  offSet?: number;
}

const InputCalendar = ({ label, offSet = 0 }: InputCalendarProps) => {
  const defaultDate = (offSet: number) => {
    const date = new Date();
    date.setDate(date.getDate() + offSet);
    return date;
  };
  const [date, setDate] = useState<Date>(defaultDate(offSet));
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex justify-between items-center h-[3.375rem] border-b w-full border-[#ebebeb] [&:hover:not(:focus-within)]:border-black/20 transition-all",
            isPopoverOpen && "border-invoiceBlue"
          )}
        >
          <Typography className="whitespace-nowrap mr-2 ">{label}</Typography>
          <Typography className="flex items-center">
            {format(date, "PP")}
            <ChevronDown
              className={cn(
                "w-[15px] h-[15px] ml-1 rotate-0 transition-all text-label",
                isPopoverOpen && "rotate-180"
              )}
            />
          </Typography>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default InputCalendar;
