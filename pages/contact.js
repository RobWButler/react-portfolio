import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main';

const Contact = () => (
  <div>
    <Page/>

    <div className="jumbotron">
      <h2 className="jumbohead">contact</h2>
      <div className="navcontainer">
        <Link href="/about"><h2 className="jumbolink">about</h2></Link>
        <Link href="/portfolio"><h2 className="jumbolink">portfolio</h2></Link>
      </div>
    </div>

    <div className="container mt-5">
        <div className="content">
          Contact info here
        </div>
    </div>
  </div>
)

export default Contact
