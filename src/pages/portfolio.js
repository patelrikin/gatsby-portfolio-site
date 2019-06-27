import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      Portfolio
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
