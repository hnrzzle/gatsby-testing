import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>LogikLAN</h1>
    <p>Welcome to LogikLAN</p>
    <p>Be sure to check out <Link to="/the-rules">The Rules</Link></p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage