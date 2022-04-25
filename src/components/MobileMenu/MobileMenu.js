/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes, css } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { Transition } from "react-transition-group";

const MobileMenu = ({ isOpen, onDismiss }) => {
  const ref = React.useRef();
  return (
    <Transition
      nodeRef={ref}
      in={isOpen}
      timeout={{ appear: 1000, enter: 1000, exit: 700 }}
      unmountOnExit={true}
    >
      {(state) => (
        <Wrapper
          onDismiss={onDismiss}
          style={{
            ...animations[state],
          }}
          ref={ref}
        >
          <Backdrop />
          <Content aria-label="Menu">
            <InnerContentWrapper>
              <CloseButton onClick={onDismiss}>
                <Icon id="close" />
                <VisuallyHidden>Dismiss menu</VisuallyHidden>
              </CloseButton>
              <Filler />
              <Nav>
                <NavLink href="/sale">Sale</NavLink>
                <NavLink href="/new">New&nbsp;Releases</NavLink>
                <NavLink href="/men">Men</NavLink>
                <NavLink href="/women">Women</NavLink>
                <NavLink href="/kids">Kids</NavLink>
                <NavLink href="/collections">Collections</NavLink>
              </Nav>
              <Footer>
                <SubLink href="/terms">Terms and Conditions</SubLink>
                <SubLink href="/privacy">Privacy Policy</SubLink>
                <SubLink href="/contact">Contact Us</SubLink>
              </Footer>
            </InnerContentWrapper>
          </Content>
        </Wrapper>
      )}
    </Transition>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

const animations = {
  entering: {
    "--backdrop": "var(--backdrop-fadein)",
    "--backdrop-delay": "0ms",
    "--menu": "var(--menu-slidein)",
    "--menu-delay": "200ms",
    "--content": "var(--content-fadein)",
    "--content-delay": "400ms",
  },
  entered: {
    "--backdrop": "var(--backdrop-fadein)",
    "--backdrop-delay": "0ms",
    "--menu": "var(--menu-slidein)",
    "--menu-delay": "200ms",
    "--content": "var(--content-fadein)",
    "--content-delay": "400ms",
  },
  exiting: {
    "--backdrop": "var(--backdrop-fadeout)",
    "--backdrop-delay": "400ms",
    "--menu": "var(--menu-slideout)",
    "--menu-delay": "200ms",
    "--content": "var(--content-fadeout)",
    "--content-delay": "0ms",
  },
  exited: {
    "--backdrop": "var(--backdrop-fadeout)",
    "--backdrop-delay": "400ms",
    "--menu": "var(--menu-slideout)",
    "--menu-delay": "200ms",
    "--content": "var(--content-fadeout)",
    "--content-delay": "0ms",
  },
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  background: transparent;
  --backdrop-fadein: ${fadeIn} 500ms both ease;
  --backdrop-fadeout: ${fadeOut} 500ms both ease;
  --menu-slidein: ${slideIn} 500ms both ease-out;
  --menu-slideout: ${slideOut} 200ms both ease-in;
  --content-fadein: ${fadeIn} 600ms both ease;
  --content-fadeout: ${fadeOut} 400ms both ease;
`;

const Backdrop = styled.div`
  animation: var(--backdrop);
  animation-delay: var(--backdrop-delay);
  background: var(--color-backdrop);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled(DialogContent)`
  position: relative;
  --overfill: 16px;
  @media (prefers-reduced-motion: no-preference) {
    animation: var(--menu);
    animation-delay: var(--menu-delay);
  }
  background: white;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: var(--content);
  animation-delay: var(--content-delay);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
