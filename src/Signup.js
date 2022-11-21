import "./Signup.css";
import {Link} from 'react-router-dom'
//import rectangle64 from "./assets/rectangle64.svg";
//import rectangle84 from "./assets/rectangle84.svg";
//import ellipse3 from "./assets/ellipse3.svg";
import vector from "./assets/vector.svg";
const Signup = () => {
  return (

    <div className="android-large-30" >
      <div>
      </div>
    <center>
      <div className="laura-vinck-hyu-76-lo-q"> <div className=".flex-head-2">
        <Link to="/Login"><img className="vector" alt="" src={vector} /></Link>
        <div className="sign-up">< span>SIGN UP</span></div></div>
        <div className="flex-container-F">
          
     
        <span className="first-name">First Name</span>
          <input className="rectangle-85" type="text" required />

        </div>
        <div className="flex-container-L">
          <span className="last-name">Last Name</span>
          <input className="rectangle-85" type="text" required />
        </div>
        <div className="flex-container-2">
          <span className="date-of-birth">Date of Birth</span>
          <input className="rectangle-85" type="date" required/>
          
        </div>
        <div className="flex-container-3">
          <span className="gender">Gender</span>
          
          <input className="ellipse-3" type="radio" ></input>
          <span className="male">Male</span>
          <input className="ellipse-3" type="radio" value="female" />
          <span className="female">Female</span>

        </div>
        <div className="flex-container-4">
          <span>Email</span>
          <input className="rectangle-88" type="email" placeholder="              Email" />
        </div>
        <div className="flex-container-5">
          <span>Password</span>
          <input className="rectangle-89" type="password" />
        </div>
        <div className="flex-container-6">
          <span>City</span>
          
          <input className="rectangle-88"  />
        </div>
        <div className="flex-container-7">
          <span>Phone Number</span>
          <input className="rectangle-94" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          
        </div>
        <div className="flex-container-8">
          <center>
          <button type="submit" value="submit" className="rectangle-sign">
            <Link to="/Submit"><span className="submit">SUBMIT</span>
          </Link></button> </center>
        </div>
      </div></center>
    </div>
  );
};
export default Signup;
