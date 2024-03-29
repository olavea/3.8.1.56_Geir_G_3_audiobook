/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "../components/layout.css"
// import Archive from "../components/archive";
// import ArchiveBarn from "./archiveBarnasTegninger";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        file(relativePath: { eq: "Geir-g-3.mp3" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>

          <div
            style={{
              width: "100vw",
              position: "fixed",
              bottom: 0,
              left: 0,

              background: "pink",
            }}
          >
            <audio
              src={data.file.publicURL}
              type="audio/mp3"
              controls
              style={{
                width: "90%",
                margin: "1em 5vw",
              }}
            />
          </div>

          <footer>
            © {new Date().getFullYear()}, Homemade with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// line 39
//<Header siteTitle={data.site.siteMetadata.title} />
