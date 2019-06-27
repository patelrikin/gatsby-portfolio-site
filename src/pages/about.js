import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      About
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
