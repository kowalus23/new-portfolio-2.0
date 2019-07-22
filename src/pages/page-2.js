import React from "react"
import { Link } from "gatsby"

import Home from "../components/Home"
import SEO from "../components/seo"

const SecondPage = () => (
  <Home>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Home>
)

export default SecondPage
