import React from 'react'
import Page from "../layouts/main"
import NavCard from "../components/NavCards/NavCard"

const Home = () => (
  <div>
    <Page/>

    <div className="jumbotron">
      <div className="jumbohead">
        <h2 style={{fontWeight: "bold"}}>robert butler</h2>
        <h2 style={{fontWeight: "bold"}}>web design</h2>
      </div>
    </div>
    <div className="container mt-5">
      <NavCard />
    </div>
  </div>
)

export default Home
