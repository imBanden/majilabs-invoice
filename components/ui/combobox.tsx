"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typography from "./typography";
import Image from "next/image";
import { title } from "process";

const currencies = [
  {
    value: "usd",
    title: "US Dollar",
    label: "USD",
  },
  {
    value: "eur",
    title: "Euro",
    label: "EUR",
  },
  {
    value: "gbp",
    title: "British Pound",
    label: "GBP",
  },
];

const ComboBox = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("usd");
  return (
    <div className="flex justify-between items-center h-[3.375rem] border-b w-full border-[#ebebeb] focus-within:border-invoiceBlue [&:hover:not(:focus-within)]:border-black/20 transition-all">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            aria-expanded={open}
            className="w-full justify-between flex items-center"
          >
            <Typography className="whitespace-nowrap mr-2 ">
              Currency
            </Typography>
            <div className="flex items-center">
              <Typography className="flex items-center bg-black/[0.03] p-1 px-2 rounded-full mr-2">
                <Image
                  loading="lazy"
                  src={`https://cdn.acctual.com/currency/${value}.svg`}
                  width="16"
                  height="16"
                  alt="Flag of USA"
                  className="w-[16px] h-[16px] rounded-full mr-1"
                />
                {currencies.find((currency) => currency.value === value)?.label}
              </Typography>

              <ChevronDown
                className={cn(
                  "w-[15px] h-[15px] transition-all",
                  open && "rotate-180"
                )}
              />
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[405px] p-0">
          <Command>
            <CommandInput placeholder="Select a currency..." className="h-9" />
            <CommandList>
              <CommandEmpty>No currency found.</CommandEmpty>
              <CommandGroup>
                {currencies.map((currency) => (
                  <CommandItem
                    key={currency.value}
                    value={currency.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center h-[42px] p-0">
                      <Image
                        loading="lazy"
                        src={`https://cdn.acctual.com/currency/${currency.value}.svg`}
                        width="20"
                        height="20"
                        alt="Flag"
                        className="w-[20px] h-[20px] rounded-full mr-1"
                      />
                      <Typography className="ml-2.5">
                        {currency.title}
                      </Typography>
                      <Typography className="ml-2 text-black/50">
                        {currency.label}
                      </Typography>
                    </div>

                    <Check
                      className={cn(
                        "ml-auto text-white bg-invoiceBlue rounded-full w-[15px] h-[15px] p-1 font-bold",
                        value === currency.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ComboBox;
