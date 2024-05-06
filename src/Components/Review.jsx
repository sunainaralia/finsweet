import { useContext,useState } from "react"
import {PostContext} from '../Store/Post.store'
import leftArrow from '../assets/left_arrow.png'
import rightArrow from '../assets/right_arrow.svg'
function Review(){
  let contextData=useContext(PostContext)
  let reviews=contextData.review
  let [currentPage,setCurrentPage]=useState(0)
  let review=reviews[currentPage]
  function pre(){
    if(currentPage<1){
      currentPage
    }else{
      setCurrentPage(currentPage - 1)
    }
    
  }
  function next(){
    if((reviews.length-1)==currentPage){
      currentPage
    }else{
      setCurrentPage(currentPage + 1)
    }
  }
  return  <div className="col-10 col-md-5 pe-0 me-0 pe-md-3 me-md-3 pe-xl-5 me-xl-5">
      <div className="d-flex flex-column justify-content-between ">
      <p className="ff_sen fw-bold fs_lg clr_primary lh_32 pb-3 pb-lg-5 text_md_cntr ps-5 ps-md-0">{review.body}</p>
        <div className="d-flex pt-3 pt-lg-5 align-items-center justify-content-between flex-column flex-lg-row">
          <div className="d-flex">
          <img src={review.user_img} alt="" className="pe-2 wh_56" />
            <div className="ps-2 pe-2">
              <p className="ff_sen  fw-bold fs_lg lh_32 text-nowrap">{review.username}</p>
              <p className="ff_inter fs_sm fw-normal clr_secondary">{review.city}</p>
            </div>
          </div>
          <div className="d-flex mt-3 mt-lg-0">
            <img src={leftArrow} alt="" className="pe-4" onClick={pre} />
            <img src={rightArrow} alt="" onClick={next} className="img_bg" />
          </div>
        </div>
      </div>
    </div>
  
}
export default Review