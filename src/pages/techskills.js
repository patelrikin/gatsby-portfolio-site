import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

export default function TechSkills() {
  return (
    <Layout>
      <SEO title="Technical Skills" />
      TechSkills
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
