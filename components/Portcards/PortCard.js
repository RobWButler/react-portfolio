import React from 'react';
import Link from '../Link';
import PortModal from '../PortModal'


class PortCard extends React.Component {
    state = {
        cards: this.props.cardlist,
        cardmodal: "",
        modalvis: 'none'

    }

    loadModal = (card) => {
        this.setState({cardmodal: card})
        this.setState({modalvis: 'inline-block'})
    }

    hideModal = () => {
        this.setState({modalvis: 'none'})
    }

    render(){
        return(
            <div className='cardcontainer'>
                <div>
                    <PortModal
                        projectname={this.state.cardmodal.header}
                        projectimage={this.state.cardmodal.image}
                        projectdesc_s={this.state.cardmodal.desc_s}
                        projectlink={this.state.cardmodal.href}
                        modalstate={this.state.modalvis}
                        closemodal={this.hideModal}
                    />
                </div>
                {this.state.cards.map((card) =>
                    <Link href={"/portfolio#" + card.header.split(" ").join("-")} key={card.key}>
                        <div className="homecard" title={card.header} style={{backgroundImage: `url(${card.image})`}} onClick={() => this.loadModal(card)}>
                            <h1>{card.header}</h1>
                            <div className="hovercontainer">
                                <h2 style={{visibility:'hidden'}}><span>{card.desc_s}</span></h2>
                            </div>
                        </div>
                    </Link>
                )}
                <style jsx>{`
                    .cardcontainer {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    .homecard {
                        display: block;
                        overflow: hidden;
                        wrap: flex;
                        background: slategray;
                        box-shadow: 0 5px 5px slategray;
                        margin: 10px;
                        width: 437px;
                        height: 270px;
                        cursor: zoom-in;
                        border-radius: 5px 5px 0 0;
                        line-height: 240px;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover; 
                    }
                    .homecard:hover {
                        box-shadow: 0 5px 5pt slategray;
                        transform: scale(1.1);
                        border-bottom: 5pt solid white;

                        transition: 0.3s ease-out;
                        z-index: 50;
                        
                        background-position: center; 
                        background-repeat: no-repeat; 
                        background-size: cover; 
                    }
                    .homecard:hover h1 {
                        color: rgb(0, 25, 0);
                        background: whitesmoke;
                        text-shadow: 0 0.5px 0 rgb(0, 25, 0), 
                                     0.5px 0 0 rgb(0, 25, 0), 
                                     0 -0.5px 0 rgb(0, 25, 0), 
                                     -0.5px 0 0 rgb(0, 25, 0);                         
                    }

                    .homecard:hover .hovercontainer{
                        background: rgba(115, 124, 201, 0.8);
                        background-size: cover;
                    }
                    .homecard:hover h2 span {
                        visibility: visible;
                        text-shadow: 0pt 1pt 0pt black, 0pt 0pt 5pt black;
                        filter: none;
                        z-index: 1;
                    }
                    h1 {
                        margin: 0;
                        position: relative;
                        text-align: left;
                        padding: 5px 0 5px 20px;
                        font-size: 1.5em;
                        font-family: 'Major Mono Display', monospace;
                        top: 0;
                        color: whitesmoke;
                        background: rgb(0, 25, 0);
                        border-radius: 5px 5px 0 0;
                        z-index: 10;

                    }
                    h2 {
                        color: whitesmoke;
                        font-size: 1.5em;
                        font-family: 'Livvic', sans-serif;
                        font-weight: 200;
                        text-align: center;
                        position: relative;
                    }
                    span {
                        display: inline-block;
                        vertical-align: middle;
                        padding-top: 3em;
                        padding-left: 1em;
                        padding-right: 1em;
                        height: 240px;
                    }

                    @media only screen and (max-width: 600px) {
                        
                        .homecard {
                            height: 30vh;
                        }
                        span {
                            padding: 2em;
                        }
                        h1 {
                            font-size: 1em;
                        }
                        h2 {
                            font-size: 1em;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default PortCard;