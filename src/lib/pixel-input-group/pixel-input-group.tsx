import styled from "styled-components";

import React from "react";

/* eslint-disable-next-line */
export interface PixelInputGroupProps {}

const StyledPixelInputGroup = styled.div`
  color: pink;
`;

export function PixelInputGroup(props: PixelInputGroupProps) {
  return (
    <StyledPixelInputGroup>
      <h1>Welcome to PixelInputGroup!</h1>
    </StyledPixelInputGroup>
  );
}

export default PixelInputGroup;
