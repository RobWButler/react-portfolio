import React from 'react';
import Link from 'next/link';
import cardlist from "./cardlist"


const PortCard = () => {
    return(
        <div className='cardcontainer'>
            {cardlist.map(({ header, desc, image, href, key }) =>
                <Link href={href} key={key}>
                    <div className="homecard" title={header} style={{backgroundImage: `url(${image})`}}>
                        <h1>{header}</h1>
                        <div className="hovercontainer">
                            <h2 style={{visibility:'hidden'}}><span>{desc}</span></h2>
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
                    cursor: pointer;
                    border-radius: 5px 5px 0 0;
                    line-height: 240px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover; 
                }
                .homecard:hover {
                    background: darkslateblue;
                    box-shadow: 0 5px 10pt darkslateblue;
                    transform: translateY(-1%);
                    border-bottom: 5px solid white;

                    transition: 0.2s linear;
                    
                    background-position: center; 
                    background-repeat: no-repeat; 
                    background-size: cover; 
                }
                .homecard:hover h1 {
                    color: rgb(0, 25, 0);
                    background: ivory;
                }
                .homecard:hover .hovercontainer{
                    background: rgba(72, 61, 139, 0.6);
                    background-size: cover;
                }
                .homecard:hover h2 span {
                    visibility: visible;
                    text-shadow: 0pt 1pt 0pt black, 0pt 0pt 5pt black;
                    filter: none;
                    z-index: 999;
                }
                h1 {
                    margin: 0;
                    position: relative;
                    text-align: left;
                    padding: 5px 0 3px 20px;
                    font-size: 1.5em;
                    font-family: 'Major Mono Display', monospace;
                    top: 0;
                    color: ivory;
                    background: rgb(0, 25, 0);
                    border-radius: 5px 5px 0 0;

                }
                h2 {
                    color: ivory;
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

export default PortCard;