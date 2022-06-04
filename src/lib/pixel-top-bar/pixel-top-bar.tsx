import React from "react";
import styled from "styled-components";

export interface TopBarProps {
  className: string;
}

const StyledPixelTopBar = styled.div`
  /* position: sticky; */
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e6e6e6;
`;

export const PixelTopBar = React.forwardRef<HTMLDivElement, TopBarProps>(
  ({ className, children, ...rest }, ref) => {
    return <StyledPixelTopBar>{children}</StyledPixelTopBar>;
  }
);
export default PixelTopBar;
