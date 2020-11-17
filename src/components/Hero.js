import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/travel.mp4"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1
            as="h1"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            EXPLORE THE WORLD WITH US
          </HeroH1>
          <HeroP
            as="h1"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            Visit the most beautiful places on the planet
          </HeroP>
          <Button primary="true" big="true" round="true" to="/">
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: brightness(50%);
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 4vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroP = styled.h1`
  font-size: clamp(1.5rem 2vw, 4rem);
  margin-bottom: 2rem;
  font-weight: 100;
`
