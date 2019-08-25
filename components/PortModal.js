import React from "react";


class PortModal extends React.Component {

    render(){
        return(
            <div className="port-modal">
                <h1>{this.props.projectname} 
                    <a 
                        style={{ paddingLeft: '1rem', cursor: 'pointer', color: 'red', fontWeight: 'bolder'}} 
                        onClick={this.props.closemodal}>
                            [x]
                    </a>
                </h1>
                <img src={this.props.projectimage} className="port-image"/>
                <div className="descpanel">
                    <h2>{this.props.projectdesc}</h2>
                </div>

                <style jsx>{`
                    .port-modal {
                        display: ${this.props.modalstate};
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        height: 80vh;
                        width: 70vw;
                        margin-left: -35vw;
                        margin-top: -40vh;
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
                    .descpanel {
                        background: whitesmoke;
                        float: left;
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        padding: 5pt;
                    }
                    h2 {
                        color: black;
                        font-size: 1.5em;
                        font-family: 'Livvic', sans-serif;
                        font-weight: 200;
                    }


            `}</style>
            </div>

        )
    }
}


export default PortModal;