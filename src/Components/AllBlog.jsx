import { useContext, useState } from 'react';
import { PostContext } from '../Store/Post.store'
function AllBlog() {
  let allData = useContext(PostContext)
  let allBlog = allData.item
  let [currentPage, setCurrentPage] = useState(1)
  let postOnOnePage = 5
  let indexOfLastPost = currentPage * postOnOnePage
  let indexOfFirstPost = indexOfLastPost - postOnOnePage
  let currentPost = allBlog.slice(indexOfFirstPost, indexOfLastPost)
  function prev() {
    if (currentPage === 1) {
      return currentPage
    } else {
      setCurrentPage(currentPage - 1);
    }
  }
  function next() {
    if (allBlog.length == currentPage * postOnOnePage) {
      return currentPage
    }else if(allBlog.length<currentPage*postOnOnePage){
      return currentPage
    }
    else {
      setCurrentPage(currentPage + 1)
    }
  }
  return <>
    <div className="pt-3 mt-1 pt-lg-5 mt-lg-3">
      <div className="container">
        <p className="ff_sen fw-bold fs_3xl lh_64 clr_primary pb-2 pb-lg-4 mb-1 mb-lg-2">All posts</p>
        <hr className="mb-3 mb-lg-5" />
        {
          currentPost.map(items =>
            <div className="pt-2 row w_90 justify-content-between pb-3 pb-lg-5 align-items-center">
              <div className="col-10 col-md-6 col-lg-5 m-auto m-md-0">
                <img src={items.img} alt="" className='w-100 h_322' />
              </div>
              <div className='col-12 col-md-6'>
                <div>
                  <p className='ff_inter pt-2 pt-md-0 clr_tertiary fw_600 text_md_cntr lh_32 fs_sm ltr_spc_3 pb-2 pb-lg-3'>{items.post_on.toUpperCase()}</p>
                  <p className='pt-1 pt-lg-2 ff_sen fw-bold text_md_cntr fs_2xl pb-1 pb-lg-2 clr_primary'>{items.title}</p>
                  <p className='ff_inter fw-normal text_md_cntr clr_secondary pt-2 fs_sm'>{items.body}</p>
                  <hr className=' d-block d-md-none'/>
                </div>
              </div>
            </div>
          )
        }
        <div className='d-flex align-items-center justify-content-center pb-2 pb-lg-3'>
          <a href='#' className='clr_secondary ff_sen fw-bold lh_32 fs_lg pe-2 text-decoration-none' onClick={prev}>&lt; Prev</a>
          
            <a href='#' className='clr_primary ff_sen fw-bold lh_40 fs_xl ps-2 text-decoration-none' onClick={next}>Next &gt;</a>
     
        </div>
      </div>
    </div>
  </>
}
export default AllBlog