import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function WorkExperience() {
  return (
    <Layout>
      <SEO title="Work Experience" />
      WorkExperience
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
