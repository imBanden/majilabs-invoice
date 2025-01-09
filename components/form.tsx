"use client";
import React, { useState } from "react";
import Typography from "./ui/typography";
import Link from "next/link";
import Image from "next/image";
import CompanyStep from "./company-step";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ClientStep from "./client-step";
import InvoiceDetailsStep from "./invoice-details-step";
import PaymentMethodStep from "./payment-method-step";
import InvoiceTermsStep from "./invoice-terms-step";
import DownloadReviewStep from "./donwload-review-step";

const stepTitles = [
  "Your company",
  "Your client",
  "Invoice details",
  "Payment method",
  "Invoice terms",
  "Review & download",
];

const Form = () => {
  const [currentStep, setCurrentStep] = useState<number>(2);

  const handlePrevStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const handleNextStep = () => {
    if (currentStep !== 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col p-[48px] items-start w-full h-full min-h-screen border-r border-black/[0.07]">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            priority
            src={"majilabs-logo.svg"}
            width={32}
            height={32}
            alt={"logo of majilabs"}
          />
        </Link>
        <div className="flex flex-col pl-3 leading-none gap-[3px]">
          <Link href={"/"}>
            <Typography
              variant="label"
              size="md"
              className="tracking-[-0.42px]"
            >
              Crypto Invoice Generator
            </Typography>
          </Link>
          <Link target="_blank" href={"https://majilabs.com/"}>
            <Typography size="xs" className="text-[#26262666]">
              By majilabs
            </Typography>
          </Link>
        </div>
      </div>

      {currentStep === 0 && <CompanyStep />}
      {currentStep === 1 && <ClientStep />}
      {currentStep === 2 && <InvoiceDetailsStep />}
      {currentStep === 3 && <PaymentMethodStep />}
      {currentStep === 4 && <InvoiceTermsStep />}
      {currentStep === 5 && <DownloadReviewStep />}
      <div className="flex justify-between gap-[20px] w-full pt-10">
        {currentStep !== 0 ? (
          <button
            className="flex flex-col flex-1 hover:bg-black/[0.02] rounded-md px-3 py-2"
            onClick={handlePrevStep}
          >
            <div className="flex space-x-2 justify-start items-center -ml-1">
              <ChevronLeft className="w-[14px] h-[14px] stroke-black/60" />
              <Typography>
                <span className="text-black/60">Back</span>
              </Typography>
            </div>
            <Typography>{stepTitles[currentStep - 1]}</Typography>
          </button>
        ) : (
          <div className="flex flex-col flex-1 rounded-md px-3 py-2"></div>
        )}
        {currentStep !== 5 ? (
          <button
            className="flex flex-col flex-1 hover:bg-black/[0.02] rounded-md px-3 py-2 items-end"
            onClick={handleNextStep}
          >
            <div className="flex space-x-2 justify-end items-center -mr-1">
              <Typography>
                <span className="text-black/60">Next</span>
              </Typography>
              <ChevronRight className="w-[14px] h-[14px] stroke-black/60 object-contain" />
            </div>
            <Typography>{stepTitles[currentStep + 1]}</Typography>
          </button>
        ) : (
          <div className="flex flex-col flex-1 rounded-md px-3 py-2"></div>
        )}
      </div>
    </div>
  );
};

export default Form;
