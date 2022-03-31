import React from 'react'
import { Link } from 'react-router-dom';
type Props = {}

const Signin = (props: Props) => {
  return (
<div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth">
      <div className="row flex-grow">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left p-5">
            <h4>Hello! let's get started</h4>
            <h6 className="font-weight-light">Sign in to continue.</h6>
            <form className="pt-3">
              <div className="form-group">
                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="mt-3">
                <a className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" /> Keep me signed in </label>
                </div>
                <a href="#" className="auth-link text-black">Forgot password?</a>
              </div>
              <div className="mb-2">
              </div>
              <div className="text-center mt-4 font-weight-light"> Don't have an account? <Link to={`/signup`}>Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

  )
}

export default Signin