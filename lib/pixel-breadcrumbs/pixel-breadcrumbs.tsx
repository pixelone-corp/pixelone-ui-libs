import React from "react";
import { Breadcrumb } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

export interface BreadcrumbsProps {
  className: string;
  data: any;
}

const StyledPixelBreadcrumbs = styled(Breadcrumb)`
  ol {
    margin: 0;
  }
  .breadcrumb-item {
    a {
      text-decoration: none;
      color: #949fb1;
      font-weight: 500;
    }
    &.active {
      color: #242d3e;
      font-weight: 600;
      &:before {
        opacity: 0.6 !important;
      }
    }
    &:before {
      content: " " !important;
      width: 12px;
      height: 16px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNDQ4Yy04LjE4OCAwLTE2LjM4LTMuMTI1LTIyLjYyLTkuMzc1Yy0xMi41LTEyLjUtMTIuNS0zMi43NSAwLTQ1LjI1TDE3OC44IDI1Nkw0MS4zOCAxMTguNmMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNXMzMi43NS0xMi41IDQ1LjI1IDBsMTYwIDE2MGMxMi41IDEyLjUgMTIuNSAzMi43NSAwIDQ1LjI1bC0xNjAgMTYwQzgwLjM4IDQ0NC45IDcyLjE5IDQ0OCA2NCA0NDh6Ii8+PC9zdmc+);
      background-repeat: no-repeat;
      background-position: center center;
      float: none !important;
      margin-right: 5px;
      opacity: 0.4;
    }
  }
`;

export const PixelBreadcrumbs = React.forwardRef<
  HTMLDivElement,
  BreadcrumbsProps
>(({ className, data, ...rest }, ref) => {
  return (
    <StyledPixelBreadcrumbs>
      {data.length &&
        data.map((item, index) => (
          <Breadcrumb.Item
            linkAs={item.link ? Link : undefined}
            key={index}
            active={item.active}
            linkProps={{ to: item.link }}
          >
            {item.name}
          </Breadcrumb.Item>
        ))}
    </StyledPixelBreadcrumbs>
  );
});
export default PixelBreadcrumbs;
