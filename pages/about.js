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
      <div className="content clearfix">
        <div className="portrait clearfix">
        </div>
        <div className="desc">
          Hi! I'm a full stack developer in the Savannah, GA area.<br/>
          <ul>
            <li>Extensive training from Georgia Tech's coding bootcamp program</li>
            <li>Full-stack development credentials in the core front end languages - HTML5, CSS, JavaScript - , 
                as well as back end technologies such as Node.js, Express.js, SQL, and MongoDB, as well as libraries like Handlebars, 
                React, and experience in creating React Native apps for Android devices.</li> 
            <li>The goal of my training was proficiency in building MERN (MongoDB, ExpressJS, React, NodeJS) stack applications.</li>
            <li>My particular passions lie in UI/UX in front end design.</li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .portrait {
        margin: 10pt;
        margin-right: 15pt;
        width: 240px;
        height: 240px;        
        box-shadow: 0 5px 5px slategray;
        filter: grayscale(100%) contrast(100%);
        background-image: url('../../static/headshot.jpg');
        background-size: contain;
        float: left;
      }
      .desc {
        color: ivory;
        flex: 1;
        list-style: inside;
        font-family: 'Livvic', sans-serif;
        font-size: 1.2em;
        font-weight: 600;
        line-height: 2rem;
        text-shadow: 0 1pt 1pt black;
        filter: drop-shadow(0 0 20pt darkslateblue);
      }
      .content {
        flex-direction: row;
      }
    `}</style>
  </div>
)

export default About
