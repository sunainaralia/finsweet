import group_photo from '../assets/group_photo.png'
import yellow_blue from '../assets/yellow_blue.png'
import multi_hand from '../assets/multi_hand.png'
import yellow from '../assets/yellow.png'
import three_friends from '../assets/three_friends.png'
import circle from '../assets/circle.svg'
import Authors from './Authors'
import JoinNow from './JoinNow'
function AboutUs() {
  return <>
    {/* -------header------------ */}
    <header >
      <div className="pt-3 mt-2 pt-lg-5 mt-lg-4 container ">
        <div className="d-flex justify-content-between flex-column-reverse justify-content-lg-end flex-md-row-reverse flex-lg-row pt-3 pt-lg-5 position-sticky psn_lg_rel align-items-center">
          <p className="ff_inter fw-normal fs_sm lh_32 clr_parasecond col-12 col-md-6 col-lg-5 pe-3 pe-lg-5 mb-3 mb-lg-5 z-1 pt-3pt-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
          <div className='col-md-5 bg_powder p-0 p-md-2 position-static psn_lg_abs about_img'>
              <div className="p-0 p-lg-5">
                <p className="ff_inter fw_500 fs_sm ltr_spc_3 clr_primary pb-2 pb-lg-4">ABOUT US</p>
                <p className="ff_sen fw-bold fs_3xl clr_primary lh_64 pb-3"> We are a team of content writers who share their learnings</p>
              </div>
            </div>
          
        </div>
        <div className='position-relative '>
          <img src={group_photo} alt="" className='w-100 h_sm_600 object-fit-cover' />
          <div className='ps-3 pe-3 bg_highlight col-12 col-md-10 col-xl-6 position-absolute yellow_bg d-none d-sm-block'> 
            <div className='pt-5 pb-5 pe-4 ps-4 d-flex justify-content-between align-items-center'>
              <p className='ff_sen fw-bold fs_4xl lh_40 clr_primary'>12+ <br /><span className=' ff_inter fs_sm fw-normal'>Blogs Published</span></p>
              <p className='ff_sen fw-bold fs_4xl lh_40 clr_primary'>18K+<br /><span className=' ff_inter fs_sm fw-normal'>Views on Finsweet</span></p>
              <p className='ff_sen fw-bold fs_4xl lh_40 clr_primary'>30K+<br /><span className=' ff_inter fs_sm fw-normal'>Total active Users</span></p>
            </div>
          </div>
          <img src={yellow_blue} alt="" className=' position-absolute z-1 yellow_img overflow-hidden d-none d-xl-block' />
        </div>
      </div>

    </header>
    {/* ----------aboutus----------- */}
    <section>
      <div className="container">
        <div className="bg_sky pt-3 pb-3 pt-lg-5 pb-lg-5 ps-4 pe-4 mb-3 mb-lg-5">
          <div className="row justify-content-between p-3  pt-lg-5 pb-lg-5 ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-6">
              <div>
                <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary pb-4">OUR MISSION</p>
                <p className="ff_sen fw-bold fs_2xl clr_primary lh_40 pb-3">Creating valuable content for creatives all around the world</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-1 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className=" col-12 col-lg-6">
              <div>
                <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary pb-4">OUR VISION</p>
                <p className="ff_sen fw-bold fs_2xl clr_primary lh_40 pb-3"> A platform that empowers individuals to improve</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-1 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    {/* -----------our team of creativities------------ */}
    <section>
      <div className='container pt-3 pt-lg-5 mb-3 mb-lg-5 pb-2 pb-lg-5'>
        <div className="row justify-content-between align-items-xl-center pb-5 flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6">
            <div className='text-center' >
              <p className='ff_sen fw-bold fs_2xl clr_primary lh_48 pb-2'>Our team of creatives</p>
              <p className='pt-2 ff_sen clr_primary fs_lg lh_32 pb-2 fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <p className='pt-2 clr_primary ff_inter fw-normal lh_32 fs_lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  eu.</p>
            </div>
          </div>
          <div className="col-10 col-lg-5 position-relative pb-3 p-lg-0 h-75 m-auto m-lg-0">
            <img src={multi_hand} alt="" className='w-100' />
            <img src={yellow} alt="" className=' position-absolute yellow_sticker d-none d-md-block' />
          </div>
        </div>
        <div className="row justify-content-between align-items-xl-center pt-3 pt-lg-5 flex-column flex-lg-row">
          <div className="col-10 col-lg-5 position-relative m-auto m-lg-0 pt-lg-5">
            <img src={three_friends} alt="" className='w-100 h-100' />
            <img src={circle} alt="" className=' position-absolute circle d-none d-lg-block' />
          </div>
          <div className="col-12 col-lg-6">
            <div className='text-center'>
              <p className='ff_sen fw-bold fs_2xl clr_primary lh_48 pb-2 pt-3 pt-lg-0'>Why we started this Blog</p>
              <p className='pt-2 ff_sen clr_primary fs_lg lh_32 pb-2 fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <p className='pt-2 clr_primary ff_inter fw-normal lh_32 fs_lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit  eu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* -----------list of authors and join now-------- */}
    <section>
      <div className="container pb-3 pb-lg-5">
        <p className="ff_sen fs_2xl fw-bold clr_primary pb-3 pt-3 pb-lg-5 pt-lg-5 text-center">List of Authors</p>
        <div className="row pb-3 pb-lg-5 justify-content-center">
          <Authors visible={8} />
        </div>
      </div>
      <div className='pb-3 mb-3 mb-lg-5 pb-lg-5 '>
        <JoinNow />
      </div>
    </section>
  </>
}
export default AboutUs;