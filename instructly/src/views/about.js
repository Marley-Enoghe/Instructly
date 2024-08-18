import React from 'react';
import study from '../assets/about/images/Studying-cuate.svg'
import TechCom from '../assets/about/images/comm.jpg'
import Colab from '../assets/about/images/colab.jpg'
import DoIt from '../assets/about/images/do-it.jpg'
import Banner from '../components/banner';
import '../assets/about.css'
import Register from '../components/register';
import Explore from '../components/explore';
function about(props) {
    return (
        <div>
            <div className='container'>
                <div className='row my-lg-3 mx-lg-0 mx-2'>
                    <div className='col-md-6 d-md-none d-block Study'>
                        <img width={500} height={200} src={study} className="img-fluid" alt="hero-Image"/>
                    </div>
                    <div className='col-md-6 d-flex align-items-center'>
                        <div className=''>
                            <h4 className='start'>
                                Welcome to the start of endless opportunities and potential.
                            </h4>
                        </div>
                    </div>
                    <div className='col-md-6 d-md-block d-none Study'>
                        <img width={500} height={200} src={study} className="img-fluid" alt="hero-Image"/>
                    </div>
                </div>
            </div>
            <div>
                <Banner/>
            </div>
            <div>
                <div className='my-lg-4 mastery mx-lg-0 mx-2'>
                    <p className=' h2 text-secondary text-center'>
                        Mastering skills unlocks limitless potential.
                    </p>
                    <p className='text-lg-center text-start'>Whether you want to learn a new skill, train your teams, or share what you know with the world, you’re in the right place. As a leader in online learning, we’re here to help you achieve your goals and transform your life.</p>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row d-lg-flex justify-content-center gap-4 my-lg-4 my-5'>
                    <div className="card cards col-md-4 p-0">
                        <img height={200} src={TechCom} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card cards col-md-4 p-0">
                        <img src={Colab} height={200} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card cards col-md-4 p-0  ">
                        <img src={DoIt} height={200} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Explore heading="Explore our e-learning roadmap"/>
            <div className='mx-lg-5 my-lg-3'>
                <Register/>
            </div>
            <div className='text-center matter my-lg-0 my-3 mx-auto'>
                <p className='fst-italic'>
                    We’re here to guide you on your journey, no matter where you’re headed. Whether you're just starting or want to learn more about technology, our handpicked collection of beginner-friendly courses makes it easy to dive in. We help everyone, from small businesses to nonprofits, embrace learning and keep growing. Let’s put learning at the heart of your next big step!
                </p>
                <button className='btn text-capitalize btn-dark rounded-0 my-lg-1'>learn more</button>
            </div>
            <div className='overflow-hidden d-flex justify-content-center m-lg-3 w-full'>
                <div className="row ">
                    <div className="col-sm-4 d-flex justify-content-center  mb-3 mb-sm-0">
                        <div className="card cards">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">Work with us</h5>
                                <p className="card-text text-secondary">At Instructly, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                                <a href="/" className="btn btn-light">Discover</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center mb-lg-0 mb-3">
                        <div className="card cards">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">See our research </h5>
                                <p className="card-text text-secondary">We’re committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                                <a href="/" className="btn btn-light">Discover</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center mb-lg-0 mb-3">
                        <div className="card cards">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">Roadmap </h5>
                                <p className="card-text text-secondary">We’re committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                                <a href="/" className="btn btn-light">Discover</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default about;