import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

export interface TagProps {
  className:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  textColor: string;
}

export const PixelTag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className = "Primary", textColor = "white", children, ...rest }, ref) => {
    return (
      <PixelTagStyled>
        <Badge
          className={className}
          bg={className}
          pill
          as={"span"}
          ref={ref}
          {...rest}
        >
          {children}
        </Badge>
      </PixelTagStyled>
    );
  }
);
const PixelTagStyled = styled.div`
  .primary {
    padding: 3px 6px !important;
    
  }
`;
export default PixelTag;
