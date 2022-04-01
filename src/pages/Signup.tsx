import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { signup } from '../api/user';

type Inputs = {
  name: string,
  email: string,
  password: string | number
};
const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  // sử dụng hook useNavigate để chuyển sang
  const navigate = useNavigate()
  const onSumbit: SubmitHandler<Inputs> = async (user) => {
    const { data } = await signup(user);
    if (data) {
      toast.success("Bạn đã đăng ký thành công, chờ 3s");
      setTimeout(() => {
        navigate('/signin')
      }, 3000)
    }
  }
  return (
    <><div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3" action="" onSubmit={handleSubmit(onSumbit)}>
                  <div className="form-group">
                    <input type="text" {...register('name')} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="email" {...register('email')} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" {...register('password')} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" /> I agree to all Terms &amp; Conditions </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light"> Already have an account?<Link to={`/signin`}>Login</Link>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div></>

  )
}

export default Signup