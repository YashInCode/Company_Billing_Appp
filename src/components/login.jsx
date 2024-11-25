import { Link } from "react-router-dom";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css"
import Dashboard from "./dashboard";
import img from './../images/Login.png'

const Login = () => {


    return (
        <div className="container-fluid" id="back">
            <div className="row">
                <div className="col-xl-6">   <img src={img} width={750} height={720} /></div>
                <div className="col-xl-6" id="main">
                    <h1> Welcome to Victoria </h1>
                    <p className="text-secondary"> Innovative Solutions For All Your Billing Needs </p>
                    <table className="mt-5">
                        <tr>
                            <th> User Name </th>
                        </tr>
                        <tr >
                            <td>
                                <input type="text" placeholder="johndoe@email.com" className="mt-2 form-control" />
                            </td>
                        </tr>
                        <tr>
                            <th> Password </th>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" placeholder="**********" className="form-control mt-2 mb-2" />
                            </td>
                        </tr>
                        <tr>
                            <input type="checkbox" /> Remember Password
                            <a href="#" id="link"> Forgot Password ? </a>

                        </tr>
                    </table>
                    <hr />

                    <button className="btn btn-primary " id="btn">
                            <Link to="/dashboard" className="toplink"> Login </Link>
                        </button>
                
                </div>
            </div>
        </div>
    )
}

export default Login;
