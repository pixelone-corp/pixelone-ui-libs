import React from "react";
import styled from "styled-components";
import moment from "moment";
export interface PixelDateprops {
  className: string;
  value: string;
  format?: string;
}
const Date = styled.span`
  color: #000000;
  font-weight: 400;
  font-size: inherit;
  line-height: 100%;
`;
const StyledPixelDate = styled.div``;

export const PixelDate = React.forwardRef<HTMLDivElement, PixelDateprops>(
  ({ className, value, format, ...rest }, ref) => {
    return (
      <StyledPixelDate>
        <Date className={className}>
          {moment(value).format(
            format === "pixelStandard"
              ? "ll"
              : format === "dateWithTime"
              ? " ll, h:mm:ss A"
              : "DD/MM/YYYY"
          )}
        </Date>
      </StyledPixelDate>
    );
  }
);
export default PixelDate;
