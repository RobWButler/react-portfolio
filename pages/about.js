import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main';

const About = () => (
  <div>
    <Page/>

    <div className="jumbotron">
      <h2 className="jumbohead">about</h2>
      <Link href="/portfolio"><h2 className="jumbolink">portfolio</h2></Link>
      <Link href="/contact"><h2 className="jumbolink">contact</h2></Link>
    </div>

    <div className="container mt-5">
      <div className="content">
        About Me.
      </div>
    </div>
  </div>
)

export default About
