import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ErrorBoundary from "../components/errorBoundary"

const IndexPage = () => (
  <ErrorBoundary>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      <button
        onClick={() => {
          throw new Error("Manual error")
        }}
      >
        Click
      </button>
      <a href="javascript:gaOptout();">Deactivate Google Analytics</a>
    </Layout>
  </ErrorBoundary>
)

export default IndexPage
