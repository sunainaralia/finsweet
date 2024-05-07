import img from '../assets/Logo.svg'
import facebook from '../assets/facebook2.svg'
import linkdin from '../assets/linkdin2.svg'
import insta from '../assets/insta2.svg'
import twitter from '../assets/twitter2.svg'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Footer() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return <div>
    <div className='bg_primary pt-3 pt-lg-5 pb-5'>
      <div className='pt-3 container pb-3'>
        <div className='d-flex align-items-center justify-content-between pb-4 pb-lg-5'>
          <img src={img} alt="" className='' />
          <ul className='d-md-flex align-items-center footers' style={{ left: showNav ? '0%' : '-100%' }}>
            <Link to='/' className='text-decoration-none'><li className='clr_powder ff_inter fw-normal fs_sm pe-4'>Home</li></Link>
            <Link to='blog/' className='text-decoration-none'><li className='clr_powder ff_inter fw-normal fs_sm pe-4'>Blog</li></Link>
            <Link to='aboutus/' className='text-decoration-none'><li className='clr_powder ff_inter fw-normal fs_sm pe-4'>About Us</li></Link>
            <Link to='contactus/' className='text-decoration-none'> <li className='clr_powder ff_inter fw-normal fs_sm pe-4'>Contact Us</li></Link>
            <li className='clr_powder ff_inter fw-normal fs_sm pe-4'>
              Privacy Policy
            </li>
          </ul>
          <div class="d-flex flex-column d-md-none navbar navbar-dark bg-dark" onClick={toggleNav}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className='bg_secondary ps-3 pe-3 pt-3 pt-lg-4 pb-3 pb-lg-4 mb-3 mb-lg-5'>
          <div className='d-flex justify-content-between align-items-center  mt-1 p-3 p-lg-5 flex-wrap'>
            <p className='ff_sen fw-bold clr_powder fs_2xl lh_48 w-100 w_lg_50 pb-3  pb-lg-0'>Subscribe to our news letter to get latest updates and news</p>
            <div className='w-100 w_lg_50 text-end'>
              <input type="email" name="" id="" placeholder='Enter Your Email' className='email_brdr clr_secondary pt_16 pb_16 ps-4 w-100 w_lg_50 bg_secondary' />
              <Button content={'Subscribe'} classname={'ms-0 ms-lg-4 w_lg_100 text-center mt-3 mt-lg-0'} />

            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between flex-column flex-sm-row align-items-center'>
          <div>
            <p className='ff_inter fw-normal fs_sm clr_secondary lh_32 text_sm_cntr'>Finstreet 118 2561 Fintown</p>
            <p className='ff_inter fw-normal fs_sm clr_secondary lh_32 text_sm_cntr'>Hello@finsweet.com  020 7993 2905</p>
          </div>
          <div>
            <img src={facebook} alt="" className='pe-4' />
            <img src={twitter} alt="" className='pe-4' />
            <img src={linkdin} alt="" className='pe-4' />
            <img src={insta} alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>
}
export default Footer