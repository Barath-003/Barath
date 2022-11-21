import React, { Component } from 'react'
import "./Home.css";
import {Link} from 'react-router-dom'

 class Home extends Component {
  render() {
    return (
      <>
      <div className='bdy'>
      <div class="header-image"><center><div className='htext'></div></center></div>
      <Link to="/Therapy"><div class="header3"><center><div className='h1text'>T H E R A P Y</div></center></div></Link>
      <div class="header2"><center><div className='h1text'>M E D I T A T I O N</div></center></div>
     <Link to="/Sleep"> <div className="header4"><center><div className='h1text'>S L E E P</div></center></div></Link>
      <Link to="/Mood"><div className="header5"><center><div className='h1text'>M O O D  C H A N G E R</div></center></div></Link>
      <Link to="/Music"><div className="header6"><center><div className='h1text'>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;M U S I C</div></center></div></Link>
      </div>
      </>
    )
  }
}

export default Home