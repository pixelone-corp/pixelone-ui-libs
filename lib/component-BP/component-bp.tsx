import React from "react";
import styled from "styled-components";

export interface NAMEHEREProps {
  className: string;
}

const StyledPixelNAMEHERE = styled.div``;

export const PixelNAMEHERE = React.forwardRef<HTMLDivElement, NAMEHEREProps>(
  ({ className, ...rest }, ref) => {
    return <StyledPixelNAMEHERE></StyledPixelNAMEHERE>;
  }
);
export default PixelNAMEHERE;
