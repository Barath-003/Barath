import "./Login.css";
import {Link} from 'react-router-dom'
import frame1 from "./assets/frame1.svg";
import flatColorIconsgoog from "./assets/flatColorIconsgoog.svg";
import image45 from "./assets/image45.png";
const Login = () => {
  return (
    <div className="mac-book-pro-16-3">
      <div className="android-large-2">
        <div className="ant-designplus-circl">
          <div className="medi-1">
            <img className="image-45" alt="" src={image45} />
            <span className="email" >Email</span>
            <input className="frame" type="email"  placeholder="    Enter Email"  required/>
         
            <span className="password">Password</span>
            <input className="frame" type="password"  placeholder="   Enter Password "  required/>
            <div className="flex-container"></div>
            
             <div> <span> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forget Password &nbsp;  &nbsp;  </span>
              <span className="addozlgpwurel">|&nbsp;</span><h7 style={{color:"rgb(255, 255, 255)"}}>&nbsp;No account ?</h7><Link to='/Signup'><h7 style={{color:"lightblue"}}> Create one!</h7></Link>
             
            </div>
            <div>
              <img className="frame-1" alt="" src={frame1} />
              <img className="frame-2" alt="" src={frame1} />
            </div>
            <div className="flex-container-1">
              <span className="or">OR</span>
              </div>
            <div className="flex-container-2">
              <img className="flat-color-iconsgoog" alt="" src={flatColorIconsgoog} />
              <div className="google"><span>Login with Google  </span>
              </div>
            </div>
            <div className="rectangle-log">
           
             <Link to='/Home' ><span className="login" >LOGIN</span></Link>
              
            
              


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
