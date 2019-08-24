import React from 'react';
import Link from 'next/link';
import cardlist from "./cardlist"


const NavCard = () => {
    return(
        <div className='cardcontainer'>
            {cardlist.map(({ header, desc, href, key }) =>
                <Link href={href} key={key}>
                    <div className="homecard" title={key}>
                        <h1>{header}</h1>
                        <h2><span>{desc}</span></h2>
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
                    background: darkslateblue;
                    box-shadow: 0 5px 10pt darkslateblue;
                    transform: translateY(-1%);
                    border-bottom: 5px solid white;

                    transition: 0.2s linear;
                }

                .homecard:hover h1 {
                    color: rgb(0, 25, 0);
                    background: ivory;
                }

                h1 {
                    position: relative;
                    text-align: left;
                    padding: 5px 0 3px 20px;
                    font-size: 28px;
                    font-family: 'Major Mono Display', monospace;
                    top: 0;
                    color: ivory;
                    background: rgb(0, 25, 0);
                    border-radius: 5px 5px 0 0;

                }
                h2 {
                    color: ivory;
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
                }
            `}
            </style>
        </div>
    )

}

export default NavCard;