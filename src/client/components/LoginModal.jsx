import React from 'react';

const LoginModal = () => {
    return (
        <div className="modal fade" id="elegantModalForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="false">
            <div className="modal-dialog" role="document">

                <div className="modal-content form-elegant">

                    <div className="modal-header text-center">
                        <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Sign
                            in</strong></h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body mx-4">

                        <div className="md-form mb-5">
                            <input type="email" id="Form-email1" className="form-control validate"/>
                            <label data-error="wrong" data-success="right" htmlFor="Form-email1">Your email</label>
                        </div>

                        <div className="md-form pb-3">
                            <input type="password" id="Form-pass1" className="form-control validate"/>
                            <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Your password</label>
                            <p className="font-small blue-text d-flex justify-content-end">Forgot <a href="/"
                                                                                                 className="blue-text ml-1">
                                Password?</a></p>
                        </div>

                        <div className="text-center mb-3">
                            <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in
                            </button>
                        </div>
                        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign
                            in
                            with:</p>

                    </div>

                    <div className="modal-footer mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="/"
                                                                                                    className="blue-text ml-1">
                            Sign Up</a></p>
                    </div>
                </div>

            </div>
        </div>
    
    )
}

export default LoginModal
