import React, {Component} from "react";
import contactlist from "./contactlist"

class ContactItem extends Component {
    state = {
        contacts: contactlist
    }
    
    render(){
        return(
            
            <div>
                {this.state.contacts.map((contact) =>
                    <a className="contact" href={contact.link}>
                        <div className="contact-icon-container" style={{backgroundImage: `url(${contact.icon})`}}>
                        </div>
                        <div class="contact-text">
                            <h2 className="contact-header">{contact.type}</h2>
                            <h2>{contact.desc}</h2>
                        </div>
                    </a>
                )}

                <style jsx>{`
                    .contact {
                        width: 100%;
                        height: 100px;
                        background: slategray;
                        color: rgb(0, 15, 0);
                        display: flex;
                        margin-bottom: 1rem;
                        box-shadow: 0 5px 5px darkslategray;
                        line-height: 1rem;
                        align-items: center;
                    }
                    .contact:hover {
                        transform: translateY(-2%);
                        transition: 0.1s ease-out;

                        background: slateblue;
                        border-left: 5pt solid whitesmoke;
                        box-shadow: 0 5px 10px darkslateblue;
                        text-decoration: none;
                    }
                    .contact-icon-container {
                        height: 90px;
                        width: 90px;
                        margin: 5pt;
                        background-repeat: no-repeat;
                        background-size: contain;
                    }
                    .contact-text{
                        flex-direction: column;
                        flex-wrap: wrap;

                    }
                    .contact-header {
                        font-weight: bolder;
                        text-transform: capitalize;
                        font-size: 1.5em
                    }
                    h2 {
                        color: whitesmoke;
                        font-size: 1.5em;
                        font-family: 'Livvic', sans-serif;
                        font-weight: 200;
                    }

                    
                    @media only screen and (max-width: 600px) {
                        h1 {
                            font-size: 1em;
                        }
                        h2 {
                            font-size: 1em;
                        }
                        .contact {
                            padding: 0.2em;
                            padding-top: 0.4em;
                        }
                        .contact-header {
                            font-size: 1.5em;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default ContactItem;