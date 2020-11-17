import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import Sidebar from "./Sidebar"

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showScroll, setShowScroll] = useState(false) // State to handle the scroll bar

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowScroll(true)
      } else setShowScroll(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  const toggle = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <Nav showScroll={showScroll}>
      <NavLink
        css={`
          font-size: 2rem;
          font-weight: bold;
        `}
        to="/"
      >
        TRIPPLAN
      </NavLink>
      <Bars onClick={toggle} />
      <Sidebar isOpen={showSidebar} toggle={toggle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          )
        })}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ showScroll }) => (showScroll ? "#000" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top: 0;
  /* position: relative; */
  @media screen and (max-width: 768px) {
    background: "transparent";
    position: relative;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: orange;
    border-bottom: 1px solid;
  }
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -48px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
