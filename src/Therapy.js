import "./Therapy.css";
import {Link} from 'react-router-dom'
import vector from "./assets/vector.svg";
const Therapy = () => {
  return (
    <div className='bdyt'>
        
      <div class="header-imaget"><Link to="/Home"><img className="vectorT" alt="" src={vector} /></Link>
      <center><div className='htextt'>T H E R A P Y</div></center></div>
      <a href='/Therapy2'><div class="header3t"><center><div className='h1text'></div></center></div></a>
      <div class="header2t"><center><div className='h1text'></div></center></div>
      <div className="header4t"><center><div className='h1text'></div></center></div>
      <div className="header5t"><center><div className='h1text'></div></center></div>
      </div>
  )}
  export default Therapy;