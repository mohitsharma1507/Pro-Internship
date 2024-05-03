
import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className= "alert alert-success "role="alert" style={{fontWeight:"15"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now </h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Signup</button>
                
                  <Link to="/signIn">or, SignIn</Link>
                  </div>
                <div className="text-center footer">
                  <p><i className="fa-brands fa-facebook">&nbsp;&nbsp;&nbsp;&nbsp;</i>Signup with Facebook</p>
                </div>
                <div className=" text-center footer">
                  <p><i className="fa-brands fa-google">&nbsp;&nbsp;&nbsp;&nbsp;</i>Signup with Google</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;