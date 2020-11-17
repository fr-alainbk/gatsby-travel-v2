import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import PinterestIcon from "@material-ui/icons/Pinterest"

const Footer = () => {
  return (
    <FooterContainer
      id="contact"
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>TRIPPLAN</h1>
          <p>We strive to create the best experiences for our customers.</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLink to="/">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLink to="/">Blog</FooterLink>
          <FooterLink to="/">Affiliates</FooterLink>
          <FooterLink to="/">Forum</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLinks>
            <FooterLink to="/">
              <FacebookIcon />
            </FooterLink>
            <FooterLink to="/">
              <InstagramIcon />
            </FooterLink>
            <FooterLink to="/">
              <TwitterIcon />
            </FooterLink>
            <FooterLink to="/">
              <PinterestIcon />
            </FooterLink>
          </FooterLinks>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 2rem;
    color: #f26a2e;
  }

  p {
    color: gray;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;
  margin-right: 1rem;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const FooterLinks = styled.div`
  display: flex;
`
