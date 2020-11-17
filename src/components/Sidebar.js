import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import { Button } from "./Button"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">About</SidebarLink>
        <SidebarLink to="#trips">Trips</SidebarLink>
        <SidebarLink to="#testimonials">Testimonials</SidebarLink>
        <SidebarLink to="#contact">Contact</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <Button round="true">Travel Now</Button>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #000;
  color: #fff;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 60px);
  }
`

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin-bottom: 3rem;

  &:hover {
    color: blue;
    transition: 0.2s ease-in-out;
  }
`

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

// const SidebarRoute = styled(Link)`
//   background: #e31837;
//   white-space: nowrap;
//   padding: 16px 64px;
//   color: #fff;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `
