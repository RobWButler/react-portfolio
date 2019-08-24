import React from 'react';
import Head from 'next/head';

const Page = () => {
   return(  
        <div>
            <Head>
                <title>Robert Butler Web Design</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Livvic:100,200|Major+Mono+Display|Nova+Mono|Share+Tech+Mono&display=swap"></link>
            </Head>
            <style jsx global>{`
                html {
                    background: radial-gradient(circle, rgb(155, 240, 242) 70%, rgb(0, 15, 0) 180%);
                    height: 100%;
                    flex: 1;
                }
                body {
                    background: transparent;
                }
                .jumbotron {
                    background: black;
                    color: white;
                    float: left;
                    width: auto;
                    margin: 2rem;
                    box-shadow: 0 5px 5pt darkslateblue;
                    border-radius: 0;
                    border-top: 5pt solid slateblue;
                }
                .jumbohead {
                    background: darkslateblue;
                    color: ivory;
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
                }
                .jumbolink:hover {
                    color: skyblue;
                }
                .content {
                    padding: 10pt;
                    border-top: 25pt solid rgb(0, 25, 0);
                    background: darkturquoise;
                    box-shadow: 0 5px 5pt slategray;
                    border-radius: 5px 5px 0 0;
                    color: ivory;
                    margin-bottom: 10pt;
                }

                @media only screen and (max-width: 600px) {
                    .jumbotron {
                        width: 100%;
                        padding: 0 0 5pt 0;
                        margin: 0;
                        box-shadow: 0 2pt 2pt darkslateblue;
                    }
                    .jumbolink {
                        padding: 5pt;
                        font-size: 80%;
                        font-weight: 600;
                        float: left;
                        flex: 1;
                    }
                    .container {
                        float: left;
                        flex: 1;
                    }
                }
            `}</style>
        </div>
)   
}

export default Page;