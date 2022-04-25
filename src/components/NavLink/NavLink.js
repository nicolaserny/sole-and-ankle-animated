import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

function NavLink({ children, props }) {
  return (
    <Wrapper {...props}>
      <TextNormal>{children}</TextNormal>
      <TextBold>{children}</TextBold>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  cursor: pointer;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transition: transform 600ms;
  will-change: transform;
  transform: translateY(var(--animation-start));
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(var(--animation-end));
    }
  }
`;

const TextNormal = styled(Text)`
  --animation-start: 0%;
  --animation-end: -100%;
`;

const TextBold = styled(Text)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  --animation-start: 100%;
  --animation-end: 0%;
`;

export default NavLink;
