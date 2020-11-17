import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorContainer>
      <h1>404: Sorry! The page you've requested doesn't exist.</h1>
      <Link to="/">Go to Home</Link>
    </ErrorContainer>
  </Layout>
)

export default NotFoundPage

const ErrorContainer = styled.div`
  padding: 2rem calc((100vw - 1300px) / 2);
`
