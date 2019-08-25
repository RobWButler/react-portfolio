import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main';
import PortCard from '../components/Portcards/PortCard'

const Portfolio = () => (
  <div>
    <Page/>

    <div className="jumbotron">
      <h2 className="jumbohead">portfolio</h2>
      <Link href="/about"><h2 className="jumbolink">about</h2></Link> 
      <Link href="#"><h2 className="jumbolink current">portfolio</h2></Link>
      <Link href="/contact"><h2 className="jumbolink">contact</h2></Link>
    </div>

    <div className="container mt-5">
      <div className="content">
        <PortCard/>
      </div>
    </div>
  </div>
)

export default Portfolio
