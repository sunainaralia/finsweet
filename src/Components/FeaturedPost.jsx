import { PostContext } from '../Store/Post.store';
import { useContext } from 'react';
function FeaturedPost() {
  let postcontext = useContext(PostContext)
  let allPost = postcontext.item
  let singlePost=allPost.find(post=>post.id===1)
  return (
    <div className="col-12 col-lg-7">
      <div className="">
        <p className="ff_sen fs_2xl fw-bold clr_primary pb-3 pb-lg-4 mb-2">Featured Post</p>
        <div className='bg_powder brdr_grey p_32'>
          <img src={singlePost.img} alt="" className='w-100 h-100'/>
          <p className='pt-3 pt-lg-4 mt-2 ff_inter fs_xsm clr_parasecond fw_500 pb-3'>By <span className='clr_tertiary'>{singlePost.username}</span>   l   {singlePost.date}</p>
          <p className='clr_primary ff_sen fs_xl fw-bold lh_40 pt-1 pb-2 pb-lg-3'>{singlePost.heading}</p>
          <p className='clr_secondary ff_inter lh_32 fw-normal fs_sm pt-1 pb-2'>{singlePost.body}</p>
          <a href="#" className="bg_highlight clr_primary pt_16 pb_16 ps-5 pe-5 fs_md fw-bold ff_sen text-decoration-none d-inline-block mt-2 mt-lg-4">Read More &gt;</a>
        </div>
      </div>


    </div>
  )
}
export default FeaturedPost