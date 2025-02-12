import styled from 'styled-components';
import { Tabs, TabPanel } from 'react-tabs';
import { Top } from 'utils/animationToolkit';

export const StyledTabs = styled(Tabs)`
  .react-tabs__tab-list {
    display: flex;
    width: 800px;
    margin: 0;
    border: none;
    div {
      background: linear-gradient(
        5.33deg,
        #142131 95.74%,
        rgba(20, 33, 49, 0) 174.47%
      );
      border-radius: 17px 17px 0 0;
    }
    .react-tabs__tab {
      bottom: 0;
      padding: 12px 18px;
      ${({ theme }) => theme.mediaQueries.md} {
        padding: 25px 40px;
      }

      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.18em;
      color: #697e9c;
      text-transform: uppercase;

      :focus:after {
        display: none !important;
      }

      b {
        position: absolute;
        left: 50%;
        top: -2px;
        transform: translateX(-50%);
        background-color: #4fff8b;
        width: 0%;
        height: 2px;
        border-radius: 2px;
        overflow: hidden;
        transition: all 0.3s ease-in;
      }

      :hover b {
        width: 60%;
      }
    }

    .react-tabs__tab--selected {
      background: #000;
      border: 2px solid #4f617b;
      border-radius: 17px 17px 0 0;
      border-bottom: 0;
      color: #4fff8b;

      ::before {
        position: absolute;
        background: #000;
        content: '';
        display: block;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: -2px;
        pointer-events: none;
        z-index: 10;
      }

      b {
        width: 60%;
      }
    }
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  .container {
    position: relative;
    min-height: 300px;
    background: linear-gradient(to bottom, #4f617b 10px, #1a293d00 300px);
    padding: 2px;
    border-top-right-radius: 10px;
    /* animation: ${Top} 0.6s; */
    .box {
      min-height: 300px;
      border-top-right-radius: 10px;
      padding: 16px;
      ${({ theme }) => theme.mediaQueries.md} {
        padding: 38px;
      }
      background: linear-gradient(180deg, #000000 -6.46%, #0b141e 23.48%);
    }
  }
`;
