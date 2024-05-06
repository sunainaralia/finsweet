import man_on_pc from '../assets/man_on_pc.png'
import { useContext} from 'react'
import { PostContext } from '../Store/Post.store'
function BlogPost() {
  let postcontext = useContext(PostContext)
  let allPost = postcontext.item
  let singlePost = allPost.find(post => post.id === 5)
  return <div className="bg_sky min-vh-90 d-flex flex-column">
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
        <div className=" row justify-content-between">
          <div className="col-6">
            <div>
              <p className="ff_inter fw_600 fs_sm ltr_spc_3 clr_primary pb-3">Featured Post</p>
              <p className="ff_sen clr_primary fw-bold lh_48 fs_2xl pt-2 pb-2">{singlePost.title}</p>
              <p className='ff_inter fs_xsm clr_parasecond fw_500 pb-2 pt-2'>By <span className='clr_tertiary'>{singlePost.username}</span>   l   {singlePost.date}</p>
              <p className="clr_secondary ff_inter lh_32 fw-normal fs_sm pt-2 pb-4">{singlePost.body}</p>
              <a href="#" className="bg_highlight clr_primary pt_16 pb_16 ps-5 pe-5 fs_md fw-bold ff_sen text-decoration-none d-inline-block mt-2">Read More &gt;</a>
            </div>
          </div>
          <div className="col-5">
            <img src={man_on_pc} alt="" className='w-100 h-100' />
          </div>
        </div>
      </div>
    </div>
}
export default BlogPost