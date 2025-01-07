import React from "react";
import Typography from "./ui/typography";
import Input from "./ui/input";

const PaymentMethodStep = () => {
  return (
    <form className="flex flex-col flex-1 pt-24 w-full">
      <Typography variant="label" size="xl" className="tracking-[-0.24] pb-3">
        Payment method
      </Typography>
      <Typography className="text-label pb-2" size="base">
        How would you like to get paid?
      </Typography>
      <Input label="Bank entity" placeholder="Bank of America" />
      <Input label="Account" placeholder="09224979" />
      <Input label="Routing" placeholder="996770619" />
      <Input label="SWIFT" placeholder="MYNBGQ6" />
    </form>
  );
};

export default PaymentMethodStep;
