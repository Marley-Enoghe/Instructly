import React from 'react';

const register = () => {
    return (
        <div className='w-full'>
            <div className='d-lg-flex registercom p-lg-5 p-3 align-items-center justify-content-between'>
                <div>
                    <div>
                        <p className='h3 text-light fs-1 text-capitalize'>ready to join?</p>
                    </div>
                    <div className='estab text-light'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className=''>
                    <div className="d-grid gap-2">
                        <button className="btn btn-light regbtn" type="button">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default register;