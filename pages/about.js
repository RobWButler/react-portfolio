import React from 'react'
import Link from '../components/Link';
import Page from '../layouts/main';

class About extends React.Component {
  render(){
    return(
      <div>
        <Page/>

        <div className="jumbotron">
          <h2 className="jumbohead">about</h2>
          <Link href="#top"><h2 className="jumbolink current">about</h2></Link>
          <Link href="/portfolio"><h2 className="jumbolink">portfolio</h2></Link>
          <Link href="/contact"><h2 className="jumbolink">contact</h2></Link>
        </div>

        <div className="container mt-5">
          <div className="content">
            <div className="about-container">
              <div className="portrait">
              </div>
              <div className="desc">
                <h3>Hi! I'm a full stack developer in the Savannah, GA area.<br/><br/>
                <ul>
                  <li>Extensive training from Georgia Tech's coding bootcamp program</li>
                  <li>Full-stack development credentials in the core front end languages - HTML5, CSS, JavaScript - , 
                      as well as back end technologies such as Node.js, Express.js, SQL, and MongoDB, as well as libraries like Handlebars, 
                      React, and experience in creating React Native apps for Android devices.</li> 
                  <li>The goal of my training was proficiency in building MERN (MongoDB, ExpressJS, React, NodeJS) stack applications.</li>
                  <li>My particular passions lie in UI/UX in front end design.</li>
                </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .about-container {
            width: 100%;
            height: auto;
            background: slategray;
            color: rgb(0, 15, 0);
            display: flex;
            box-shadow: 0 5px 5px darkslategray;
            padding: 10pt;
          }
          .portrait {
            display: flex;
            flex-grow: 1;
            align-items: center;
            height: 300px;
            width: 100%;
            margin: 5pt;
            box-shadow: 0 5px 5px slategray;
            filter: grayscale(100%) contrast(100%);
            background-image: url('../../static/headshot.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);

          }
          .desc {
            padding: 10pt;
            margin-left: 5pt;
            flex-direction: column;
            flex-wrap: wrap;
            background: whitesmoke;
            box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
            border-bottom: 5pt solid darkslateblue;
            border-top: 10pt solid rgb(0, 15, 0);
            border-radius: 5px 5px 0 0;
          }
          h3 {
            color: rgb(0, 15, 0);
            font-size: 1.5em;
            font-family: 'Livvic', sans-serif;
            font-weight: 500;
          } 
          li {
            margin-bottom: 10pt;
          }
          @media only screen and (max-width: 600px) {
            h1 {
                font-size: 1em;
            }
            h2 {
                font-size: 1em;
            }
            h3 {
                font-size: 1em;
            }
            .portrait {
              margin: auto;
              height: 200px;
              width: 200px;
              margin-bottom: 10pt;
            }
            .about-container {
                flex-direction: column;
                padding: 0.2em;
                padding-top: 0.4em;
            }

        }
        `}</style>
      </div>
    )
  }
}

export default About
