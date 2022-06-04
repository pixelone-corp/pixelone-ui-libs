import React from "react";
import styled from "styled-components";

export interface CurrencyProps {
  className: string;
  value: any;
  currency?: string;
}

const StyledPixelCurrency = styled.span`
  font-size: inherit;
`;

const formatCurrency = (value: any, currency?: string) => {
  if (value === undefined || value === null) {
    return "--";
  }
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
  return formatter.format(value);
};

export const PixelCurrency = React.forwardRef<HTMLDivElement, CurrencyProps>(
  ({ className, value, currency, ...rest }, ref) => {
    const tenant_info: any = JSON.parse(
      localStorage.getItem("tenant_info") || "{}"
    );
    return (
      <StyledPixelCurrency ref={ref} {...rest}>
        {formatCurrency(value, tenant_info?.default_currency || "PKR")}
      </StyledPixelCurrency>
    );
  }
);
export default PixelCurrency;
