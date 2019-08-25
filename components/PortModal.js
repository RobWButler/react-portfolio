import React from "react";


class PortModal extends React.Component {

    render(){
        return(
            <div className="port-modal">
                <h1>close 
                    <a 
                        className='close-button' 
                        onClick={this.props.closemodal}>
                            [x]
                    </a>
                </h1>
                <img src={this.props.projectimage} className="port-image"/>
                <div className="desc-panel">
                    <h2 className="desc-header">
                        {this.props.projectname} 
                        <a style={{fontSize:'70%', fontWeight:"bold", paddingLeft: "0.5em", textTransform: 'lowercase'}}href={this.props.projectlink}>{this.props.projectlink}</a>
                    </h2>
                    <h2>{this.props.projectdesc_s}</h2>
                </div>

                <style jsx>{`
                    .port-modal {
                        display: ${this.props.modalstate};
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        height: 90vh;
                        width: 70vw;
                        margin-left: -35vw;
                        margin-top: -45vh;
                        border-left: 1px solid black;
                        border-right: 1px solid black;
                        border-bottom: 1px solid black;
                        box-shadow: 0 5pt 10pt rgba(0, 0, 0, 0.2);
                        z-index:999;
                        background: slategray;
                        border-radius: 5px 5px 0 0;
                        overflow: hidden;
                    }
                    .port-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    h1 {
                        margin: 0;
                        position: relative;
                        text-align: left;
                        padding: 5px 0 5px 20px;
                        font-size: 1.8em;
                        font-family: 'Major Mono Display', monospace;
                        top: 0;
                        color: whitesmoke;
                        background: rgb(0, 25, 0);
                        border-radius: 5px 5px 0 0;
                        z-index: 10;

                    }
                    .desc-panel {
                        background: whitesmoke;
                        float: left;
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        padding: 2em;
                        border-left: 5pt solid slateblue;
                    }
                    .desc-header {
                        font-weight: bolder;
                        text-transform: capitalize;
                        font-size: 1.8em
                    }
                    h2 {
                        color: black;
                        font-size: 1.5em;
                        font-family: 'Livvic', sans-serif;
                        font-weight: 200;
                    }
                    h1 .close-button {
                        padding-left: 1rem;
                        cursor: pointer;
                        color: red;
                        fontWeight: bolder;
                        transition: 0.1s ease-in;
                    }
                    h1 .close-button:hover {
                        filter: drop-shadow(0 1px 0 red) 
                                drop-shadow(0 -1px 0 red)
                                drop-shadow(1px 0 0 red)
                                drop-shadow(-1px 0 0 red);
                    }

                    @media only screen and (max-width: 600px) {
                        .port-modal {
                            height: 50vh;
                            margin-top: -25vh;
                            width: 95vw;
                            margin-left: -47.5vw;
                        }
                        h1 {
                            font-size: 1em;
                        }
                        h2 {
                            font-size: 1em;
                        }
                        .desc-panel {
                            padding: 0.5em;
                        }
                        .desc-header {
                            font-size: 1.5em;
                        }
                    }

                    @media only screen and (device-width: 768px), only screen and (device-width: 1024px) {
                        .port-modal {
                            height: 50vh;
                            margin-top: -25vh;
                            width: 95vw;
                            margin-left: -47.5vw;
                        }
                    }
            `}</style>
            </div>

        )
    }
}


export default PortModal;