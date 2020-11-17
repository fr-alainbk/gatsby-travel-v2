import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { graphql, useStaticQuery } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer id="testimonials">
      <Description
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Listen To Their Voices
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Thomas Bowele
            </h3>
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              What can I say? That's the kind of thing everyone needs to try at
              least once. I'm glad I gave it a shot. One of the best moments I
              ever had!
            </p>
          </Testimonial>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Anais Talou
            </h3>
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              I really enjoyed visiting all these places. It was such a great
              experience, and I look forward to repeat it very soon.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const Description = styled.h1`
  text-align: center;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 400;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    font-size: clamp(1rem, 1.75vw, 2rem);
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
