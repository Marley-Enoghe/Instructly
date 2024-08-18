import React from 'react';
import Man from '../assets/about/images/do-it.jpg'

function explore(props) {
    return (
        <div>
            <div className="card my-5 mx-auto double" style={{ maxWidth: '800px'}}>
                <div className="row  ">
                    <div className="col-md-12 col-lg-6">
                        <img src={Man} style={{height: '100%'}} className=" img-fluid rounded-start" alt="manimage"/>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title h2">{props.heading}</h5>
                            <p className="card-text text-body-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.
                            Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
                            <p className="card-text"><small className="text-body-secondary">someone</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default explore;