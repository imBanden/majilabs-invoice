import React, { useState } from "react";
import Typography from "./ui/typography";
import Input from "./ui/input";
import InputCalendar from "./ui/input-calendar";

const InvoiceTermsStep = () => {
  return (
    <form className="flex flex-col flex-1 pt-24 w-full">
      <Typography variant="label" size="xl" className="tracking-[-0.24] pb-3">
        Invoice terms
      </Typography>
      <Input label="Invoice" placeholder="000001" />
      <InputCalendar label="Issue date" />
      <InputCalendar label="Due date" offSet={14} />
    </form>
  );
};

export default InvoiceTermsStep;
