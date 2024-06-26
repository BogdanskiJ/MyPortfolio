import styled from "styled-components";

import p1 from "../../images/projekt6.png";
import p2 from "../../images/projekt8.png";
import p3 from "../../images/projekt5.png";
import p4 from "../../images/projekt5.webp";

export const StyledImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  z-index: 1;
`;

export const StyledImage3 = styled.div`
  height: 100vh;
  width: 100%;
  background-position: top 5% left 6%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 15%;
  background-image: url(${p4});

  @media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
    background-size: 18%;
  }
  @media screen and ((max-width: ${({ theme }) => theme.breakpoint.md})) {
    background-size: 20%;
  }
  @media screen and ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
    background-size: 25%;
  }
`;
