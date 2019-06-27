import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      Contact
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
