import React from "react";
import Typography from "./ui/typography";
import Image from "next/image";

const itemList = ["temp"];

const invoice = () => {
  return (
    <>
      {/*Top */}
      <div className="flex h-full max-h-[56px] flex-col border rounded-t-[14px] border-invoice transition-all cursor-pointer hover:bg-black/[0.02]">
        <div className="flex h-full items-center justify-between px-8">
          <div>
            <Typography
              size="xxs"
              variant="label"
              className="text-invoice-light"
            >
              INVOICE NO
            </Typography>
            <Typography size="xxs" variant="label">
              000001
            </Typography>
          </div>
          <div className="flex min-w-[44%] pl-0">
            <div>
              <Typography
                size="xxs"
                variant="label"
                className="text-invoice-light"
              >
                ISSUED
              </Typography>
              <Typography size="xxs" variant="label">
                08/01/25
              </Typography>
            </div>
            <div className="ml-6">
              <Typography
                size="xxs"
                variant="label"
                className="text-invoice-light"
              >
                DUE DATE
              </Typography>
              <Typography size="xxs" variant="label">
                22/01/25
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="grid grid-cols-2">
        <div className="px-8 py-6 hover:bg-black/[0.02] cursor-pointer border border-t-0 border-r-0 border-invoice">
          <Typography
            className="text-invoice-light pb-2.5"
            size="xxs"
            variant="label"
          >
            FROM
          </Typography>
          <div className="mb-4 bg-invoice w-[45px] h-[45px] rounded-full"></div>
          <div className="mb-1.5 bg-invoice w-[160px] h-[20px] rounded"></div>
          <div className="mb-4 bg-invoice w-[140px] h-[16px] rounded"></div>
          <div className="mb-1.5 bg-invoice w-[120px] h-[16px] rounded"></div>
          <div className="mb-1.5 bg-invoice w-[80px] h-[16px] rounded"></div>
          <div className="bg-invoice w-[60] h-[16px] rounded"></div>
        </div>
        <div className="px-8 py-6 hover:bg-black/[0.02] cursor-pointer border border-t-0 border-invoice">
          <Typography
            className="text-invoice-light pb-2.5"
            size="xxs"
            variant="label"
          >
            To
          </Typography>
          <div className="mb-4 bg-invoice w-[45px] h-[45px] rounded-full"></div>
          <div className="mb-1.5 bg-invoice w-[160px] h-[20px] rounded"></div>
          <div className="mb-4 bg-invoice w-[140px] h-[16px] rounded"></div>
          <div className="mb-1.5 bg-invoice w-[120px] h-[16px] rounded"></div>
          <div className="mb-1.5 bg-invoice w-[80px] h-[16px] rounded"></div>
          <div className="bg-invoice w-[60] h-[16px] rounded"></div>
        </div>
      </div>
      {/* Thrid */}
      <div className="px-8 py-6 flex grow flex-col overflow-auto hover:bg-black/[0.02] cursor-pointer border border-t-0 border-invoice">
        <div className="grid grid-cols-[308px,1fr] text-invoice-light">
          <Typography size="xxs" variant="label">
            DESCRIPTION
          </Typography>
          <div className="grid grid-cols-[85px,1fr,1fr]">
            <Typography size="xxs" variant="label">
              QTY
            </Typography>
            <Typography size="xxs" variant="label">
              PRICE
            </Typography>
            <Typography size="xxs" variant="label" className="text-right">
              AMOUNT
            </Typography>
          </div>
        </div>
        {itemList.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[308px,1fr] py-4 border-b border-invoice"
          >
            <Typography
              size="xxs"
              variant="label"
              className="truncate max-w-[240px]"
            >
              temp
            </Typography>
            <div className="grid grid-cols-[85px,1fr,1fr] text-invoice-dark">
              <Typography size="xs">2</Typography>
              <Typography size="xs">100,000.00</Typography>
              <Typography size="xs" className="text-right">
                200,000.00
              </Typography>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-[calc(50%+34px),1fr]">
          <div className="py-3 pr-6"></div>
          <div>
            <div className="grid min-h-[49px] py-3 border-b border-invoice text-invoice-light items-center grid-cols-3">
              <Typography size="xs">Subtotal</Typography>
              <Typography
                size="xs"
                className="text-invoice-dark col-span-2 flex justify-end truncate"
              >
                $200,000.00
              </Typography>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[calc(50%+34px),1fr]">
          <div className="py-3 pr-6"></div>
          <div>
            <div className="grid min-h-[49px] py-3 border-b border-invoice items-center grid-cols-3">
              <Typography size="xs" className="text-invoice-light">
                Total
              </Typography>
              <Typography
                size="md"
                className="col-span-2 flex justify-end truncate"
              >
                $200,000.00
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth */}
      <div className="border rounded-b-[14px] border-t-0 border-invoice transition-all cursor-pointer hover:bg-black/[0.02]">
        <div>
          <div className="grid grid-cols-2 pt-[3px]">
            <Typography
              size="xxs"
              variant="label"
              className="text-invoice-light px-8 pt-6"
            >
              PAYABLE IN
            </Typography>
            <Typography
              size="xxs"
              variant="label"
              className="text-invoice-light px-8 pt-6"
            >
              INSTRUCTIONS
            </Typography>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex pl-8 pt-4 items-center self-start">
              <Image
                loading="lazy"
                src={`https://cdn.acctual.com/currency/usd.svg`}
                width="28"
                height="28"
                alt="Flag of USA"
                className="w-[28px] h-[28px] rounded-full mr-2.5"
              />
              <div className="leading-tight space-y-0.5 w-full">
                <Typography>US Dollar</Typography>
                <Typography size="xxs" className="text-invoice-light">
                  USD
                </Typography>
              </div>
            </div>
            <div className="px-8 pt-4 pb-6">
              <div className="grid grid-cols-[70px,1fr] mb-2">
                <Typography
                  size="xs"
                  variant="label"
                  className="text-invoice-light"
                >
                  Account
                </Typography>
                <div className="bg-invoice w-[154px] h-[16px] rounded"></div>
              </div>
              <div className="grid grid-cols-[70px,1fr] mb-2">
                <Typography
                  size="xs"
                  variant="label"
                  className="text-invoice-light"
                >
                  Account
                </Typography>
                <div className="bg-invoice w-[154px] h-[16px] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default invoice;
