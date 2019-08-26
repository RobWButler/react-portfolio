import React from 'react'
import Link from 'next/link';
import Page from '../layouts/main';
import PortCard from '../components/Portcards/PortCard'
import Cardlist from "../components/Portcards/cardlist";

class Portfolio extends React.Component {
  state = {
    cards: Cardlist
  }
  
  render(){
    return (
      <div>
        <Page/>
        <div className="jumbotron">
          <h2 className="jumbohead">portfolio</h2>
          <Link href="/about"><h2 className="jumbolink">about</h2></Link> 
          <Link href="/portfolio#top"><h2 className="jumbolink current">portfolio</h2></Link>
          <Link href="/contact"><h2 className="jumbolink">contact</h2></Link>
        </div>

        <div className="container mt-5">
          <div className="content">
            <div className="port-section">
                <h2>major projects</h2>
              <PortCard
                cardlist={this.state.cards.major}/>
            </div>

            <div className="port-section">
              <h2>other</h2>
              <PortCard
                cardlist={this.state.cards.minor}
              />
            </div>

          </div>
        </div>
        <style jsx>{`
          .content h2 {
            background: darkslateblue;
            color: whitesmoke;
            font-size: 28px;
            font-family: 'Major Mono Display', monospace;
            font-weight: bold;
            padding: 0.5rem;
            text-align: left;
          }
          .port-section {
            margin-bottom: 1rem;
          }
          .port-section:hover h2 {
            border-left: 5pt solid slateblue;
            color: darkslateblue;
            background: whitesmoke;
            text-shadow:  0 0.5px 0 darkslateblue, 
                          0.5px 0 0 darkslateblue, 
                          0 -0.5px 0 darkslateblue, 
                          -0.5px 0 0 darkslateblue;    
          }
          `}</style>
      </div>
    )
  }
}

export default Portfolio
