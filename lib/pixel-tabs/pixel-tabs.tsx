import React from "react";
import styled from "styled-components";
import { $primaryColor } from "../styleGuide";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface TabsProps {
  className: string;
  tabs: any[];
  activeTab: any;
  handleChange: any;
}

export const PixelTabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, activeTab, handleChange, ...rest }, ref) => {
    let scrollable = React.useRef(null);
    const [scrollX, setScrollX] = React.useState(0);
    const [scrollEnd, setScrollEnd] = React.useState(true);

    const slide = (shift) => {
      scrollable.current.scrollLeft += shift;
      setScrollX(scrollX + shift);

      if (
        Math.floor(
          scrollable.current.scrollWidth - scrollable.current.scrollLeft
        ) <= scrollable.current.offsetWidth
      ) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    };

    const scrollCheck = () => {
      setScrollX(scrollable.current.scrollLeft);
      if (
        Math.floor(
          scrollable.current.scrollWidth - scrollable.current.scrollLeft
        ) <= scrollable.current.offsetWidth
      ) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    };

    React.useEffect(() => {
      scrollCheck();
    }, [tabs]);

    return (
      <TabsContainer>
        {scrollX !== 0 && (
          <Arrow
            disabled={scrollX === 0}
            className="prev"
            onClick={() => slide(-50)}
          >
            {" "}
            <FontAwesomeIcon icon={faLessThan} />
          </Arrow>
        )}
        <Tabs ref={scrollable} {...rest} onScroll={scrollCheck}>
          {tabs.map((item: any) => (
            <Tab
              className={activeTab === item.value ? "active" : ""}
              key={item.value}
              onClick={() => handleChange(item.value)}
            >
              {item.icon && <TabIcon>{item.icon}</TabIcon>}
              {item.label}
            </Tab>
          ))}
        </Tabs>
        {!scrollEnd && (
          <Arrow className="next" onClick={() => slide(+50)}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </Arrow>
        )}
      </TabsContainer>
    );
  }
);

const TabsContainer = styled.div`
  display: flex;
  border-radius: 7px;
  align-items: center;
  justify-content: flex-start;
`;

const Tabs = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: flex-start;
  background-color: #f8f9fa;
  list-style: none;
  max-width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 10px 0px;
  &::-webkit-scrollbar {
    background: transparent; /* make scrollbar transparent */
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
`;

const Tab = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #ebebeb;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #344767;
  cursor: pointer;
  border-right: none;
  margin: 0 7px;
  text-transform: capitalize;
  letter-spacing: 0.6px;
  animation: 0.2s ease;
  transition: all 0.5s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  white-space: nowrap;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.27);
  &:hover,
  &.active {
    background-color: #ffffff;
    border-color: ${$primaryColor};
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.67);
    -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.67);
  }
`;

const Arrow = styled.button`
  height: 32px;
  width: 32px;
  box-shadow: 0 2px 4px -1px #0003, 0 4px 5px #00000024, 0 1px 10px #0000001f;
  color: #212529;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0px 5px 16px 5px;
`;
const TabIcon = styled.div`
  margin-right: 10px;
  color: ${$primaryColor};
  img {
    width: 20px;
    height: 20px;
  }
`;

export default PixelTabs;
