import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "p" | "label";
  size?: "xxs" | "xs" | "base" | "md" | "lg" | "xl";
  className?: string;
}

const typographyDict = {
  label: "font-semibold",
  p: "font-medium",
  xxs: "text-[11px]",
  xs: "text-[12px]",
  base: "text-[14px]",
  md: "text-[16px]",
  lg: "text-[18px]",
  xl: "text-[24px]",
};

const Typography = ({
  children,
  variant = "p",
  size = "base",
  className = "",
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) => {
  const style =
    `${typographyDict[variant]} ${typographyDict[size]} ${className}`.trim();
  return (
    <p className={`${style}`} {...props}>
      {children}
    </p>
  );
};

export default Typography;
