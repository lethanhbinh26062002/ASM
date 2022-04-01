import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signin } from '../api/user';
import { ToastContainer,toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


type FormInputs = {
  email: string,
  password: string | number
};
const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSumbit: SubmitHandler<FormInputs> = async (user) => {
    const { data } = await signin(user);
    if (data) {
      toast.success("Bạn đã đăng nhập thành công, chờ 3s");
      setTimeout(() => {
        navigate('/')
        localStorage.setItem("user", JSON.stringify(data))
      }, 3000)
    }
  }
  return (
    
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3" onSubmit={handleSubmit(onSumbit)}>
                  <div className="form-group">
                    {errors.email && <span className="text-base badge badge-warning">Nhập email</span>}
                    <input type="email" {...register('email', { required: true })} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    {errors.password && <span className="text-base badge badge-warning">Nhập email</span>}
                    <input type="password" {...register('password', { required: true })} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">Đăng nhập</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">

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