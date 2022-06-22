import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 100%;
  padding-top: 2rem;
  min-height: 20px;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Span = styled.span`
  font-size: 1.5rem;
`;
export const Div1 = styled.div`
  flex-grow: 3;
  margin: 1em;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const Div2 = styled.div`
  flex-grow: 8;
  display: flex;
  font-size: 5px;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;
export const Div3 = styled.div`
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  box-shadow: 0px, 0px, 1px, 0px red;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
