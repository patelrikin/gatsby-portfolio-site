/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Link from "./link"
import Header from "./header"
import "./layout.css"
import StyledBackgroundSection from "./styledBackgroundSection"

const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/techskills", label: "TechSkills" },
  { to: "/workexperience", label: "WorkExperience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
]

const contentBackgroundStyle = { background: "rgba(255, 255, 255, 0.5)" }
const contentStyle = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `0px 1.0875rem 1.45rem`,
  paddingTop: 0,
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <StyledBackgroundSection>
        <div style={contentBackgroundStyle}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div style={contentStyle}>
            <ul>
              {NAVIGATION.map(navigation => (
                <li key={navigation.label}>
                  <Link to={navigation.to}>{navigation.label}</Link>
                </li>
              ))}
            </ul>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      </StyledBackgroundSection>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
