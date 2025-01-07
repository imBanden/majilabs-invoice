import React from "react";
import Typography from "./ui/typography";
import Input from "./ui/input";

const ClientStep = () => {
  return (
    <form className="flex flex-col flex-1 pt-24 w-full">
      <Typography variant="label" size="xl" className="tracking-[-0.24] pb-3">
        Your client
      </Typography>
      <Input label="Email" placeholder="e.g. info@acme.inc" />
      <Typography className="text-label pt-3 pb-10" size="xs">
        We'll fill the billing details automatically if we find the company.
      </Typography>
      <Typography className="text-label pb-2" size="base">
        Billing details
      </Typography>
      <Input label="Company name" placeholder="Acme Inc" />
      <Input label="Logo" placeholder="Add logo here" />
      <Input label="Address" placeholder="Mission Street, 79" />
      <Input label="City" placeholder="San Francisco" />
      <Input label="State" placeholder="California" />
      <Input label="Zip" placeholder="94016" />
      <Input label="Country" placeholder="United States" />
      <Input label="Tax ID" placeholder="0123VS" />
    </form>
  );
};

export default ClientStep;
