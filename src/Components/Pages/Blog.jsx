import man_on_pc from '../../assets/man_on_pc.png'
import { useContext } from 'react'
import { PostContext } from '../../Store/Post.store'
import AllBlog from '../AllBlog'
import business_icon from '../../assets/business_icon.png'
import economy_icon from '../../assets/economy_icon.svg'
import startup_icon from '../../assets/startup_icon.svg'
import tech_icon from '../../assets/tech_icon.png'
import JoinNow from '../JoinNow'
import Button from '../Button'
function Blog() {
  let postcontext = useContext(PostContext)
  let allPost = postcontext.item
  let singlePost = allPost.find(post => post.id === 5)
  return <>
  {/* -----------header--------------- */}
    <header>
      <div className="bg_sky min-vh-90 d-flex flex-column pt-5">
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
          <div className=" row justify-content-between align-items-center flex-column-reverse flex-md-row">
            <div className="col-12 col-md-6">
              <div>
                <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary pb-3">Featured Post</p>
                <p className="ff_sen clr_primary fw-bold lh_48 fs_2xl pt-2 pb-2">{singlePost.title}</p>
                <p className='ff_inter fs_xsm clr_parasecond fw_500 pb-2 pt-2'>By <span className='clr_tertiary'>{singlePost.username}</span>   l   {singlePost.date}</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2 pb-4">{singlePost.body}</p>
                <Button content={'Read More >'} classname={'mt-2 mb-3 mb-md-0'}/>
              </div>
            </div>
            <div className="col-12 col-md-5 mb-3 mt-3 m-md-0">
              <img src={man_on_pc} alt="" className='w-100 h-100' />
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* ----------All post-------- */}
    <section>
      <AllBlog />
    </section>
    {/* ------------all categories----------------- */}
    <section>
     <div className='pt-3 pb-3 pt-lg-5 container pb-lg-5'>
        <p className='ff_sen clr_primary fw-bold lh_48 fs_2xl pb-3 pb-lg-5 text_sm_cntr'>All Categories</p> 
        <div className="row pb-3 pb-lg-5 justify-content-between align-items-center">
          <div className="col-10 col-sm-6 col-lg-3 mb-3 m-auto m-lg-0">
            <div className="p-2 brdr">
              <div className="p-2
              p-sm-4">
                <img src={business_icon} alt="" className="pb-2" />
                <p className="ff_sen fw-bold lh_40 fs_xl clr_primary pt-2 pb-0 pb-sm-2">Business</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

              </div>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-3 mb-3 m-auto m-lg-0">
            <div className="p-2 brdr">
              <div className="p-2
              p-sm-4">
                <img src={startup_icon} alt="" className="pb-2" />
                <p className="ff_sen fw-bold lh_40 fs_xl clr_primary pt-2 pb-0 pb-sm-2">Startup</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

              </div>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-3 mb-3 m-auto m-lg-0">
            <div className="p-2 brdr">
              <div className="p-2
              p-sm-4">
                <img src={economy_icon} alt="" className="pb-2" />
                <p className="ff_sen fw-bold lh_40 fs_xl clr_primary pt-2 pb-0 pb-sm-2">Economy</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

              </div>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-3 mb-3 m-auto m-lg-0">
            <div className="p-2 brdr">
              <div className="p-2
              p-sm-4">
                <img src={tech_icon} alt="" className="pb-2" />
                <p className="ff_sen fw-bold lh_40 fs_xl clr_primary pt-2 pb-0 pb-sm-2">technology</p>
                <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
   <div className='pt-5 pb-5'>
          <JoinNow />
   </div>
     </div>
    </section>
  </>
}
export default Blog