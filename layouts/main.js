import React from 'react';
import Head from 'next/head';

const Page = () => {
   return(  
        <div>
            <a name="top"></a>
            <meta
                name="viewport"
                content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"
                key="viewport"
            />
            <Head>
                <title>Robert Butler Web Design</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Livvic:200,400|Major+Mono+Display|Nova+Mono|Share+Tech+Mono&display=swap"></link>
            </Head>
            
            <style jsx global>{`
                html {
                    background: linear-gradient(90deg, rgb(0, 0, 15) -75%, whitesmoke 25% 75%, rgb(0, 0, 15) 175%);
                    height: 100;
                    flex: 1;
                }
                body {
                    background: transparent;
                }
                .jumbotron {
                    position: fixed;
                    background: black;
                    color: white;
                    float: left;
                    width: auto;
                    margin: 2rem;
                    box-shadow: 0 5px 5pt darkslateblue;
                    border-radius: 0;
                    border-top: 5pt solid slateblue;
                    z-index: 999;
                }
                .jumbohead {
                    background: darkslateblue;
                    color: whitesmoke;
                    font-size: 28px;
                    font-family: 'Major Mono Display', monospace;
                    font-weight: bold;
                    padding: 0.5rem;
                    text-align: center;
                    position: relative;
                }
                .jumbolink {
                    color: slateblue;
                    font-size: 20px;
                    font-family: 'Major Mono Display', monospace;
                    font-weight: 600;
                    cursor: pointer;

                    transition: 0.05s linear;
                }
                .jumbolink:hover {
                    color: skyblue;
                    border-left: 5pt solid slateblue;
                    padding-left: 1pt;
                }
                .current {
                    color: black;
                    background: whitesmoke;
                    cursor: default;
                    border-left: 5pt solid slateblue;
                    padding-left: 1pt;
                }
                .current:hover {
                    color: black;
                }
                .content {
                    padding: 10pt;
                    border-top: 25pt solid rgb(0, 25, 0);
                    background: darkturquoise;
                    box-shadow: 0 5px 5pt slategray;
                    border-radius: 5px 5px 0 0;
                    color: whitesmoke;
                    margin-bottom: 10pt;
                    width: 100%;
                    float: right;
                }

                @media only screen and (max-width: 600px) {
                    .jumbotron {
                        position: fixed;
                        top: 0;
                        z-index: 9999;
                        float: none;
                        width: 100%;
                        padding: 0 0 5pt 0;
                        margin: 0;
                        box-shadow: 0 0 0;
                    }
                    .jumbolink {
                        padding: 5pt;
                        font-size: 90%;
                        font-weight: 600;
                        float: left;
                        flex: 1;
                        margin-left: 1rem;
                    }
                    .container {
                        float: left;
                        margin: 0;
                        padding: 0;
                    }
                    .content {
                        margin: 10vh 0 0 0;
                        width: 100%;
                    }
                }

                @media only screen and (device-width: 768px), only screen and (device-width: 1024px) {
                    .jumbotron {
                        position: fixed;
                        top: 0;
                        z-index: 9999;
                        float: none;
                        width: 100%;
                        padding: 0 0 5pt 0;
                        margin: 0;
                        box-shadow: 0 0 0;
                    }
                    .jumbolink {
                        padding: 5pt;
                        font-size: 120%;
                        font-weight: 600;
                        float: left;
                        flex: 1;
                        margin-left: 1rem;
                    }
                    .content {
                        margin-top: 10vh;
                        width: 100%;
                    }
                }
                }
            `}</style>
        </div>
)   
}

export default Page;