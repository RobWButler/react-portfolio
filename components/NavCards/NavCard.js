import React from 'react';
import Link from '../Link';
import Cardlist from "./cardlist"



class NavCard extends React.Component {
    state = {
        cards: Cardlist
    }

    render(){
        return(
            <div className='cardcontainer'>
                {this.state.cards.map((card) =>
                    <Link href={card.href} key={card.key}>
                        <div className="homecard" title={card.key}>
                            <h1>{card.header}</h1>
                            <h2><span>{card.desc}</span></h2>
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
                        float: left;
                        wrap: flex;
                        background: slategray;
                        box-shadow: 0 5px 5px slategray;
                        margin: 10px;
                        width: 400px;
                        height: 240px;
                        cursor: pointer;
                        border-radius: 5px 5px 0 0;
                        line-height: 240px;
                    }
                    .homecard:hover {
                        background: slateblue;
                        box-shadow: 0 5px 10pt darkslateblue;
                        transform: translateY(-1%);
                        border-bottom: 5pt solid white;

                        transition: 0.2s linear;
                    }

                    .homecard:hover h1 {
                        color: rgb(0, 25, 0);
                        background: whitesmoke;
                    }

                    h1 {
                        position: relative;
                        text-align: left;
                        padding: 5px 0 5px 20px;
                        font-size: 28px;
                        font-family: 'Major Mono Display', monospace;
                        top: 0;
                        color: whitesmoke;
                        background: rgb(0, 25, 0);
                        border-radius: 5px 5px 0 0;

                    }
                    h2 {
                        color: whitesmoke;
                        font-size: 22px;
                        font-family: 'Livvic', sans-serif;
                        font-weight: 200;
                        text-align: center;
                        position: relative;
                    }
                    span {
                        display: inline-block;
                        vertical-align: middle;
                        line-height: 160px;
                    }

                    @media only screen and (max-width: 600px) {
                        
                        .homecard {
                            height: 20vh;
                        }

                        span {
                            line-height: 10vh;
                        }

                        .cardcontainer {
                            margin-top: 12vh;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default NavCard;