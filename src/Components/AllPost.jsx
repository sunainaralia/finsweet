import { PostContext } from '../Store/Post.store';
import { useContext, useState } from 'react';
function AllPost() {
  let postcontext = useContext(PostContext)
  let allPost = postcontext.item
  let [currentPage, setCurrentPage] = useState(1)
  let postOnPage = 4
  let lastIndexOfPost = currentPage * postOnPage
  let firstIndexOfPost = lastIndexOfPost - postOnPage
  let [currentPost, setCurrentPost] = useState(allPost.slice(firstIndexOfPost, lastIndexOfPost))
  function view_all() {
   setCurrentPost(allPost)
  }
  return (
    <div className="col-10 col-lg-5">
      <div>
        <div className="d-flex align-items-center justify-content-between pb-2 pb-lg-4 mb-2 pt-3 pt-lg-0">
          <p className="ff_sen fs_2xl fw-bold clr_primary ">All Posts</p>
          <a href="#" className="clr_tertiary ff_inter fw-normal text-decoration-none fs_sm " onClick={view_all}>View All</a>
        </div>
        {currentPost.map(item =>
          <div className="p_32 post">
            <p className='ff_inter fs_xsm clr_parasecond fw_500 pb-2'>By <span className='clr_tertiary'>{item.username}</span>   l   {item.date}</p>
            <p className='clr_primary ff_sen fs_lg fw-bold lh_32 pt-1 pb-3 '>8 Figma design systems that you can download for free today.</p>
          </div>
        )}
      </div>

    </div>
  )
}
export default AllPost