import React from 'react'
import Link from '../components/Link';
import Page from '../layouts/main';
import ContactItem from '../components/ContactItem/ContactItem';

class Contact extends React.Component {
  render(){
    return(
      <div>
        <Page/>

        <div className="jumbotron">
          <h2 className="jumbohead">contact</h2>
          <div className="navcontainer">
            <Link href="/about"><h2 className="jumbolink">about</h2></Link>
            <Link href="/portfolio"><h2 className="jumbolink">portfolio</h2></Link>
            <Link href="/contact#top"><h2 className="jumbolink current">contact</h2></Link>
          </div>
        </div>

        <div className="container mt-5">
            <div className="content">
              <ContactItem/>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact
