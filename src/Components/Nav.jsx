import img from '../assets/Logo.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  let [navbar,setNavbar]=useState(false)
  function show_hide(){
    if(navbar){
      setNavbar(false)
    }
    else{
      setNavbar(true)
    }
  }
  return (
    <nav className='bg_primary pt-3 pb-3'>
      <div className='d-flex align-items-center justify-content-between mt-3 container'>
        <img src={img} alt="" className='' />
        <ul className='d-md-flex align-items-center nav' style={{ left: navbar ? '0%' : '-100%' }}>
          <Link to='/' className='text-decoration-none'><li className='clr_powder ff_inter fw-normal fs_sm pe-4'>Home</li></Link>
          <Link to='blog/' className='text-decoration-none'><li className='clr_powder ff_inter fw-normal fs_sm pe-4'>Blog</li></Link>
          <Link to='aboutus/' className='text-decoration-none'><li className='clr_powder ff_inter fw-normal fs_sm pe-4'>About Us</li></Link>
          <Link to='contactus/' className='text-decoration-none'> <li className='clr_powder ff_inter fw-normal fs_sm pe-4'>Contact Us</li></Link>
          <li className=' bg_powder '>
            <a href="#" className='ff_sen fw-bold fs_md clr_primary txt_none  pt-3 pb-3 bg_powder ps-5 pe-5 d-inline-block'>Subscribe</a>
          </li>
        </ul>
        <div class="d-flex flex-column d-md-none navbar navbar-dark bg-dark" onClick={show_hide}>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Nav